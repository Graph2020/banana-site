import type { JSX } from "react";
import { TextAnimation } from "../animation/TextAnimation";
import React from "react";
import { HeroTextProps } from "../types/type";
export default function HeroText({
  title,
  subtitle,
  description,
  buttonTextOne,
  buttonTextTwo,
  spanText,
  icon: Icon,
  spanRef,
}: HeroTextProps): JSX.Element {
  return (
    <div className="relative z-10 flex w-full max-w-4xl flex-col items-start gap-4">
      <span
        ref={spanRef}
        className="font-body inline-block rounded-full bg-emerald-400 px-2 py-0.5 text-xs font-bold tracking-wide text-[#006817] uppercase"
      >
        {spanText}
      </span>
      <div className="w-72 sm:w-80 md:w-96">
        <TextAnimation splitType="words">
          <h1 className="text-title text-secondary">
            {title}
            <span className="text-title text-tertiary inline-block italic">
              {subtitle}
            </span>
          </h1>
        </TextAnimation>
      </div>
      <TextAnimation splitType="lines">
        <p className="font-body max-w-96 lg:text-lg">{description}</p>
      </TextAnimation>
      <div className="gap-elements flex flex-col items-center md:flex-row">
        <button className="btn-hero bg-primary text-secondary flex items-center px-4 py-2 text-sm">
          {buttonTextOne}
          <Icon className="ml-2 text-xl" />
        </button>
        <button className="btn-hero border-secondary text-secondary border px-2 py-1.5 text-[16px]">
          {buttonTextTwo}
        </button>
      </div>
    </div>
  );
}
