import type { JSX } from "react";
import clsx from "clsx";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Card from "../components/Card";
export default function About(): JSX.Element {
  return (
    <section className="space-sections mt-20 flex min-h-screen w-full flex-col gap-2 rounded-tl-2xl rounded-tr-2xl bg-[#edf1d7] pt-20 md:mt-0">
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
      {/* Banana cards */}
      <div className="mt-10 flex w-full flex-col gap-8 md:flex-row">
        <Card
          spanTextColor="black"
          title="Banana One"
          description="This is incredible banana is yours don't thank me"
          spanLabel="fresh"
          spanBg="#fffde7"
          price={20}
          imageSrc="/images/bananas.png"
        />
        <Card
          spanTextColor="#fffde7"
          title="Many Banans!"
          description="Чорт забирай стільки бананів ну це треба брати інакше розгребуть"
          spanLabel="quantity"
          spanBg="#00a86b"
          price={25}
          imageSrc="/images/manyBananas.png"
        />
        <Card
          spanTextColor="orange"
          title="Protein Banana"
          description="Чувак в щоці від банана, як ще це можна описати я не зроз"
          spanLabel="power"
          spanBg="#e2e6b4"
          price={30}
          imageSrc="/images/memeBanana.png"
        />
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
