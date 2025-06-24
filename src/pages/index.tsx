"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import QuotesCarousel from "@/components/ui/Home/QuotesCarousel";
import Certificates from "@/components/ui/Home/Certificates";
import SkillsShowcase from "@/components/ui/Home/SkillsShowcase";
import Workwithme from "@/components/ui/Home/Workwithme";
import GetInTouch from "@/components/ui/GetInTouch";
import TextDesign from "@/components/ui/Home/TextDesign";
import Hero from "@/components/ui/Home/Hero";

export default function Home() {
  return (
    <motion.div className="bg-transparent max-w-7xl mx-auto space-y-32 md:space-y-64">
      <Head>
        <title>Home | Ishant's Portfolio</title>
        <meta
          name="description"
          content="Welcome to the homepage of Ishant's portfolio, showcasing his web development work and design skills."
        />
      </Head>
      <Hero />
      <TextDesign />
      <Workwithme />
      <SkillsShowcase />
      <Certificates />
      <QuotesCarousel />
      <GetInTouch />
    </motion.div>
  );
}
