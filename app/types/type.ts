export type BananaLinks = {
  name: string;
  href: string;
  id: string | number;
};

export interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  price: number;
  spanLabel: string;
  spanBg: string;
  spanTextColor: string;
}

export type BananaFilterProps = Omit<CardProps, "price"> & {
  Icon: React.ComponentType<{ className?: string }>;
  cardBg: string;
  type: string;
};

export type HeroTextProps = {
  title: string;
  subtitle: string;
  description: string;
  buttonTextOne: string;
  buttonTextTwo: string;
  spanText: string;
  icon: React.ComponentType<{ className?: string }>;
  spanRef?: React.RefObject<HTMLSpanElement> | null;
};
