"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LucideMapPinX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-foreground text-center -mt-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-4"
      >
        <LucideMapPinX className="text-accent text-7xl animate-pulse" />
        <h1 className="text-6xl font-bold">Arrr! Ye be lost, matey!</h1>
        <p className="text-lg max-w-lg">
          The treasure ye seek ain’t here. Mayhaps try another map?
        </p>
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-accent text-foreground px-6 py-3 font-bold rounded-xl shadow-lg transition"
          >
            Back to Safe Waters
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
