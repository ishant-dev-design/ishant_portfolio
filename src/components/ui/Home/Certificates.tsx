"use client";

import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { motion } from "framer-motion";
import { certifications } from "@/data/certifications"; // Import certifications

const Certifications = () => {
  const router = useRouter(); // Initialize router

  return (
    <motion.div className="relative w-full flex flex-col items-center justify-center gap-6 py-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "circInOut" }}
        className="text-foreground mb-6"
      >
        <motion.h1 className="text-5xl md:text-7xl font-bold text-center">
          My Certifications
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
        }}
        transition={{ duration: 0.8, ease: "circInOut" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6"
      >
        {certifications.map((certification, index) => (
          <motion.div className="relative" key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "circInOut",
              }}
              className="rounded-3xl h-full pb-6"
            >
              <motion.div className="flex flex-col items-center text-center">
                <motion.img
                  src={certification.image}
                  alt={certification.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-primary">
                  {certification.name}
                </h3>
                <p className="text-foreground text-sm mt-2">
                  {certification.description}
                </p>
                <button
                  data-cursor="pointer"
                  className="mt-4 px-4 py-2 bg-accent font-bold text-[#101010] rounded-lg hover:bg-opacity-80 transition"
                  onClick={() =>
                    router.push(`/certifications/${certification.slug}`)
                  }
                >
                  View Details
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Certifications;
