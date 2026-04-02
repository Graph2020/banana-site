"use client";
import type { JSX } from "react";
import React, { useRef } from "react";
import { bananaLinks } from "../consts";
import { LuBanana } from "react-icons/lu";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { SplitText } from "gsap/all";
import ToggleBg from "../components/ToggleBg";
import useToggle from "../hooks/useToggle";
gsap.registerPlugin(SplitText);

export default function NavBar(): JSX.Element {
  const { isToggled, toggle } = useToggle();
  const path = usePathname();
  const links = bananaLinks.map(({ name, href, id }) => (
    <Link
      key={id}
      href={href}
      className={`text-secondary after:bg-primary relative transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:text-black ${path === href ? "after:w-full" : ""}`}
    >
      {name}
    </Link>
  ));
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    const splitType = new SplitText(linksRef.current, { type: "words" });

    tl.from(navRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        "#brand",
        {
          x: -20,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.5",
      )
      .fromTo(
        "#btn-banana",
        {
          x: 20,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
        },
      )
      .from(splitType.words, {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
      });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 right-0 left-0 z-50 flex h-12 w-full items-center justify-between rounded-br-3xl rounded-bl-3xl bg-[#fbffd2] p-4"
    >
      <h3 id="brand" className="font-headline text-xl font-black italic">
        Банановий рай
      </h3>
      {/* links container */}
      <div ref={linksRef} className="hidden items-center gap-x-4 pt-1 md:flex">
        {links}
      </div>
      {/* button that opens the links */}
      <button
        id="btn-banana"
        className="bg-tertiary/90 text-primary/90 py-x w-fit cursor-pointer rounded-full px-2 transition-transform duration-300 hover:scale-105 hover:-rotate-3 active:scale-95 md:hidden"
        onClick={() => toggle()}
      >
        Дай банана
      </button>
      <LuBanana className="text-secondary hidden text-2xl md:block" />
      {isToggled && <ToggleBg toggled={isToggled} onClose={toggle} />}
    </nav>
  );
}
