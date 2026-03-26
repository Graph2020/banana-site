import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import QualityBanana from "./sections/QualityBanana";

export default function Home() {
  return (
    <main className="bg-background-body flex min-h-screen w-full flex-col overflow-x-hidden selection:bg-emerald-400">
      <Hero />
      <About />
      <QualityBanana />
    </main>
  );
}
