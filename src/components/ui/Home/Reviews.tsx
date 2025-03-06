"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const reviews = [
  {
    name: "Samantha Claire",
    avatar: "/avatars/avatar1.jpg",
    review:
      "Seamless booking process and outstanding service! Highly recommended for hassle-free travel.",
  },
  {
    name: "Tony Maclerre",
    avatar: "/avatars/avatar2.jpg",
    review:
      "Top-notch travel experience! The flights and cruises were perfectly organized.",
  },
  {
    name: "Michael Thompson",
    avatar: "/avatars/avatar3.jpg",
    review:
      "Exceptional service and smooth itinerary planning. Will definitely book again!",
  },
  {
    name: "Emily Rodriguez",
    avatar: "/avatars/avatar4.jpg",
    review:
      "Absolutely loved the trip! The accommodations and travel arrangements were flawless.",
  },
  {
    name: "James Carter",
    avatar: "/avatars/avatar5.jpg",
    review:
      "Great experience! The team handled everything from flights to cruises perfectly.",
  },
  {
    name: "Sophia Martinez",
    avatar: "/avatars/avatar6.jpg",
    review:
      "Fantastic travel service with excellent customer support. Made my journey stress-free!",
  },
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
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
          setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
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
        ? (prev - 1 + reviews.length) % reviews.length
        : (prev + 1) % reviews.length
    );
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeIndex]);

  return (
    <motion.div className="relative w-full h-fit flex flex-col justify-center items-center overflow-hidden mt-10">
      {/* Heading */}
      <motion.p
        className="leading-none z-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.h1 className="text-5xl md:text-7xl font-bold text-center">
          What our Customers say.
        </motion.h1>
      </motion.p>
      {/* Review Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-full h-full md:min-h-96 overlay flex flex-col p-6 md:flex-row bg-transparent md:p-6 rounded-3xl z-10 mt-10 text-foreground border"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={reviews[activeIndex].name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              staggerChildren: 0.3,
            }}
            className="flex flex-col gap-4 overflow-hidden items-start justify-between relative"
          >
            <motion.p
              className="text-xl md:text-5xl w-full overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {reviews[activeIndex].review}
            </motion.p>
            <motion.div
              className="flex flex-row items-start md:items-center gap-4 h-fit overflow-hidden w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="rounded-full h-16 md:h-32 aspect-square bg-cover bg-center overflow-hidden"
                style={{
                  backgroundImage: `url(${reviews[activeIndex].avatar})`,
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <motion.p
                className="text-2xl md:text-7xl font-thin w-min"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {reviews[activeIndex].name}
              </motion.p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div className="md:absolute flex bottom-6 right-6 gap-2 p-3 justify-end">
          <button
            onClick={() => handleClick("prev")}
            className="p-6 overlay rounded-full bg-transparent w-fit flex justify-center border-2"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={() => handleClick("next")}
            className="p-6 overlay rounded-full bg-transparent relative w-fit flex justify-center border-2"
          >
            <ArrowRight size={24} className="relative z-0 text-foreground" />
            <motion.div
              className="absolute inset-0 rounded-full bg-foreground z-0 flex justify-center items-center"
              style={{
                clipPath: `inset(${100 - progress}% 0 0 0)`,
              }}
              animate={{ width: "100%" }}
            >
              <ArrowRight size={24} className="relative z-10 text-background" />
            </motion.div>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Reviews;
