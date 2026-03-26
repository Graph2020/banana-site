import React from "react";
import type { JSX } from "react";
export default function FilterBanana(): JSX.Element {
  return (
    <main className="space-sections bg-background-body font-body flex min-h-screen w-full flex-col items-center">
      <div className="mt-20 text-center">
        <h1 className="text-title text-secondary">Знайди той</h1>
        <h1 className="text-title bg-linear-to-r from-[#4B4B28] via-[#8C9414] to-[#c4d137] bg-clip-text text-transparent">
          Самий банан!
        </h1>
      </div>
    </main>
  );
}
