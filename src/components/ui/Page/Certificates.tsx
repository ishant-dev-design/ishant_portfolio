"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { certifications } from "@/data/certifications"; // Import certifications

const Certifications = () => {
  return (
    <motion.div className="relative w-full flex flex-col items-center justify-center gap-6 text-white py-6">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "circInOut" }}
        className="text-foreground mb-6"
      >
        <motion.h1 className="text-5xl md:text-7xl font-bold text-center">
          My Certifications
        </motion.h1>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount:
            typeof window !== "undefined" && window.innerWidth < 768 ? 0 : 0.5,
        }}
        transition={{ duration: 0.8, ease: "circInOut" }}
        className="grid grid-cols-1 md:grid-cols-3 w-full gap-6"
      >
        {certifications.map((certification, index) => (
          <motion.div
            className="relative"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "circInOut",
            }}
          >
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ scale: { duration: 0.8, ease: "circInOut" } }}
              className="p-4 rounded-3xl cursor-pointer border"
            >
              <motion.div className="flex flex-col items-center text-center">
                <motion.img
                  src={certification.image}
                  alt={certification.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-primary">
                  {certification.name}
                </h3>
                <p className="text-foreground text-sm mt-2">
                  {certification.description}
                </p>

                <Link href={`/certifications/${certification.slug}`}>
                  <motion.button className="mt-4 px-4 py-2 text-sm bg-primary text-background hover:text-primary font-semibold rounded-3xl border border-primary hover:bg-transparent transition">
                    Learn More About {certification.name}
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Certifications;
