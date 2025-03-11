"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const slides: {
  src: string;
  text: string;
  direction: "left" | "right";
  speed: number;
}[] = [
  {
    src: "/images/1.gif",
    text: "Front End Developer",
    direction: "left",
    speed: 1,
  },
  {
    src: "/images/2.gif",
    text: "Creative Designer",
    direction: "right",
    speed: 1.6,
  },
  {
    src: "/images/3.gif",
    text: "UI/UX Enthusiast",
    direction: "left",
    speed: 0.8,
  },
];

export default function TextParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <main className="overflow-hidden -mx-6 -mt-12">
      <div ref={container} className="relative flex flex-col gap-5 md:gap-20">
        {slides.map((slide, index) => (
          <Slide
            key={index}
            src={slide.src}
            text={slide.text}
            direction={slide.direction}
            speed={slide.speed}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </main>
  );
}

interface SlideProps {
  src: string;
  text: string;
  direction: "left" | "right";
  speed: number;
  progress: any; // You can replace 'any' with the appropriate type if known
}

const Slide = ({ src, text, direction, speed, progress }: SlideProps) => {
  // Calculate X translation dynamically based on speed
  const x = useTransform(
    progress,
    [0, 1],
    [
      direction === "left" ? `-${100 * speed}%` : `${100 * speed}%`,
      direction === "left" ? `${100 * speed}%` : `-${100 * speed}%`,
    ]
  );

  return (
    <motion.div
      style={{ x }}
      className="relative flex whitespace-nowrap justify-center"
    >
      <Phrase src={src} text={text} />
      <Phrase src={src} text={text} />
      <Phrase src={src} text={text} />
      <Phrase src={src} text={text} />
    </motion.div>
  );
};

interface PhraseProps {
  src: string;
  text: string;
}

const Phrase = ({ src, text }: PhraseProps) => {
  return (
    <div className="px-5 flex gap-10 items-center">
      <p className="text-5xl md:text-[7.5vw]">{text}</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span>
    </div>
  );
};
