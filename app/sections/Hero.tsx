import type { JSX } from "react";
import React from "react";
import { CiShoppingBasket } from "react-icons/ci";

export default function Hero() {
  return (
    <section className="center-elements gap-elements min-h-screen w-full flex-col items-start p-4 text-start md:mt-0 md:p-10 lg:p-20">
      <span className="font-body inline-block rounded-full bg-emerald-400 px-2 py-0.5 text-xs font-bold tracking-wide text-[#006817] uppercase">
        freshly picked
      </span>
      <div className="w-72 sm:w-80 md:w-96">
        <h1 className="text-title text-secondary">
          Скоштуй це!
          <span className="text-title text-tertiary inline-block italic">
            Лютий смаколик який зайде всім людям
          </span>
        </h1>
      </div>
      <p className="font-body max-w-96 lg:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi
        error nam eum provident, ipsa sed deleniti nobis, blanditiis molestias
      </p>
      <div className="gap-elements flex flex-col items-center md:flex-row">
        <button className="btn-hero bg-primary text-secondary flex items-center px-4 py-2 text-sm">
          Купити банана
          <CiShoppingBasket className="ml-2 text-xl" />
        </button>
        <button className="btn-hero border-secondary text-secondary border px-2 py-1.5 text-[16px]">
          Дізнатися більше
        </button>
      </div>
    </section>
  );
}
