import type { JSX } from "react";

import React from "react";
import { ImCool } from "react-icons/im";
import { MdOutlineSpeed } from "react-icons/md";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
export default function QualityBanana() {
  return (
    <section className="space-sections font-body gap-elements center-elements min-h-screen flex-col bg-[#edf1d7] md:grid md:grid-cols-3 md:grid-rows-2">
      <div className="gap-elements bg-primary text-secondary flex h-80 w-full flex-col rounded-4xl px-8 py-10">
        <h2 className="mini-title font-headline">
          Кароче банан жоскій супер дупєр пакупаєм
        </h2>
        <p className="text-secondary/50">
          Я кароче жоско погоджуюсь тому що банани під жоскім контролєм тобто
          банани реально вкусні ням ням ням
        </p>
      </div>

      <BananaQuality
        icon={<ImCool />}
        text="Якість жоска"
        bgContainer="#34d399"
      />
      <BananaQuality
        icon={<MdOutlineSpeed />}
        text="Швидкість доставки жоска"
        bgContainer="#ffd1c5"
      />

      <div className="flex h-96 w-full flex-col gap-2.5 rounded-3xl bg-[#d7ddba] p-8 md:col-span-3 md:h-80">
        <h1 className="mini-title">Папєрєдження</h1>
        <p className="text-secondary/70">
          Ви мабуть не знали але якщо ходити по тротуару і побачити там бананову
          шкірку та настолочити на неї то ви можете впасти типу це не кльово ой
          я забув мені не можна казати слово &quot;типу&quot;{" "}
        </p>
        <span className="text-tertiary group flex cursor-pointer items-center gap-1 font-medium">
          Instruction{" "}
          <span className="transition-transform group-hover:translate-x-1">
            <FaArrowRight />
          </span>
        </span>
        <div className="relative h-30 w-full md:w-72">
          <Image
            className="rounded-3xl object-cover"
            src="/images/pavement.png"
            alt="Pavement"
            fill={true}
          />
        </div>
      </div>
    </section>
  );
}

function BananaQuality({
  icon,
  text,
  bgContainer,
}: {
  icon: JSX.Element;
  text: string;
  bgContainer: string;
}): JSX.Element {
  return (
    <div
      style={{ backgroundColor: bgContainer, color: "#00000080" }}
      className={`center-elements h-32 w-full flex-col gap-2 rounded-4xl md:h-full`}
    >
      <span className="text-5xl">{icon}</span>
      <p>{text}</p>
    </div>
  );
}
