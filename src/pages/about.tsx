// src/pages/about.tsx (About Page)
import HobbiesInterestsPage from "@/components/ui/About/HobbiesInterestsPage";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import GetInTouch from "@/components/ui/GetInTouch";
import { motion } from "framer-motion";
import Experience from "@/components/ui/About/Experience";
import Projects from "@/components/ui/About/Projects";
import WhatDrivesMe from "@/components/ui/About/WhatDrivesMe";
import Story from "@/components/ui/About/Story";

export default function About() {
  return (
    <motion.div className="bg-background max-w-7xl mx-auto">
      <motion.div className="flex pt-16 md:pt-24 pb-12 justify-center w-full">
        <AnimatedHeading className="text-3xl md:text-5xl lg:text-8xl text-foreground text-center">
          Know More About Me.
        </AnimatedHeading>
      </motion.div>
      <Story />
      <Experience />
      <Projects />
      <HobbiesInterestsPage />
      <WhatDrivesMe />
      <GetInTouch />
    </motion.div>
  );
}
