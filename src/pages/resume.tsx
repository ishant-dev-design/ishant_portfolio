// src/pages/resume.tsx (Resume Page)
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import GetInTouch from "@/components/ui/GetInTouch";
import ResumeShowcase from "@/components/ui/Resume/ResumeShowcase";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div className="max-w-7xl mx-auto z-10">
      {/* Heading Section */}
      <motion.div className="flex pt-16 md:pt-24 pb-12 justify-center w-full">
        <AnimatedHeading className="text-3xl md:text-5xl lg:text-8xl text-foreground text-center">
          My Resume
        </AnimatedHeading>
      </motion.div>
      <div className="space-y-32 md:space-y-64">
        <ResumeShowcase />
        <GetInTouch />
      </div>
    </motion.div>
  );
}
