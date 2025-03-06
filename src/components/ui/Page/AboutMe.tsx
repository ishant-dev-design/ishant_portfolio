"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const aboutMeDetails = [
  {
    image: "/pixel_perfect.gif",
    heading: "Pixel-Perfect Designs",
    content:
      "I focus on crafting visually stunning and highly interactive UI/UX experiences.",
  },
  {
    image: "/performance.gif",
    heading: "Performance & Optimization",
    content:
      "By leveraging Next.js and Lighthouse audits, I ensure fast and smooth web applications.",
  },
  {
    image: "/scalable.gif",
    heading: "Scalable Applications",
    content:
      "I build modular, maintainable, and scalable applications using React, Node.js, AWS, and Docker.",
  },
  {
    image: "/team.gif",
    heading: "Collaborative & Agile",
    content:
      "I work seamlessly with teams, following Agile methodologies and using Git for version control.",
  },
];

const AboutMe = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center w-full h-auto gap-6 py-12">
      <h1 className="text-4xl md:text-7xl font-bold text-center my-2">
        Why Work With Me?
      </h1>
      {/* Image Row */}
      <div className="flex flex-col md:flex-row gap-6">
        {aboutMeDetails.map((detail, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            <Image
              src={detail.image}
              alt={detail.heading}
              className="w-full !h-48 rounded-3xl object-cover"
              loading="lazy"
              layout="responsive"
              width={100}
              height={100}
            />
            <h2 className="text-2xl font-semibold mt-4 text-center">
              {detail.heading}
            </h2>
            <p className="text-lg text-foreground text-center mt-2">
              {detail.content}
            </p>
          </div>
        ))}
      </div>
      {/* Button */}
      <Link href="/portfolio">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 rounded-full bg-foreground text-background text-lg font-medium flex items-center"
        >
          View My Work <ArrowUpRight className="ml-2" />
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default AboutMe;
