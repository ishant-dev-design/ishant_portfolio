"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const quotes = [
  {
    author: "Albert Einstein",
    text: "Creativity is intelligence having fun.",
  },
  {
    author: "Steve Jobs",
    text: "Innovation distinguishes between a leader and a follower.",
  },
  {
    author: "Grace Hopper",
    text: "The most dangerous phrase in the language is, ‘We’ve always done it this way.’",
  },
  {
    author: "Alan Turing",
    text: "Sometimes it is the people no one imagines anything of who do the things that no one can imagine.",
  },
  {
    author: "Elon Musk",
    text: "When something is important enough, you do it even if the odds are not in your favor.",
  },
];

const QuotesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const interval = 50;
    let elapsed = 0;
    const totalDuration = 5000;

    const startTimer = () => {
      setProgress(0);
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        elapsed += interval;
        setProgress((elapsed / totalDuration) * 100);
        if (elapsed >= totalDuration) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % quotes.length);
          elapsed = 0;
        }
      }, interval);
    };

    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex]);

  const handleClick = (direction: "prev" | "next") => {
    setProgress(0);
    setActiveIndex((prev) =>
      direction === "prev"
        ? (prev - 1 + quotes.length) % quotes.length
        : (prev + 1) % quotes.length
    );
  };

  return (
    <motion.div
      className="relative w-full flex flex-col justify-center items-center overflow-hidden my-64"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.1 },
        },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Quotes & Inspirations
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-full h-full flex flex-col p-6 bg-transparent rounded-3xl z-10 mt-10 text-foreground"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={quotes[activeIndex].author}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col gap-4 items-center justify-center text-center h-64"
          >
            <motion.p className="text-xl md:text-5xl w-full">
              “{quotes[activeIndex].text}”
            </motion.p>
            <motion.p className="text-2xl md:text-4xl font-semibold text-accent">
              - {quotes[activeIndex].author}
            </motion.p>
          </motion.div>
        </AnimatePresence>
        <div className="flex bottom-6 right-6 gap-2 p-3 justify-center">
          <button
            onClick={() => handleClick("prev")}
            className="p-6 rounded-full bg-transparent w-fit flex justify-center border border-accent text-accent"
            title="Previous Quote"
            aria-label="Previous Quote"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={() => handleClick("next")}
            className="p-6 rounded-full bg-transparent relative w-fit flex justify-center border border-accent"
            title="Next Quote"
            aria-label="Next Quote"
          >
            <ArrowRight size={24} className="relative z-0 text-accent" />
            <motion.div
              className="absolute inset-0 rounded-full bg-accent z-0 flex justify-center items-center"
              style={{
                clipPath: `inset(${100 - progress}% 0 0 0)`,
              }}
            >
              <ArrowRight size={24} className="relative z-10 text-background" />
            </motion.div>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default QuotesCarousel;
