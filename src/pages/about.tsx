// src/pages/about.tsx (About Page)
import Carousel from "@/components/ui/Page/Hero";
import CollectionBox from "@/components/ui/Page/AboutMe";
import SustainabilityPage from "@/components/ui/About/SustainabilityPage";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import NewsletterSignup from "@/components/ui/NewsletterSignup";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div className="bg-background p-3 max-w-7xl mx-auto">
      <motion.div className="flex pt-16 md:pt-24 pb-12 justify-center w-full">
        <AnimatedHeading className="text-3xl md:text-5xl lg:text-8xl text-foreground text-center">
          Our Story.
        </AnimatedHeading>
      </motion.div>
      <Carousel />
      <CollectionBox />
      <SustainabilityPage />
      <NewsletterSignup />
    </motion.div>
  );
}
