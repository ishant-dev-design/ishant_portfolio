"use client";

import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";

const NewsletterSignup = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center text-foreground md:px-6 py-16">
      {/* Section Header */}
      <motion.h1 className="text-5xl md:text-7xl font-bold text-center">
        Stay Updated
      </motion.h1>

      <motion.p className="mt-4 text-lg md:text-xl text-foreground mx-auto max-w-3xl text-center">
        Subscribe to our newsletter and never miss out on exclusive travel
        deals, updates, and inspirations.
      </motion.p>

      {/* Input Box */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-lg"
      >
        <div className="relative w-full">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 rounded-full bg-foreground w-fit text-background text-lg font-medium flex items-center"
        >
          Subscribe <Send className="ml-2" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default NewsletterSignup;
