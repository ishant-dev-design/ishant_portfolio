"use client";

import { motion } from "framer-motion";
import { ArrowLeftCircle, Code, Sparkles } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-foreground px-6 py-16 text-center max-w-7xl mx-auto min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* ✨ Themed Icon & Message */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-foreground"
      >
        <Sparkles className="text-primary w-16 h-16 mb-4" />
        <h1 className="text-5xl md:text-7xl font-bold">
          Oops! Page Not Found.
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl">
          Looks like you've ventured into uncharted territory! But don't worry,
          let's get you back to where the magic happens.
        </p>
      </motion.div>

      {/* 🚀 CTA Button - Return Home */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="mt-10"
      >
        <Link href="/">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center px-6 py-3 rounded-full bg-primary text-background text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-primary/50"
          >
            <ArrowLeftCircle className="mr-2" /> Take Me Home
          </motion.button>
        </Link>
      </motion.div>

      {/* 🖥️ Additional Fun Elements */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="mt-8 flex items-center gap-4 text-sm md:text-base text-muted-foreground"
      >
        <Code className="w-5 h-5 text-primary" />
        <span>Maybe try debugging your URL? 🧐</span>
      </motion.div>
    </motion.div>
  );
}
