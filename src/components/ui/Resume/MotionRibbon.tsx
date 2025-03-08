"use client";

import { motion } from "framer-motion";

const MotionRibbon = ({ text }: { text: string }) => {
  return (
    <div className="overflow-hidden w-full py-6 bg-accent">
      <motion.div
        className="whitespace-nowrap text-2xl md:text-4xl font-bold text-background"
        animate={{
          x: ["-100%", "100%"], // Moves horizontally
          y: [0, -15, 15, -15, 0], // Creates a sinusoidal wave motion
        }}
        transition={{
          repeat: Infinity,
          duration: 10, // Adjust this for speed
          ease: "linear",
        }}
      >
        {text.repeat(10)} {/* Ensures seamless looping */}
      </motion.div>
    </div>
  );
};

export default MotionRibbon;
