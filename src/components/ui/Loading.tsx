"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedHeading from "./AnimatedHeading";

const designFacts = [
  "Good design is invisible—bad design is everywhere.",
  "Minimalism isn't about removing elements, it's about keeping the right ones.",
  "Microinteractions can elevate user experience significantly.",
  "Dark mode isn't a trend, it's a necessity for eye comfort.",
  "Typography is 95% of web design.",
  "Performance is part of the user experience.",
  "Good UX is like a joke—if you have to explain it, it's not good.",
  "Animations should feel natural, not forced.",
  "Whitespace is just as important as content.",
  "A well-structured layout guides the user effortlessly.",
  "Colors affect emotions—choose wisely.",
  "Good UI makes a website pretty, but good UX makes it usable.",
  "Loading states should be engaging, not frustrating.",
  "A great portfolio isn't about complexity—it's about clarity.",
  "Every pixel should have a purpose.",
  "Interactivity should feel fluid, not robotic.",
  "Mobile-first design isn't an option, it's a necessity.",
  "Accessibility is not a feature, it's a requirement.",
  "Great design is solving problems, not just making things look nice.",
];

interface LoadingProps {
  onLoaded: () => void;
}

export default function Loading({ onLoaded }: LoadingProps) {
  const [factIndex, setFactIndex] = useState<number | null>(null);

  useEffect(() => {
    setFactIndex(Math.floor(Math.random() * designFacts.length));

    const handleLoad = () => {
      setTimeout(() => onLoaded(), 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, [onLoaded]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-background overflow-hidden z-[9999]"
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <AnimatedHeading className="text-4xl md:text-6xl text-accent font-bold mb-6 justify-center items-center">
        Loading your experience...
      </AnimatedHeading>
      <div className="relative w-full h-fit flex items-center justify-center overflow-hidden px-6">
        <motion.div className="overflow-hidden text-center text-2xl md:text-4xl text-foreground font-medium max-w-4xl">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.6,
              ease: [1, 0.2, 0, 0.8],
            }}
            viewport={{ once: true }}
          >
            {factIndex !== null ? designFacts[factIndex] : "Loading..."}
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
