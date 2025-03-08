"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center justify-between text-foreground px-6 py-16 w-full gap-10"
    >
      {/* Left Section - Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/3 flex justify-center"
      >
        <Image
          src="/build.gif"
          alt="Let's Connect"
          width={400}
          height={400}
          className="rounded-xl object-cover"
        />
      </motion.div>

      {/* Right Section - Text + Button */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-2/3 text-center md:text-left"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Let's Build Something Amazing!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-4 text-lg md:text-xl text-muted-foreground"
        >
          Have a project in mind or just want to connect? I'm always open to
          discussing new opportunities, collaborations, or just chatting about
          tech!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="mt-6 w-fit"
        >
          <Link href="/contact" className="w-fit">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full bg-accent text-background text-lg font-medium flex items-center"
            >
              Contact Me <ArrowRight className="ml-2" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GetInTouch;
