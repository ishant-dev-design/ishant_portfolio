"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const hobbies = [
  {
    title: "Gaming & Esports",
    image: "/images/gaming.gif",
    multiplier: -1,
  },
  {
    title: "Tech Exploration",
    image: "/images/tech.gif",
    multiplier: -0.7,
  },
  {
    title: "Movies & Sci-Fi",
    image: "/images/movies.gif",
    multiplier: -1.6,
  },
  {
    title: "Reading & Learning",
    image: "/images/reading.gif",
    multiplier: -1.3,
  },
  {
    title: "Music",
    image: "/images/music.gif",
    multiplier: -0.9,
  },
];

const ParallaxHobbies = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={scrollRef} className="relative w-full overflow-visible py-12">
      <h1 className="text-4xl md:text-7xl font-bold text-center my-4">
        My Hobbies
      </h1>
      {hobbies.map((hobby, index) => {
        const x = useTransform(
          scrollYProgress,
          [0, 1],
          [0, hobby.multiplier * 1000]
        );
        return (
          <motion.div
            key={index}
            style={{ x }}
            className="flex items-center whitespace-nowrap py-3"
          >
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-4 gap-4"
              >
                <Image
                  src={hobby.image}
                  alt={hobby.title}
                  width={100}
                  height={50}
                  className="h-16 rounded-full"
                />
                <h2 className="text-4xl font-bold text-black">{hobby.title}</h2>
              </div>
            ))}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ParallaxHobbies;
