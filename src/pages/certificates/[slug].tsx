"use client";

import { useRouter } from "next/router";
import { destinations } from "@/data/certifications";
import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Image from "next/image";

export default function DestinationPage() {
  const router = useRouter();
  const { slug } = router.query; // Get the slug from URL

  // Find the matching destination
  const destination = destinations.find((dest) => dest.slug === slug);

  if (!destination) {
    return (
      <div className="flex items-center justify-center min-h-screen text-center text-white">
        <h1 className="text-4xl font-bold">Destination Not Found</h1>
      </div>
    );
  }

  return (
    <motion.div
      className="bg-background min-h-screen p-6 md:p-12 lg:p-20 text-foreground max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[700px] rounded-lg overflow-hidden"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatedHeading className="text-4xl md:text-6xl lg:text-9xl font-bold">
          {destination.name}
        </AnimatedHeading>
        <Image
          width={1000}
          height={1000}
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover rounded-lg mt-6"
        />
      </motion.div>

      {/* Detailed Description */}
      <motion.div
        className="mx-auto text-lg leading-relaxed space-y-6 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p className="text-xl text-foreground">
          {destination.longDescription || destination.description}
        </p>
      </motion.div>

      {/* Grid Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {/* Highlights */}
        <div>
          <h2 className="text-3xl text-primary font-bold">Top Highlights</h2>
          <ul className="list-disc pl-5 text-foreground mt-3">
            {destination.highlights.map((highlight, index) => (
              <li key={index} className="mt-2">
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Activities */}
        <div>
          <h2 className="text-3xl text-primary font-bold">
            Popular Activities
          </h2>
          <ul className="list-disc pl-5 text-foreground mt-3">
            {destination.activities.map((activity, index) => (
              <li key={index} className="mt-2">
                {activity}
              </li>
            ))}
          </ul>
        </div>

        {/* Cuisine */}
        {destination.cuisine && (
          <div>
            <h2 className="text-3xl text-primary font-bold">
              Must-Try Local Cuisine
            </h2>
            <ul className="list-disc pl-5 text-foreground mt-3">
              {destination.cuisine.map((food, index) => (
                <li key={index} className="mt-2">
                  {food}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Best Time to Visit */}
        {destination.bestTimeToVisit && (
          <div>
            <h2 className="text-3xl text-primary font-bold">
              Best Time to Visit
            </h2>
            <p className="text-foreground mt-3">
              {destination.bestTimeToVisit}
            </p>
          </div>
        )}

        {/* Cultural Insights */}
        {destination.culture && (
          <div>
            <h2 className="text-3xl text-primary font-bold">
              Cultural Insights
            </h2>
            <p className="text-foreground mt-3">{destination.culture}</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
