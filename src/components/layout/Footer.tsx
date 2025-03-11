// src/components/layout/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { memo } from "react";

const Footer = memo(() => {
  return (
    <motion.footer className="relative text-center w-full flex justify-center z-[60] max-w-7xl mx-auto">
      <motion.div className="flex flex-col w-full text-foreground rounded-3xl p-3 z-10">
        <motion.div className="flex h-full overflow-hidden w-full">
          <motion.div
            className="text-[clamp(1rem,14vw,12rem)] text-center w-full flex text-accent"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ amount: 1 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {["ishant", "kumar"].map((part, i) => (
              <motion.span
                key={i}
                className="inline-block leading-none"
                style={{
                  flex: 1,
                  textAlign: "center",
                }}
                variants={{
                  hidden: { y: "100%" },
                  visible: {
                    y: "0%",
                    transition: { duration: 0.6, ease: [1, 0.2, 0, 0.8] },
                  },
                  exit: { y: "-100%" },
                }}
              >
                {part}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="flex justify-center md:justify-between text-nowrap flex-col md:flex-row"></motion.div>

        {/* Copyright */}
        <motion.p className="mt-3">
          &copy; 2025 <b>ishant kumar</b>. All rights reserved.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
});

Footer.displayName = "Footer";
export default Footer;
