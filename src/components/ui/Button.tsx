"use client";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import { useState } from "react";

export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="px-6 py-3 rounded-full bg-accent text-background text-lg font-medium relative overflow-hidden flex flex-row items-center"
      data-cursor="pointer"
    >
      <span className="relative z-10">{children}</span>

      {/* Animated Arrow */}
      <motion.span
        className="overflow-clip max-w-fit"
        animate={{
          width: hovered ? "auto" : 0,
          marginLeft: hovered ? "8px" : "0px",
        }}
        transition={{ duration: 0.3, ease: [1, 0.2, 0, 0.8] }}
      >
        <ArrowRightCircle />
      </motion.span>
    </motion.button>
  );
}
