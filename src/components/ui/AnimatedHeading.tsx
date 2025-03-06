"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  // Split text into words while preserving spaces
  const words = (children as string)
    .split(" ")
    .map((word: string, i: number) => (
      <motion.span
        key={i}
        className="inline-block"
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        exit={{ y: "-100%" }}
        transition={{
          duration: 0.6,
          ease: [1, 0.2, 0, 0.8],
          delay: i * 0.1,
        }}
        viewport={{ once: true }}
      >
        {word}&nbsp;
      </motion.span>
    ));

  return (
    <motion.div className={`overflow-hidden ${className}`}>
      <h1 className="flex flex-wrap">{words}</h1>
    </motion.div>
  );
}
