"use client";

import { motion } from "framer-motion";
import { LucideDownload } from "lucide-react";
import Image from "next/image";

const ResumeShowcase = () => {
  return (
    <div className="overflow-hidden w-full py-6 max-w-4xl mx-auto">
      <motion.div
        className="relative w-full rounded-lg overflow-hidden"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          width={400}
          height={400}
          src="/resume.png"
          alt="Resume"
          className="object-cover rounded-xl mx-auto mb-12"
        />
      </motion.div>

      {/* Download Resume Button */}
      <motion.div className="flex justify-center pb-8">
        <a
          href="/resume.pdf" // Path to resume file
          download="Ishant_Resume.pdf" // Suggested file name
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-background text-lg font-semibold hover:bg-opacity-80 transition"
        >
          <LucideDownload className="w-5 h-5" />
          Download Resume
        </a>
      </motion.div>
    </div>
  );
};

export default ResumeShowcase;
