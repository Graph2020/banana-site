import type { JSX } from "react";
import clsx from "clsx";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
export default function About(): JSX.Element {
  return (
    <section className="space-sections mt-20 flex min-h-screen w-full flex-col gap-2 rounded-tl-2xl rounded-tr-2xl bg-[#f4f9db] pt-20 md:mt-0">
      <div className="gap-elements flex w-full flex-col sm:flex-row sm:items-center sm:justify-around md:justify-between">
        <div className="space-y-4">
          <h1 className="text-title text-secondary">About page</h1>
          <p className="font-body max-w-96 lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            modi error nam eum provident, ipsa sed deleniti nobis, blanditiis
            molestias
          </p>
        </div>
        <div className="gap-elements flex">
          <ButtonArrow icon={<FaArrowLeft />} isActive={false} />
          <ButtonArrow icon={<FaArrowRight />} isActive={true} />
        </div>
      </div>
    </section>
  );
}

function ButtonArrow({
  icon,
  isActive,
}: {
  icon: JSX.Element;
  isActive: boolean;
}) {
  return (
    <button
      className={clsx(
        "center-elements size-12 cursor-pointer rounded-full p-2",
        isActive
          ? "bg-tertiary text-white transition-transform hover:scale-105"
          : "bg-quaternary border text-black transition-colors hover:bg-white",
      )}
    >
      {icon}
    </button>
  );
}
