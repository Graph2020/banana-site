"use client";

import React from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { Banana3d } from "../components/Banana3d";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import HeroText from "../components/HeroText";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const spanRef = React.useRef<HTMLSpanElement>(
    null,
  ) as React.RefObject<HTMLSpanElement>;
  const bananaRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(spanRef.current, {
      scale: 0,
      duration: 0.5,
      ease: "bounce",
    });
    gsap.from(".btn-hero", {
      stagger: 0.2,
      scale: 0,
      duration: 1,
      ease: "elastic",
      delay: 1,
    });

    gsap.from(bananaRef.current, {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "back",
      delay: 0.5,
      clearProps: "all",
    });
  }, []);

  return (
    <section className="space-sections relative mt-20 flex min-h-screen w-full flex-col items-start gap-4 text-start md:flex-row lg:mt-0">
      <HeroText
        title="Скоштуй це!"
        subtitle="Лютий смаколик який зайде всім людям"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi error nam eum provident, ipsa sed deleniti nobis, blanditiis molestias"
        buttonTextOne="Купити банана"
        buttonTextTwo="Дізнатися більше"
        spanText="freshly picked"
        icon={CiShoppingBasket}
        spanRef={spanRef}
      />

      <div
        ref={bananaRef}
        className="absolute top-100 left-0 z-20 h-96 w-full md:static md:right-32 md:h-full md:w-72"
      >
        <Canvas>
          <directionalLight
            position={[0, 0, 2]}
            color={"white"}
            intensity={3}
          />
          <OrbitControls enableZoom={false} />
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
