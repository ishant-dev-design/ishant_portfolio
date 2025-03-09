"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Gamepad2, Cpu, Film, BookOpen, Music } from "lucide-react";

const hobbies = [
  {
    title: "Gaming & Esports",
    description:
      "Exploring the world of gaming, from competitive esports to immersive single-player experiences.",
    icon: Gamepad2,
    image: "/images/gaming.gif",
  },
  {
    title: "Tech Exploration",
    description:
      "Diving into the latest tech innovations, from AI advancements to futuristic gadgets.",
    icon: Cpu,
    image: "/images/tech.gif",
  },
  {
    title: "Movies & Sci-Fi",
    description:
      "A passion for cinema, especially sci-fi films that expand the imagination.",
    icon: Film,
    image: "/images/movies.gif",
  },
  {
    title: "Reading & Learning",
    description:
      "Lifelong learning through books, articles, and new experiences.",
    icon: BookOpen,
    image: "/images/reading.gif",
  },
  {
    title: "Music",
    description:
      "Appreciating various genres of music, from classical compositions to modern hits.",
    icon: Music,
    image: "/images/music.gif",
  },
];

const ParallaxHobbies = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  return (
    <motion.div className="flex flex-col items-center justify-center text-foreground md:px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center"
      >
        <motion.h1 className="text-5xl md:text-7xl font-bold">
          My Hobbies
        </motion.h1>
        <motion.p className="mt-4 text-lg md:text-xl text-foreground mx-auto max-w-4xl">
          Exploring interests that inspire creativity, learning, and fun.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: window.innerWidth < 768 ? 0 : 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1 },
          },
          hidden: { opacity: 0, y: 50 },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full"
      >
        {hobbies.map((hobby, index) => {
          const Icon = hobby.icon;
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{
                opacity: { duration: 0.8, ease: "easeInOut" },
                scale: { duration: 0.3, ease: "easeInOut" },
              }}
              className="p-6 border border-gray-300 rounded-xl flex items-center space-x-4 hover:shadow-md transition-all duration-300"
            >
              <Image
                src={hobby.image}
                alt={hobby.title}
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div className="text-left">
                <Icon className="h-8 w-8 text-primary mb-2" />
                <motion.h3 className="text-xl font-semibold text-primary">
                  {hobby.title}
                </motion.h3>
                <motion.p className="text-md text-foreground mt-1">
                  {hobby.description}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ParallaxHobbies;
