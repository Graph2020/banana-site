import React from "react";
import { BANANA_CARDS } from "@/app/consts";
import Image from "next/image";
import { notFound } from "next/navigation";
import { IoIosAddCircleOutline } from "react-icons/io";
import HeroText from "@/app/components/HeroText";
export default async function Banan({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const findBanan = BANANA_CARDS.find((banana) => banana.id === Number(id));

  if (!findBanan) {
    notFound();
  }

  return (
    <div className="space-sections bg-background-body flex min-h-screen flex-col items-center md:flex-row lg:justify-center lg:gap-30">
      <div className="relative mt-20 mb-10 h-64 w-[90%] rotate-2 md:order-1 lg:w-lg">
        <Image
          className="rounded-3xl object-center lg:-ml-10"
          src={findBanan.imageSrc}
          alt={findBanan.title}
          fill={true}
        />
      </div>
      <HeroText
        icon={IoIosAddCircleOutline}
        buttonTextOne="add to card"
        buttonTextTwo="nothing to type"
        spanText="premium"
        title={findBanan.title}
        subtitle="What a cool banana you choosed"
        description={findBanan.description}
      />
    </div>
  );
}
