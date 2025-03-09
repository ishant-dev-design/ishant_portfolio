"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const aboutMeDetails = [
  {
    image: "/pixel_perfect.gif",
    heading: "Pixel-Perfect Designs",
    content: "I craft visually stunning UI/UX with a user-first approach.",
  },
  {
    image: "/performance.gif",
    heading: "Performance & Optimization",
    content: "My expertise ensures blazing-fast, smooth applications.",
  },
  {
    image: "/scalable.gif",
    heading: "Scalable Applications",
    content:
      "I ensure scalable, efficient, and robust solutions that grow with your business needs.",
  },
  {
    image: "/team.gif",
    heading: "Collaborative & Agile",
    content:
      "I work seamlessly with teams, following Agile methodologies and using Git for version control.",
  },
];

const Workwithme = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full h-auto gap-6 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.1 },
        },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {/* Section Header */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "circInOut" }}
        className="text-4xl md:text-7xl font-bold text-center my-2"
      >
        Why Work With Me?
      </motion.h1>

      {/* Grid Layout */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {aboutMeDetails.map((detail, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center w-full rounded-3xl"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={detail.image}
              alt={detail.heading}
              className="w-full !h-48 rounded-3xl object-cover"
              loading="lazy"
              layout="responsive"
              width={100}
              height={100}
            />
            <motion.h2 className="text-2xl font-semibold mt-4 text-center text-primary group-hover:text-accent transition-all duration-300">
              {detail.heading}
            </motion.h2>
            <p className="text-lg text-foreground text-center mt-2">
              {detail.content}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      <Link href="/portfolio" data-cursor="pointer">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="px-6 py-3 rounded-full bg-accent text-background text-lg font-medium flex items-center hover:bg-opacity-80 transition-all"
        >
          View My Work <ArrowUpRight className="ml-2" />
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Workwithme;
