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
  const words = (children as string).split(" ");

  return (
    <motion.div>
      <h1 className={`flex flex-wrap w-full ${className}`}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            className={`overflow-hidden`}
            transition={{
              duration: 0.8,
              ease: [1, 0.2, 0, 0.8],
            }}
          >
            <motion.span
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
          </motion.span>
        ))}
      </h1>
    </motion.div>
  );
}
