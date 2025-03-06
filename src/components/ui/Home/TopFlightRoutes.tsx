"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const flightRoutes = [
  {
    title: "Delhi - Dubai",
    description:
      "Luxury shopping, thrilling deserts, and vibrant culture in this dazzling global city.",
    image: "/images/delhidubai.jpg",
  },
  {
    title: "Mumbai - Singapore",
    description:
      "Iconic landmarks to vibrant nightlife, lush gardens, and world-class shopping.",
    image: "/images/mumbaisingapore.jpg",
  },
  {
    title: "Bangalore - Bali",
    description:
      "Pristine beaches, vibrant culture, lush jungles, and thrilling adventures.",
    image: "/images/banglorebali.jpg",
  },
  {
    title: "Delhi - Vietnam",
    description:
      "Explore stunning landscapes, rich history, and savor delicious cuisine.",
    image: "/images/delhivietnam.jpg",
  },
];

const TopFlightRoutes = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.1 },
        },
        hidden: { opacity: 0, y: 50 },
      }}
      className="w-full py-12"
    >
      <motion.h1 className="text-5xl md:text-7xl font-bold text-center mb-10">
        Famous Flight Routes
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {flightRoutes.map((route, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="border border-gray-300 rounded-3xl text-center hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <Image
              width={1000}
              height={1000}
              src={route.image}
              alt={route.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />

            {/* Text */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-primary">
                {route.title}
              </h3>
              <p className="text-md text-foreground mt-2">
                {route.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TopFlightRoutes;
