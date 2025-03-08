// src/pages/about.tsx (About Page)
import SustainabilityPage from "@/components/ui/About/SustainabilityPage";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import GetInTouch from "@/components/ui/GetInTouch";
import { motion } from "framer-motion";
import Story from "@/components/ui/About/Story";
import Experience from "@/components/ui/About/Experience";
import Projects from "@/components/ui/About/Projects";

export default function About() {
  return (
    <motion.div className="bg-background p-3 max-w-7xl mx-auto">
      <motion.div className="flex pt-16 md:pt-24 pb-12 justify-center w-full">
        <AnimatedHeading className="text-3xl md:text-5xl lg:text-8xl text-foreground text-center">
          Know More About Me.
        </AnimatedHeading>
      </motion.div>
      <Story />
      <Experience />
      <Projects />
      <SustainabilityPage />
      <GetInTouch />
    </motion.div>
  );
}
