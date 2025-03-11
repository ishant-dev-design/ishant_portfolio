"use client";

import { motion } from "framer-motion";
import { Code, Rocket, Users, Brain, Target } from "lucide-react";
import { useTheme } from "next-themes";

const motivations = [
  {
    title: "Building & Creating",
    description:
      "I love transforming ideas into reality, whether it's coding a new app or designing an intuitive UI.",
    icon: Code,
  },
  {
    title: "Continuous Learning",
    description:
      "Technology evolves fast—I stay ahead by exploring new frameworks, AI advancements, and best practices.",
    icon: Brain,
  },
  {
    title: "Challenges & Problem-Solving",
    description:
      "Complex problems excite me. Breaking them down and crafting efficient solutions is what I do best.",
    icon: Rocket,
  },
  {
    title: "Collaboration & Teamwork",
    description:
      "Great products are built together. I enjoy working with teams, exchanging ideas, and learning from others.",
    icon: Users,
  },
  {
    title: "Making an Impact",
    description:
      "I aim to build things that matter—applications that improve lives, enhance efficiency, or spark creativity.",
    icon: Target,
  },
];

const WhatDrivesMe = () => {
  const { theme } = useTheme();

  return (
    <motion.div className="flex flex-col items-center justify-center text-foreground md:px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center"
      >
        <motion.h1 className="text-5xl md:text-7xl font-bold">
          What Drives Me?
        </motion.h1>
        <motion.p className="mt-4 text-lg md:text-xl text-foreground mx-auto max-w-4xl">
          Passion for technology, problem-solving, and creating meaningful
          experiences.
        </motion.p>
      </motion.div>

      {/* Motivation Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1 },
          },
          hidden: { opacity: 0, y: 50 },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl"
      >
        {motivations.map((motivation, index) => {
          const Icon = motivation.icon;
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`p-6 border backdrop-blur-sm rounded-3xl
                ${
                  theme === "light"
                    ? "bg-[#ffffff66] border-gray-300"
                    : "bg-[#00000066] border-white/20"
                }`}
            >
              <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <motion.h3 className="text-xl font-semibold text-primary">
                {motivation.title}
              </motion.h3>
              <motion.p className="text-md text-foreground mt-2">
                {motivation.description}
              </motion.p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default WhatDrivesMe;
