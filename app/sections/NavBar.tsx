"use client";
import type { JSX } from "react";
import React from "react";
import { BananaLinks } from "../types/type";
import { bananaLinks } from "../consts";
import { LuBanana } from "react-icons/lu";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function NavBar(): JSX.Element {
  const path = usePathname();
  const links = bananaLinks.map(({ name, href, id }) => (
    <Link
      key={id}
      href={href}
      className={`text-secondary transition-colors hover:text-black ${path === href ? "text-black" : ""}`}
    >
      {name}
    </Link>
  ));
  return (
    <nav className="bg-primary fixed inset-0 z-50 flex h-12 w-full items-center justify-between rounded-br-3xl rounded-bl-3xl p-4">
      <h3 className="font-headline text-xl font-black italic">Банановий рай</h3>
      {/* links container */}
      <div className="hidden items-center gap-x-4 pt-1 md:flex">{links}</div>
      {/* button that opens the links */}
      <button className="bg-tertiary/90 text-primary/90 py-x w-fit cursor-pointer rounded-full px-2 transition-transform duration-300 hover:scale-105 hover:-rotate-3 active:scale-95 md:hidden">
        Дай банана
      </button>
      <LuBanana className="text-secondary hidden text-2xl md:block" />
    </nav>
  );
}
