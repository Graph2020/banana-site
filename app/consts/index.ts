import type { BananaLinks } from "../types/type";
import { nanoid } from "nanoid";
// Navbar links
export const bananaLinks: BananaLinks[] = [
  {
    name: "Home",
    href: "/",
    id: nanoid(),
  },
  {
    name: "Banana Scroll",
    href: "/scroll",
    id: nanoid(),
  },
  {
    name: "Типи Банана",
    href: "/typeBanana",
    id: nanoid(),
  },
  {
    name: "Банана історія",
    href: "/history",
    id: nanoid(),
  },
];
