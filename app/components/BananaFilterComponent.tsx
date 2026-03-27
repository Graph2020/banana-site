"use client";

import type { JSX } from "react";
import Image from "next/image";
import React from "react";

import type { BananaFilterProps } from "../types/type";

export default function BananaFilterComponent({
  imageSrc,
  title,
  description,
  spanLabel,
  spanBg,
  spanTextColor,
  cardBg,
  Icon,
}: BananaFilterProps): JSX.Element {
  return (
    <div
      className="font-body group relative flex h-112 w-full flex-col justify-between rounded-3xl p-4 transition-transform duration-300 hover:-translate-y-2 md:w-80"
      style={{ backgroundColor: cardBg }}
    >
      {/* Top Section: Image */}
      <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-3xl">
        <Image
          fill={true}
          src={imageSrc}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Middle Section: Text Content */}
      <div className="mt-4 flex grow flex-col">
        <h2 className="font-headline mb-2 text-2xl font-bold tracking-tight text-gray-800">
          {title}
        </h2>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      </div>

      {/* Bottom Section: Label & Icon */}
      <div className="mt-4 flex w-full items-center justify-between">
        <span
          className="rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase"
          style={{ backgroundColor: spanBg, color: spanTextColor }}
        >
          {spanLabel}
        </span>
        <button className="p-2 text-xl text-gray-600 transition-colors hover:text-gray-900">
          <Icon className="text-xl" />
        </button>
      </div>
    </div>
  );
}
