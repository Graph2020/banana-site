"use client";
import type { JSX } from "react";
import React from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { Banana3d } from "../components/Banana3d";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
export default function Hero() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <section className="space-sections relative mt-20 flex min-h-screen w-full flex-col items-start gap-4 text-start md:flex-row lg:mt-0">
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-start gap-4">
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
      </div>
      <div className="absolute top-100 z-20 h-96 w-full md:static md:right-32 md:h-full md:w-72">
        <Canvas>
          <directionalLight
            position={[0, 0, 2]}
            color={"white"}
            intensity={3}
          />
          <ambientLight intensity={0.5} />
          <Banana3d
            position={[0, 0, 0]}
            scale={isDesktopOrLaptop ? 1.7 : 1.2}
          />
        </Canvas>
      </div>
    </section>
  );
}
