import type { JSX } from "react";
import React from "react";

export default function NavBar(): JSX.Element {
  return (
    <nav className="bg-primary fixed inset-0 z-50 flex h-12 w-full items-center justify-between rounded-br-2xl rounded-bl-2xl p-4">
      <h3 className="font-headline text-xl font-black italic">Банановий рай</h3>
      <button className="bg-tertiary/90 text-primary/90 py-x w-fit cursor-pointer rounded-full px-2 transition-transform duration-300 hover:scale-105 hover:-rotate-3 active:scale-95">
        Дай банана
      </button>
    </nav>
  );
}
