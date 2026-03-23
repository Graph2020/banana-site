import React, { useState } from "react";

export default function useToggle(): [boolean, () => void] {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const toggle = () => setIsToggled((prev) => !prev);

  return [isToggled, toggle];
}
