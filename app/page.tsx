import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";

export default function Home() {
  return (
    <main className="bg-background-body flex min-h-screen w-full flex-col overflow-x-hidden">
      <Hero />
      <About />
    </main>
  );
}
