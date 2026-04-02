import { useState } from "react";

export default function useToggle(): {
  isToggled: boolean;
  toggle: () => void;
} {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const toggle = () => setIsToggled((prev) => !prev);

  return { isToggled, toggle };
}
