"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";

gsap.registerPlugin(SplitText);

type SplitOptions = {
  wordsClass?: string;
};

interface TextAnimationProps {
  children: React.ReactNode;
  splitType: "chars" | "words" | "lines";
  timeline?: gsap.core.Timeline; // The master timeline from the parent
  position?: string | number; // The sequence position (e.g., "-=0.25")
  splitOptions?: SplitOptions; // For passing wordsClass, etc.
  animOptions?: gsap.TweenVars; // For custom y, stagger, duration, etc.
}

export function TextAnimation({
  children,
  splitType,
  timeline,
  position,
  splitOptions,
  animOptions,
}: TextAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const splitInstance = new SplitText(containerRef.current, {
        type: splitType,
        ...splitOptions,
      });

      // Get the correct array of split elements based on the type
      const target =
        splitType === "chars"
          ? splitInstance.chars
          : splitType === "words"
            ? splitInstance.words
            : splitInstance.lines;

      // 2. Define the base animation parameters
      const animVars: gsap.TweenVars = {
        opacity: 0,
        y: splitType === "chars" ? 50 : 20, // Default fallbacks
        stagger: splitType === "chars" ? 0.05 : 0.1,
        ease: "power1.out",
        duration: 0.5,
        ...animOptions, // Override with any specific props passed in
      };

      if (timeline) {
        timeline.from(target, animVars, position);
      } else {
        gsap.from(target, animVars);
      }

      // Cleanup to prevent memory leaks when components unmount
      return () => {
        splitInstance.revert();
      };
    },
    { dependencies: [timeline, position, splitType] },
  );

  // Wrap children in a div so SplitText has a container to target
  return <div ref={containerRef}>{children}</div>;
}
