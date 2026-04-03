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

export const BANANA_CARDS = [
  {
    imageSrc: "/bananaImages/iceBanana.png",
    title: "Льодяний банан",
    description:
      "Я в шоці такого банана я ще не бачив дякую джемінай що згенерував таку картинку вау вау (типу здивований)",
    spanLabel: "HIGH ENERGY",
    spanBg: "#ffffff",
    spanTextColor: "#059669",
    cardBg: "#f4f8e6",
    Icon: FaRegHeart,
    type: "blue",
    id: 1,
  },
  {
    imageSrc: "/bananaImages/purpleBanan.png",
    title: "Фіолетовий Банан",
    description:
      "Так добре фіолетовий банан це щось нове, я продовжу генерувати інші банани з різними кольорами",
    spanLabel: "CLASSIC PRANK",
    spanBg: "#fce7e7",
    spanTextColor: "#9f1239",
    cardBg: "#eef2dc",
    Icon: FaShareAlt,
    type: "blue",
    id: 2,
  },
  {
    imageSrc: "/bananaImages/blueBanan.png",
    title: "Голубий Банан",
    description:
      "Оооомаааа гаддд голубий банан це тоже непогано голубий банан, давайте це буде зі смаком моризива",
    spanLabel: "COOL VIBES",
    spanBg: "#14f195",
    spanTextColor: "#064e3b",
    cardBg: "#f4f8e6",
    Icon: FaRegSnowflake,
    type: "red",
    id: 3,
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
    id: 4,
  },
  {
    imageSrc: "/bananaImages/redBanan.png",
    title: "Червоний Банан",
    description:
      "Цитат не буде вони занадто здорові для цих типу бананових карточок шкода шкода життя бентежне пишу всяку фігню ",
    spanLabel: "ALTERNATIVE",
    spanBg: "#ffedd5",
    spanTextColor: "#9a3412",
    cardBg: "#f4f8e6",
    Icon: FaBolt,
    type: "red",
    id: 5,
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
    Icon: FaLeaf,
    type: "orange",
    id: 6,
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
