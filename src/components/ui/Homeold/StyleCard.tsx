"use client";
import { motion } from "framer-motion";

const staticImage = "/profilepic.jpg"; // Replace with a relevant image

export default function StyleCard() {
  return (
    <motion.div className="bg-background flex flex-col sm:flex-row items-center justify-center w-full space-y-9 sm:space-y-0">
      {/* Left Image Section (Static Image) */}
      <motion.div className="md:w-1/2 aspect-square relative rounded-3xl overflow-hidden w-full h-full">
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${staticImage})` }}
        />
      </motion.div>

      {/* Right Text Section (Portfolio Intro) */}
      <motion.div className="w-full md:w-1/2 flex flex-col items-start justify-start sm:px-6 h-full">
        <motion.h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-start">
          <motion.div className="text-2xl md:text-4xl text-foreground text-start font-medium">
            <motion.span
              className="inline-flex"
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              transition={{ duration: 0.6, ease: [1, 0.2, 0, 0.8] }}
              viewport={{ once: true }}
            >
              Ishant Kumar
            </motion.span>
          </motion.div>
        </motion.h1>

        <motion.h2 className="text-xl md:text-3xl font-semibold text-foreground mb-2">
          <motion.div className="overflow-hidden text-start text-lg md:text-xl text-foreground font-medium">
            <motion.span
              className="inline-flex"
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [1, 0.2, 0, 0.8] }}
              viewport={{ once: true }}
            >
              Frontend Developer
            </motion.span>
          </motion.div>
        </motion.h2>

        <motion.p className="text-md md:text-lg text-muted-foreground mb-6">
          Passionate about crafting interactive and visually appealing web
          experiences using modern technologies like Next.js, React, and
          TailwindCSS.
        </motion.p>

        <motion.a
          href="/portfolio"
          className="px-6 py-3 text-white bg-primary rounded-lg text-lg font-semibold hover:bg-opacity-80 transition"
        >
          View My Work
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
