"use client";

import { motion } from "framer-motion";

const flightStats = [
  {
    label: "Total Flights Daily",
    value: "12,450",
    icon: "\u2708\ufe0f", // Airplane emoji
  },
  {
    label: "Happy Travelers",
    value: "8.5M+",
    icon: "\ud83d\udc64", // Passenger emoji
  },
  {
    label: "Global Destinations",
    value: "320+",
    icon: "\ud83c\udf0d", // Globe emoji
  },
  {
    label: "Airlines Partners",
    value: "150+",
    icon: "\u2709\ufe0f", // Mail emoji (representing communication)
  },
];

const FlightStatistics = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      className="w-full py-12"
    >
      <div className="flex flex-wrap justify-center gap-6">
        {flightStats.map((stat, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
            className="bg-background p-6 rounded-3xl flex flex-col items-center gap-4 w-64 text-center"
          >
            <span className="text-5xl">{stat.icon}</span>
            <h3 className="text-6xl font-bold text-primary">{stat.value}</h3>
            <p className="text-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FlightStatistics;
