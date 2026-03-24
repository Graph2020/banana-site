import type { JSX } from "react";
import Image from "next/image";
import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  price: number;
}

export default function Card({
  imageSrc,
  title,
  description,
  price,
}: CardProps): JSX.Element {
  return (
    <div className="font-body gap-elements flex h-96 w-full flex-col rounded-2xl bg-white p-4">
      <div className="h-20 w-full overflow-hidden rounded-2xl">
        <Image fill={true} src={imageSrc} alt={title} />
      </div>
      <h2 className="font-headline font-medium">{title}</h2>
      <p className="mb-1">{description}</p>
      <div className="flex w-full items-center justify-between">
        <p>${price.toFixed(2)}</p>
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
