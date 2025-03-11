import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const hobbies = [
  {
    title1: "Gaming",
    title2: "Mastery",
    description:
      "From high-stakes esports battles to deep, story-driven single-player campaigns—gaming is both a challenge and an escape.",
    image: "/images/gaming.gif",
  },
  {
    title1: "Tech",
    title2: "Innovations",
    description:
      "Exploring the latest in AI, futuristic gadgets, and groundbreaking technology—because the future is now.",
    image: "/images/tech.gif",
  },
  {
    title1: "Movies And",
    title2: "Sci-Fi Epics",
    description:
      "A love for cinema, especially sci-fi, where imagination meets reality, shaping visions of the future.",
    image: "/images/movies.gif",
  },
  {
    title1: "Reading",
    title2: "And Growth",
    description:
      "Lifelong learning through books, articles, and experiences—because knowledge is the ultimate power-up.",
    image: "/images/reading.gif",
  },
  {
    title1: "Music",
    title2: "Journeys",
    description:
      "Diving into the rhythm of different genres, from timeless classics to modern beats that set the mood.",
    image: "/images/music.gif",
  },
];

const Hobbies = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full">
        <p className="text-lg font-bold mb-4">Featured Work</p>

        {hobbies.map((hobby, index) => (
          <div className="border-y py-6 flex group lg:flex-row flex-col justify-between">
            <div key={index} className="flex items-center text-center lg:w-2/3">
              <p className="text-4xl lg:text-6xl text-foreground mr-2">
                {hobby.title1}
              </p>
              <div className="">
                <img
                  src={hobby.image}
                  alt={`${hobby.title1} ${hobby.title2}`}
                  className="object-cover max-w-24 h-16 w-0 group-hover:w-24 transition-all"
                />
              </div>
              <p className="text-4xl lg:text-6xl  text-foreground ml-2">
                {hobby.title2}
              </p>
            </div>
            <div className="max-h-fit group-hover:h-24 h-0 overflow-hidden transition-all lg:w-1/3">
              <p className="text-sm text-foreground ml-2 ">
                {hobby.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Hobbies;
