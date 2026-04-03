"use client";
import React, { JSX, useRef } from "react";
import { SiGamebanana } from "react-icons/si";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger);

export default function History(): JSX.Element {
  const bananaRef = useRef(null);
  const containerRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });

  useGSAP(() => {
    gsap.from(bananaRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
    });
    gsap.to(bananaRef.current, {
      rotation: 360,
      ease: "none",
      y: 100,
      keyframes: {
        "33%": { color: "yellow" },
        "66%": { color: "orange" },
        "100%": { color: "blue" },
      },
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1,
        pin: true,
        start: "center center",
        end: isMobile ? "+=700" : "+=1000",
        onLeave: () => {
          gsap.to(bananaRef.current, {
            scale: 0,
            opacity: 0,
            ease: "power2.inOut",
            duration: 0.5,
            overwrite: "auto",
          });
        },
        onEnterBack: () => {
          gsap.to(bananaRef.current, {
            scale: 1,
            opacity: 1,
            ease: "power2.inOut",
            duration: 0.5,
            overwrite: "auto",
          });
        },
      },
    });
  }, []);
  return (
    <main className="gap-elements lg:center-elements space-sections font-body bg-background-body flex min-h-screen w-full overflow-x-hidden">
      <div className="gap-elements mt-20 flex w-1/2 flex-col md:w-64 md:text-lg">
        <p>
          Банан має стародавнє походження в Південно-Східній Азії та Малайському
          архіпелазі, де його почали одомашнювати ще в VIII–V тисячоліттях до
          нашої ери (за археологічними даними в долині Кук, Папуа-Нова Гвінея,
          близько 8000 р. до н. е.). Цей плід вважається однією з найдавніших
          культурних рослин, про яку перші письмові згадки з'явилися в
          буддистських текстах (VI–V ст. до н. е.) та індійських епосах.
        </p>
        <p>
          Поширення відбувалося хвилями: спочатку банан дістався Індії та Китаю,
          а згодом арабські торговці перенесли його до Африки та Північної
          Африки після 650 року н. е.; європейці дізналися про фрукт завдяки
          Олександру Македонському (який спробував його в Індії у 327 р. до н.
          е.), але масове вирощування в Європі розпочалося лише в XV–XVI
          століттях завдяки португальцям, які завезли банани з Гвінеї на Канари,
          а згодом іспанці — на Гаїті.{" "}
        </p>
        <p className="hidden md:block">
          Однак у XIX столітті завдяки винаходу холодильних установок
          (наприклад, Лоренцо Бейкером та Майнором Кейтом) розпочався справжній
          бум експорту бананів у Європу та США, що перетворило цей фрукт на один
          із найпоширеніших у світі. Сучасні сорти, такі як популярний
          «Кавендіш», походять від диких видів Musa acuminata та Musa
          balbisiana, хоча вони вразливі до грибкових захворювань через
          відсутність генетичного різноманіття.
        </p>
      </div>

      <div
        className="center-elements order-1 mt-60 h-48 lg:mt-50 lg:self-start"
        ref={containerRef}
      >
        <div ref={bananaRef}>
          <SiGamebanana size={128} />
        </div>
      </div>
    </main>
  );
}
