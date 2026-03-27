"use client";
import React from "react";
import type { JSX } from "react";
import Form from "next/form";
import { IoMdSearch } from "react-icons/io";
import { useSearchParams } from "next/navigation";
import BananaFilterComponent from "../components/BananaFilterComponent";
import { BANANA_CARDS } from "../consts";
import Link from "next/link";
export default function FilterBanana(): JSX.Element {
  const searchParams = useSearchParams();
  const banan = searchParams.get("banan");
  const filteredBananas = banan
    ? BANANA_CARDS.filter((banana) => banana.type === banan)
    : BANANA_CARDS;
  const bananas = filteredBananas.map((banana, index) => (
    <Link
      href={`/typeBanana/${banana.title.toLowerCase().replace(/\s+/g, "-")}`}
      key={index}
    >
      <BananaFilterComponent
        imageSrc={banana.imageSrc}
        title={banana.title}
        description={banana.description}
        spanLabel={banana.spanLabel}
        spanBg={banana.spanBg}
        spanTextColor={banana.spanTextColor}
        cardBg={banana.cardBg}
        Icon={banana.Icon}
        type={banana.type}
      />
    </Link>
  ));
  return (
    <main className="space-sections gap-elements bg-background-body font-body flex min-h-screen w-full flex-col items-center">
      <div className="mt-20 text-center">
        <h1 className="text-title text-secondary">Знайди той</h1>
        <h1 className="text-title bg-linear-to-r from-[#4B4B28] via-[#8C9414] to-[#c4d137] bg-clip-text text-transparent">
          Самий банан!
        </h1>
      </div>
      <p className="text-center text-black/60 lg:text-xl">
        Братішка, неважливо який банан ти хочеш у нас він точно є красний синій
        жовтий алмазний пофіг замовляй
      </p>
      <SearchBanana />
      <div className="gap-elements flex flex-col">{bananas}</div>
    </main>
  );
}

function SearchBanana(): JSX.Element {
  return (
    <Form
      action="/typeBanana"
      className="font-body gap-elements flex min-h-12 w-full flex-col rounded-3xl bg-[#f4f9dc] px-4 py-3 md:flex-row md:items-center md:justify-between"
    >
      <div className="gap-elements flex w-full items-center md:flex-1">
        <IoMdSearch className="size-6" />
        <input
          name="banan"
          placeholder="e.g blue, red or whatever idk"
          className="w-full min-w-0 flex-1 outline-none"
        />
      </div>
      <button className="bg-primary w-full cursor-pointer rounded-3xl py-2 transition-transform duration-200 hover:scale-105 md:w-32">
        Знайти
      </button>
    </Form>
  );
}
