"use client";
import type { JSX } from "react";
import { useRouter } from "next/navigation";

export default function NotFound(): JSX.Element {
  const router = useRouter();
  return (
    <main className="center-elements bg-background-body flex min-h-screen flex-col gap-4 px-6 text-center">
      <p className="text-secondary/60 text-sm uppercase">404</p>
      <h1 className="text-secondary font-headline text-4xl font-black">
        Сторінку не знайдено
      </h1>
      <p className="text-secondary/70 max-w-xl">
        Щось не ну туди натиснули чи це я не доробив ідк
      </p>
      <button
        onClick={() => router.back()}
        className="bg-primary text-secondary rounded-2xl px-5 py-2 font-semibold transition-transform duration-200 hover:scale-105"
      >
        Повернутися до бананів
      </button>
    </main>
  );
}
