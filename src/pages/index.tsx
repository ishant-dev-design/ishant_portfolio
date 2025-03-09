"use client";
import { motion } from "framer-motion";
import TopFlightRoutes from "@/components/ui/Homeold/TopFlightRoutes";
import FlightStatistics from "@/components/ui/Homeold/FlightStatistics";
import QuotesCarousel from "@/components/ui/Home/QuotesCarousel";
import Certificates from "@/components/ui/Home/Certificates";
import SkillsShowcase from "@/components/ui/Home/SkillsShowcase";
import Workwithme from "@/components/ui/Home/Workwithme";
import GetInTouch from "@/components/ui/GetInTouch";
import TextDesign from "@/components/ui/Home/TextDesign";
import Hero from "@/components/ui/Home/Hero";
import Carousel from "@/components/ui/Stack";



export default function Home() {
  return (
    <motion.div className="bg-background max-w-7xl mx-auto">
      <Hero />
      <TextDesign />
      <Workwithme />
      {/* <TopFlightRoutes /> */}
      {/* <FlightStatistics /> */}
      <SkillsShowcase />
      <Certificates />
      <QuotesCarousel />
      <GetInTouch />
    </motion.div>
  );
}
