import type { JSX } from "react";

import React from "react";
import { CiShare2 } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="gap-elements font-body center-elements flex h-64 w-full flex-col rounded-tl-2xl rounded-tr-2xl bg-[#f4f9dc] p-3 text-center md:h-48 md:flex-row lg:text-lg">
      <div className="md:text-start">
        <h2 className="mini-title">Топ Банана</h2>
        <p>© 2026 Топ Банана. Всі права захищені.</p>
      </div>
      <div className="lg:gap-elements grid grid-cols-2 grid-rows-2 gap-1 px-7 py-1 lg:flex">
        <p>Vau</p>
        <p>Cool</p>
        <p>What</p>
        <p>To type?</p>
      </div>
      <div className="gap-elements flex">
        <button className="footerBtn">
          <CiShare2 />
        </button>
        <button className="footerBtn">
          <AiOutlineLike />
        </button>
      </div>
    </footer>
  );
}
