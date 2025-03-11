"use client";

import { useState, useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useTheme } from "next-themes";

const data = [
  {
    title: "Gaming",
    description:
      "Mastering high-stakes esports and diving into immersive single-player experiences—gaming is both a challenge and an escape.",
    speed: 0.5,
  },
  {
    title: "Tech Innovations",
    description:
      "Exploring AI, futuristic gadgets, and groundbreaking technology—because the future isn't coming, it's already here.",
    speed: 0.6,
  },
  {
    title: "Movies & Sci-Fi",
    description:
      "A deep love for cinema, especially sci-fi, where imagination meets reality, shaping bold visions of the future.",
    speed: 0.55,
  },
  {
    title: "Reading & Growth",
    description:
      "Lifelong learning through books, articles, and experiences—because every new idea is a level-up.",
    speed: 0.67,
  },
  {
    title: "Music Journeys",
    description:
      "Diving into diverse genres, from timeless classics to modern hits—because music is the soundtrack to life.",
    speed: 0.8,
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { theme } = useTheme();

  return (
    <div className="relative w-full pt-32">
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        My Hobbies
      </motion.h1>
      <div
        className="h-fit"
        style={{
          width: "-webkit-fill-available",
        }}
      >
        {data.map((project, i) => {
          const { title, description, speed } = project;
          const container = useRef(null);
          containerRefs.current[i] = container.current;

          const { scrollYProgress } = useScroll({
            target: container,
            offset: ["start end", `${25 / speed}vw end`],
          });

          const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
          const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

          return (
            <div
              ref={container}
              key={i}
              className="w-full md:border-t border-accent relative -mx-6 md:mx-0"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() => setHoveredIndex(i)} // Mobile touch support
              onTouchEnd={() => setHoveredIndex(null)}
            >
              {/* Title */}
              <div className="md:border-b border-accent cursor-default relative z-10 mt-6 md:mt-0">
                <div className="inline-block">
                  <motion.p
                    className="inline-block px-6 text-4xl md:text-7xl lg:text-8xl leading-tight md:leading-[7.5vw] font-bold uppercase text-foreground relative z-10"
                    style={{ clipPath: clip }}
                  >
                    {title}
                  </motion.p>
                  <p
                    className={`block absolute px-6 top-0 text-4xl md:text-7xl lg:text-8xl leading-tight md:leading-[7.5vw] font-bold uppercase z-0 ${
                      theme === "light" ? " text-black/20" : "text-white/20"
                    }`}
                  >
                    {title}
                  </p>
                </div>
              </div>

              {/* Description (Controlled with Framer Motion) */}
              <motion.div
                initial={{ clipPath: "inset(50% 0 50%)" }}
                animate={
                  hoveredIndex === i || window.innerWidth < 764
                    ? { clipPath: "inset(0% 0% 0%)" }
                    : { clipPath: "inset(50% 0 50%)" }
                }
                transition={{ duration: 0.2, ease: [1, 0, 0, 1] }}
                className="md:absolute z-10 top-0 left-0 w-full md:bg-accent flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-6 md:py-0"
              >
                <p className="hidden md:flex text-[#101010] uppercase font-bold text-3xl md:text-6xl lg:text-8xl leading-tight md:leading-[7.5vw] relative z-10 w-full text-center md:text-left">
                  {title}
                </p>
                <p className="md:absolute right-0 h-full max-w-full md:max-w-[768px] flex items-center z-10 text-accent md:text-[#101010] w-full text-left px-2 md:px-6 text-lg md:text-lg lg:text-[1vw] font-bold bg-transparent md:bg-accent">
                  {description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
