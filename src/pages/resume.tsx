// src/pages/resume.tsx (Resume Page)
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import GetInTouch from "@/components/ui/GetInTouch";
import MotionRibbon from "@/components/ui/Resume/MotionRibbon";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div className="relative bg-background">
      {/* Moving Ribbon Text */}
      <div className="absolute top-1/2 z-0">
        <MotionRibbon text="Education • Experience • Skills • Certifications •" />
      </div>

      <motion.div className="p-3 max-w-7xl mx-auto z-10">
        {/* Heading Section */}
        <motion.div className="flex pt-16 md:pt-24 pb-12 justify-center w-full">
          <AnimatedHeading className="text-3xl md:text-5xl lg:text-8xl text-foreground text-center">
            My Resume
          </AnimatedHeading>
        </motion.div>

        {/* Get In Touch Section */}
        <div className="relative z-10">
          <GetInTouch />
        </div>
      </motion.div>
    </motion.div>
  );
}
