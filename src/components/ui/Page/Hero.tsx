"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "../Button";

const Hero = () => {
  const { theme } = useTheme();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const staticImage = "/profilepic.jpg";
  const phrases = ["FrontEnd Developer", "UX/UI Designer", "Data Analyst"];

  return (
    <motion.div className="h-fit flex justify-center items-center">
      <motion.div
        className="relative w-full h-fit grid grid-cols-1 md:grid-cols-3 pt-3 mb-12 rounded-3xl overflow-visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div className="flex flex-col justify-end z-10 mt-3 md:-mr-12 col-span-2 order-3 md:order-2">
          <motion.div
            className={`flex flex-col justify-end text-start space-y-6 max-h-fit p-6 border backdrop-blur-md rounded-3xl 
    ${
      theme === "light"
        ? "bg-[#ffffff66] border-gray-300"
        : "bg-[#0f172a66] border-white/20"
    }`}
            transition={{
              staggerChildren: 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <motion.h1 className="text-4xl md:text-7xl font-bold text-foreground text-start">
              Ishant Kumar
            </motion.h1>

            <motion.h2 className="text-xl md:text-3xl font-semibold text-foreground overflow-hidden">
              <motion.div className="inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phrases[index]}
                    className="inline-flex"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.3, ease: [1, 0.2, 0, 0.8] }}
                  >
                    {phrases[index]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
            </motion.h2>

            <motion.p className="text-md md:text-lg text-muted-foreground">
              Hiya ! <br /> My name is Ishant Kumar and I am a skilled Frontend
              Developer with a passion for building high-performance web
              applications. My expertise lies in ReactJS, NextJS, JavaScript,
              and UI/UX development, ensuring seamless and visually appealing
              user experiences. Currently, I work at ADS247365 India Private
              Limited, optimizing web performance and delivering scalable
              solutions.
            </motion.p>
            <Link href="/projects">
              <Button>View My Work</Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-2 md:order-3 w-full h-full flex col-span-1 justify-center items-center overflow-visible rounded-3xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.img
            src="/profilepic.jpg"
            className="w-full pointer-events-none md:mt-24 h-full object-cover rounded-3xl transition-opacity duration-700 opacity-100 aspect-square"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
