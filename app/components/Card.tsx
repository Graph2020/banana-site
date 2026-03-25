import type { JSX } from "react";
import Image from "next/image";
import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  price: number;
  spanLabel: string;
  spanBg: string;
  spanTextColor: string;
}

export default function Card({
  imageSrc,
  title,
  description,
  price,
  spanLabel,
  spanBg,
  spanTextColor,
}: CardProps): JSX.Element {
  return (
    <div className="font-body gap-elements group relative flex h-96 w-full flex-col rounded-2xl bg-white p-4 transition-transform duration-300 hover:-translate-y-2 md:w-72">
      <div className="relative h-48 w-full overflow-hidden rounded-2xl">
        <Image
          fill={true}
          src={imageSrc}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span
          className={`absolute top-2 right-2 rounded-full px-3 py-1 text-white`}
          style={{ backgroundColor: spanBg, color: spanTextColor }}
        >
          {spanLabel}
        </span>
      </div>
      <div>
        <h2 className="font-headline mb-1 text-xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>

      <div className="flex w-full items-center justify-between">
        <p className="text-tertiary text-2xl font-black">${price.toFixed(2)}</p>
        <ButtonPrice />
      </div>
    </div>
  );
}

function ButtonPrice(): JSX.Element {
  return (
    <button className="group rounded-2xl bg-emerald-500 px-3 py-4">
      <FaShoppingBasket className="transition-transform group-hover:-rotate-3" />
    </button>
  );
}
