"use client";
import { motion } from "framer-motion";
import Hero from "@/components/ui/Page/Hero";
import TopFlightRoutes from "@/components/ui/Home/TopFlightRoutes";
import FlightStatistics from "@/components/ui/Home/FlightStatistics";
import Reviews from "@/components/ui/Home/Reviews";
import TravelDestinations from "@/components/ui/Page/Certificates";
import MembershipPerks from "@/components/ui/Page/SkillsShowcase";
import NewsletterSignup from "@/components/ui/NewsletterSignup";
import AboutMe from "@/components/ui/Page/AboutMe";

export default function Home() {
  return (
    <motion.div className="bg-background p-3 max-w-7xl mx-auto">
      <Hero />
      <AboutMe />
      {/* <TopFlightRoutes /> */}
      {/* <FlightStatistics /> */}
      <MembershipPerks />
      <TravelDestinations />
      <Reviews />
      <NewsletterSignup />
    </motion.div>
  );
}
