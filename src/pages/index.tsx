"use client";
import { motion } from "framer-motion";
import Hero from "@/components/ui/Home/Hero";
import TopFlightRoutes from "@/components/ui/Homeold/TopFlightRoutes";
import FlightStatistics from "@/components/ui/Homeold/FlightStatistics";
import Reviews from "@/components/ui/Homeold/Reviews";
import Certificates from "@/components/ui/Home/Certificates";
import SkillsShowcase from "@/components/ui/Home/SkillsShowcase";
import Workwithme from "@/components/ui/Home/Workwithme";
import GetInTouch from "@/components/ui/GetInTouch";
import TextDesign from "@/components/ui/Home/TextDesign";

export default function Home() {
  return (
    <motion.div className="bg-background p-6 max-w-7xl mx-auto">
      <Hero />
      <TextDesign />
      <Workwithme />
      {/* <TopFlightRoutes /> */}
      {/* <FlightStatistics /> */}
      <SkillsShowcase />
      <Certificates />
      <Reviews />
      <GetInTouch />
    </motion.div>
  );
}
