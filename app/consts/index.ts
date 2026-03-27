import type { BananaLinks } from "../types/type";
import { nanoid } from "nanoid";
import {
  FaRegHeart,
  FaShareAlt,
  FaRegSnowflake,
  FaStar,
  FaBolt,
  FaLeaf,
} from "react-icons/fa";
// Filtered banana cards data
export const BANANA_CARDS = [
  {
    imageSrc: "/bananaImages/iceBanana.png",
    title: "Льодяний банан",
    description:
      "Я в шоці такого банана я ще не бачив дякую джемінай що згенерував таку картинку вау вау (типу жоско здивований)",
    spanLabel: "HIGH ENERGY",
    spanBg: "#ffffff",
    spanTextColor: "#059669", // Emerald green
    cardBg: "#f4f8e6",
    Icon: FaRegHeart,
    type: "blue",
  },
  {
    imageSrc: "/bananaImages/purpleBanan.png",
    title: "Фіолетовий Банан",
    description:
      "Якщо чесно я так задовбався це все друкувати навіть якщо я швидко друкую це задовбує що триндець я не виживу в офісах напевно",
    spanLabel: "CLASSIC PRANK",
    spanBg: "#fce7e7", // Light pink/red
    spanTextColor: "#9f1239", // Dark red
    cardBg: "#eef2dc",
    Icon: FaShareAlt,
    type: "blue",
  },
  {
    imageSrc: "/bananaImages/blueBanan.png",
    title: "Голубий Банан",
    description:
      "Оооомаааа гаддд голубий банан напевно робить людей голубими а ой неважливо я вже уно кукухой їду як видно",
    spanLabel: "COOL VIBES",
    spanBg: "#14f195", // Bright cyan/mint
    spanTextColor: "#064e3b", // Dark green
    cardBg: "#f4f8e6",
    Icon: FaRegSnowflake, // Assumed icon since it was covered by the alert
    type: "red",
  },
  {
    imageSrc: "/bananaImages/fireBanana.png",
    title: "Вогняний банан",
    description:
      "Можливо я понаставляю цитат зараз сюда своїх улюблених? Залишилося ще два банана відредагувати, я все одно не уявляю щоб хтось це читав ",
    spanLabel: "STURDY KING",
    spanBg: "#fce7e7",
    spanTextColor: "#9f1239",
    cardBg: "#eef2dc",
    Icon: FaStar,
    type: "red",
  },
  {
    imageSrc: "/bananaImages/redBanan.png",
    title: "Червоний Банан",
    description:
      "Цитат не буде вони занадто здорові для цих типу бананових карточок шкода шкода життя бентежне пишу всяку фігню ",
    spanLabel: "ALTERNATIVE",
    spanBg: "#ffedd5", // Light orange
    spanTextColor: "#9a3412", // Dark orange
    cardBg: "#f4f8e6",
    Icon: FaBolt,
    type: "red",
  },
  {
    imageSrc: "/bananaImages/orangeBanan.png",
    title: "Оранжевий Банан",
    description:
      "I'm much worse than these great venerables, does that mean I should give up? never, even if I die walking on my path I will never stop",
    spanLabel: "SNACK KING",
    spanBg: "#14f195",
    spanTextColor: "#064e3b",
    cardBg: "#eef2dc",
    Icon: FaLeaf, // Assumed icon since it was covered by the alert
    type: "orange",
  },
];
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
