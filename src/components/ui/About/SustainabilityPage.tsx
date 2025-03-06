"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Factory, Building, Sprout } from "lucide-react";
import Link from "next/link";

const SustainabilityPage = () => {
  const features = [
    {
      title: "Eco-Friendly Travel",
      description:
        "We partner with airlines and cruise lines that use sustainable fuel alternatives and energy-efficient technologies to minimize carbon footprints.",
      icon: Factory, // Represents industry sustainability
    },
    {
      title: "Carbon Offset Initiatives",
      description:
        "Our optional carbon offset programs allow travelers to contribute to projects that combat climate change, from reforestation to renewable energy.",
      icon: Sprout, // Represents nature & eco-friendly projects
    },
    {
      title: "Sustainable Accommodations",
      description:
        "We recommend eco-friendly hotels and lodgings that practice water conservation, waste reduction, and renewable energy usage.",
      icon: Building, // Represents buildings (hotels & accommodations)
    },
  ];

  return (
    <motion.div className="flex flex-col items-center justify-center text-foreground md:px-6 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center"
      >
        <motion.h1 className="text-5xl md:text-7xl font-bold flex items-center w-full justify-center h-fit">
          Travel Responsibly.
          <Globe className="stroke-[#50C878] relative h-[1em] w-auto ml-2" />
        </motion.h1>

        <motion.p className="mt-4 text-lg md:text-xl text-foreground mx-auto max-w-4xl">
          At AirSea Travels, we are committed to eco-conscious journeys. From
          carbon offset programs to green partnerships, we ensure travel that
          leaves a positive impact on the planet.
        </motion.p>
      </motion.div>

      {/* Sustainability Features */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: window.innerWidth < 768 ? 0 : 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.1,
            },
          },
          hidden: { opacity: 0, y: 50 },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{
                opacity: { duration: 0.8, ease: "easeInOut" },
                scale: { duration: 0.3, ease: "easeInOut" },
              }}
              className="p-6 border border-gray-300 rounded-xl text-center hover:shadow-md transition-all duration-300"
            >
              {/* Icon on top */}
              <Icon className="h-12 w-12 text-primary mx-auto mb-4" />

              <motion.h3 className="text-xl font-semibold text-primary">
                {feature.title}
              </motion.h3>
              <motion.p className="text-md text-foreground mt-2">
                {feature.description}
              </motion.p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <Link href="/sustainable-travel">
          <motion.button
            data-cursor="sustainable"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 cursor-pointer rounded-full bg-foreground text-background text-lg font-medium flex items-center"
          >
            Learn More <ArrowUpRight />
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default SustainabilityPage;
