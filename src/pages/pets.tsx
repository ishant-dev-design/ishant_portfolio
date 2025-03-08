"use client";

import { motion } from "framer-motion";
import { PawPrint, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { petdata } from "@/data/petdata";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

const pets = () => {
  return (
    <motion.div
      className="relative w-full flex flex-col items-center justify-center gap-6 py-12 px-6 min-h-screen text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div className="flex pt-16 md:pt-24 pb-12 justify-center items-center w-full">
        <AnimatedHeading className="text-3xl md:text-5xl lg:text-8xl text-foreground text-center">
          Meet My Adorable Companions.
        </AnimatedHeading>
        <PawPrint className="text-primary h-16 w-16" />
      </motion.div>
      <p className="mt-4 text-lg md:text-xl max-w-3xl text-center text-brown-700">
        Here are my furry, feathery, and scaly friends who fill my life with joy
        and fun!
      </p>
      {/* Animated Paw Prints */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary opacity-60 w-full h-full"
            initial={{ y: -50, x: Math.random() * 100 + "%", opacity: 1 }}
            animate={{ y: "100%", x: Math.random() * 100 + "%", opacity: 0 }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity }}
          >
            <PawPrint className="w-8 h-8" />
          </motion.div>
        ))}
      </div>
      {/* Pets Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mt-8"
      >
        {petdata.map((pet, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="bg-background rounded-3xl shadow-lg p-6 flex flex-col justify-between items-center text-center border border-gray-200 relative"
          >
            <Image
              src={pet.image}
              alt={pet.name}
              width={200}
              height={200}
              className="w-48 h-48 object-cover rounded-full border-4 border-primary"
            />
            <h3 className="text-2xl font-semibold text-brown-900 mt-4">
              {pet.name}
            </h3>
            <p className="text-gray-700 text-sm mt-2">{pet.species}</p>
            <p className="text-gray-500 text-sm mt-2">{pet.description}</p>

            {/* Fun Fact Bubble */}
            {pet.funFact && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-accent text-background text-xs font-semibold px-3 py-1 rounded-full mt-4"
              >
                Fun Fact: {pet.funFact}
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default pets;
