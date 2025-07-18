"use client";

import { useTheme } from "next-themes";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import AnimatedHeading from "../AnimatedHeading";

const Hero = () => {
  const { theme } = useTheme();

  const ParallaxImage = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
    });

    // Move the image upward slightly when scrolling
    const y = useTransform(scrollYProgress, [0, 1], [0, 70]);

    return (
      <motion.div ref={ref} style={{ y }} className="overflow-visible h-full">
        <Image
          src="/images/hero/book-cover.png"
          alt="Book Cover"
          width={300}
          height={300}
          loading="lazy"
          className="rounded-xl w-full h-full object-cover"
        />
      </motion.div>
    );
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen pt-32">
      {/* Left Text */}
      <div className="w-full space-y-6">
        <h1 className="text-8xl md:text-9xl md:-mt-12 mt-8 font-light text-accent leading-none flex flex-col md:flex-row flex-wrap md:items-center gap-4">
          <AnimatedHeading className="flex justify-start">
            Hi, I&apos;m
          </AnimatedHeading>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, rotate: -5 }}
            whileHover={{ scale: 1.3, rotate: -15 }}
            transition={{ duration: 0.8, ease: [1, 0, 0, 1] }}
            className="rounded-3xl h-fit w-fit inline-block"
          >
            <Image
              width={300}
              height={300}
              src="/images/profilepic.jpg"
              alt="Profile"
              priority
              className="w-20 md:w-32 aspect-square object-cover rounded-3xl"
            />
          </motion.div>
          <AnimatedHeading className="flex justify-start">
            Ishant Kumar.
          </AnimatedHeading>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full pb-16 lg:pb-0">
          {/* Playlist Card */}
          <motion.div
            transition={{ duration: 0.3 }}
            className={`flex sm:col-span-2 flex-col bg-backgroundblur justify-between rounded-3xl border border-borderclr overflow-hidden backdrop-blur-sm`}
          >
            <h3 className="p-4 text-sm text-gray-300">Listen with me</h3>
            <div
              className="px-4 pb-4 rounded-3xl relative flex items-center justify-center w-full h-full"
              onMouseEnter={() => document.body.classList.add("cursor-default")}
              onMouseLeave={() =>
                document.body.classList.remove("cursor-default")
              }
            >
              <div className="w-full h-full" data-cursor="spotify">
                <iframe
                  className="w-full !rounded-2xl spotify-iframe"
                  src="https://open.spotify.com/embed/playlist/37i9dQZEVXcNheyb00KEzN?utm_source=generator&theme=0"
                  width="100%"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="eager"
                  title="Spotify playlist: Listen with me"
                />
              </div>
            </div>
          </motion.div>
          {/* Reading Card */}
          <motion.div
            transition={{ duration: 0.3 }}
            className={`flex flex-col bg-backgroundblur justify-between rounded-3xl border border-borderclr overflow-hidden backdrop-blur-sm`}
          >
            <div className="p-4">
              <h3 className="text-sm text-gray-300">What I&apos;m reading</h3>
              <p className="mt-2 font-medium text-accent">
                30 DAYS: Change your habits, Change your life
              </p>
              <p className="mt-2 text-xs text-gray-300">Marc Reklau</p>
            </div>

            {/* Parallax Effect */}
            <ParallaxImage />
          </motion.div>

          {/* Map Card */}
          <motion.div
            transition={{ duration: 0.3 }}
            className={`flex flex-col bg-backgroundblur justify-between rounded-3xl border border-borderclr overflow-hidden backdrop-blur-sm`}
          >
            <h3 className="p-4 text-sm text-gray-300">Map</h3>
            <div className="h-full relative overflow-hidden bg-accent">
              <Image
                src={`${
                  theme === "light"
                    ? "/images/hero/map-light.png"
                    : "/images/hero/map-dark.png"
                }`}
                alt="Map"
                width={300}
                height={300}
                loading="lazy"
                className="w-full h-full object-cover bg-accent overflow-hidden mix-blend-luminosity"
              />
            </div>
            <div className="absolute p-4 bottom-0">
              <p className="mt-2 font-medium text-3xl text-accent">Faridabad</p>
              <p className=" font-medium text-accent">Haryana, India</p>
              <p className="mt-2 text-xs text-gray-300">
                28.395403° N, 77.315292° E
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
