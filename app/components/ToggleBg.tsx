"use client";
import type { JSX } from "react";
import React from "react";
import { SiGamebanana } from "react-icons/si";
import { bananaLinks } from "../consts";
import { FaLeaf } from "react-icons/fa";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
type ToggleBgProps = {
  onClose: () => void;
  toggled: boolean;
};
// this component will show when user clicks "дай банана"
export default function ToggleBg({
  onClose,
  toggled,
}: ToggleBgProps): JSX.Element {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const linksContainerRef = React.useRef<HTMLDivElement>(null);

  const links = bananaLinks.map(({ name, href, id }) => (
    <div key={id} className="toggle-link-item">
      <Link
        href={href}
        onClick={onClose}
        className="text-secondary relative transition-transform hover:scale-105"
      >
        {name}
      </Link>
    </div>
  ));
  useGSAP(
    () => {
      const linkNodes = gsap.utils.toArray<HTMLElement>(
        ".toggle-link-item",
        linksContainerRef.current,
      );
      const tl = gsap.timeline();

      tl.fromTo(
        containerRef.current,
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.inOut",
        },
      ).from(linkNodes, {
        y: 24,
        opacity: 0,
        stagger: 0.1,
        duration: 0.45,
        ease: "back.out(1.7)",
      });
    },
    { scope: containerRef, dependencies: [toggled] },
  );
  return (
    <div
      ref={containerRef}
      className="bg-primary fixed inset-0 z-60 min-h-screen p-10 md:hidden"
    >
      <button
        type="button"
        aria-label="Закрити меню"
        onClick={onClose}
        className="text-secondary absolute top-4 right-4 rounded-full p-1"
      >
        <IoMdClose className="text-3xl" />
      </button>
      <div
        ref={linksContainerRef}
        className="center-elements font-headline gap-elements h-full flex-col text-2xl"
      >
        {links}
      </div>
      <IconsDisplay />
    </div>
  );
}

function IconsDisplay() {
  return (
    <>
      <span className="absolute top-20 left-5 inline-block">
        <SiGamebanana size={64} />
      </span>
      <span className="absolute right-1 bottom-30 inline-block">
        <FaLeaf size={64} />
      </span>
    </>
  );
}
