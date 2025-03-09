"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import { Spotify } from "react-spotify-embed";

const Hero = () => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  return (
    <section className="relative flex items-center justify-center min-h-screen">
      {/* Hero Content */}
      {/* Left Text */}
      <div className="w-full space-y-6">
        <h1 className="text-5xl md:text-9xl md:-mt-12 mt-8 font-light text-accent leading-none flex flex-col md:flex-row flex-wrap md:items-center gap-4">
          Hi, I'm
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
              src="/profilepic.jpg"
              alt="Profile"
              className="w-20 md:w-32 aspect-square object-cover rounded-3xl"
            />
          </motion.div>
          Ishant Kumar.
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full pb-16 lg:pb-0">
          {/* Playlist Card */}
          <motion.div
            transition={{ duration: 0.3 }}
            className={`flex sm:col-span-2 flex-col justify-between rounded-3xl border border-accent overflow-hidden backdrop-blur-lg ${
              theme === "light"
                ? "bg-[#f5f3f066] border-gray-300"
                : "bg-[#10101066] border-white/20"
            }`}
          >
            <h3 className="p-4 text-sm text-gray-500">Listen with me</h3>
            <div
              data-cursor="spotify"
              className="px-4 pb-4 rounded-3xl relative flex items-center justify-center"
              onMouseEnter={() => document.body.classList.add("cursor-default")}
              onMouseLeave={() =>
                document.body.classList.remove("cursor-default")
              }
            >
              {loading && (
                <div className="absolute flex items-center justify-center w-full h-full">
                  <Loader2 className="w-6 h-6 text-gray-500 animate-spin" />
                </div>
              )}
              {/* Spotify Embed */}
              <Spotify
                className="w-full !rounded-2xl"
                link="https://open.spotify.com/playlist/37i9dQZEVXcNheyb00KEzN?si=12c08ed0368f4fc6"
                onLoad={() => setLoading(false)}
              />
            </div>
          </motion.div>
          {/* Reading Card */}
          <motion.div
            transition={{ duration: 0.3 }}
            className={`flex flex-col justify-between rounded-3xl border border-accent overflow-hidden backdrop-blur-lg ${
              theme === "light"
                ? "bg-[#f5f3f066] border-gray-300"
                : "bg-[#10101066] border-white/20"
            }`}
          >
            <div className="p-4">
              <h3 className="text-sm text-gray-500">What I'm reading</h3>
              <p className="mt-2 font-medium text-accent">
                30 DAYS: Change your habits, Change your life
              </p>
              <p className="mt-2 text-xs text-gray-500">Marc Reklau</p>{" "}
            </div>
            <div>
              <Image
                src="/book-cover.png"
                alt="Book Cover"
                width={300}
                height={200}
                className="rounded-xl w-full object-cover bg-background"
              />
            </div>
          </motion.div>

          {/* Map Card */}
          <motion.div
            transition={{ duration: 0.3 }}
            className={`flex flex-col justify-between rounded-3xl border border-accent overflow-hidden backdrop-blur-lg ${
              theme === "light"
                ? "bg-[#f5f3f066] border-gray-300"
                : "bg-[#10101066] border-white/20"
            }`}
          >
            <h3 className="p-4 text-sm text-gray-500">Map</h3>
            <div className="h-full relative overflow-hidden bg-accent">
              <Image
                src={`${
                  theme === "light" ? "/map-light.png" : "/map-dark.png"
                }`}
                alt="Map"
                width={500}
                height={500}
                className="w-auto h-full bg-accent overflow-hidden mix-blend-luminosity"
              />
            </div>
            <div className="absolute p-4 bottom-0">
              <p className="mt-2 font-medium text-3xl text-accent">Faridabad</p>
              <p className=" font-medium text-accent">Haryana, India</p>
              <p className="mt-2 text-xs text-gray-500">
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
