"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedHeading from "./AnimatedHeading";

const travelFacts = [
  "The world's busiest airport by passenger traffic is Hartsfield-Jackson Atlanta International Airport.",
  "The longest non-stop commercial flight is Singapore Airlines’ Singapore to New York route (18+ hours!).",
  "The fastest commercial airplane ever was Concorde, reaching speeds of Mach 2.04 (1,354 mph).",
  "Pilots and co-pilots never eat the same meal to prevent food poisoning from affecting both.",
  "The Titanic was not the largest ship ever built—it was later surpassed by modern cruise liners like the Symphony of the Seas.",
  "The deepest part of the ocean, the Mariana Trench, could fit Mount Everest inside it.",
  "Container ships transport 90% of the world's trade, making maritime transport crucial for the global economy.",
  "The world's largest cruise ship, Icon of the Seas, is longer than five Boeing 747s placed end to end.",
  "Air travel is statistically the safest mode of transportation, with the odds of a crash being about 1 in 11 million.",
  "Some modern airplanes can glide for over 100 miles even if both engines fail.",
  "Dubai International Airport has the world's largest duty-free shopping area.",
  "The Wright brothers' first flight in 1903 lasted only 12 seconds.",
  "Cruise ships have their own morgues due to the long durations at sea.",
  "The Boeing 747, known as the 'Jumbo Jet,' can hold up to 600 passengers.",
  "The shortest commercial flight in the world is between Westray and Papa Westray in Scotland, lasting just 57 seconds.",
  "Singapore Airlines serves over 50 different types of dishes on its flights.",
  "The world's largest aircraft, the Antonov An-225, was originally built to transport space shuttles.",
  "The air in an airplane cabin is drier than most deserts, with humidity levels around 10-20%.",
  "The first commercial flight took place in 1914 between St. Petersburg and Tampa, Florida.",
  "A fully loaded container ship can carry over 20,000 containers at once.",
  "The Bermuda Triangle has a history of mysterious disappearances of planes and ships.",
  "Some modern aircraft have auto-land capabilities that allow them to land with minimal pilot input.",
  "The cruise ship Symphony of the Seas has over 20 restaurants onboard.",
  "More than 8 million people fly every day around the world.",
  "Ships use ballast water to maintain stability when not fully loaded.",
  "The Airbus A380 is the largest passenger plane in the world, with two full decks.",
  "Charles Lindbergh was the first person to fly solo non-stop across the Atlantic in 1927.",
  "The Queen Mary 2 is one of the fastest ocean liners, reaching speeds of 30 knots.",
  "Japan has some of the most punctual airlines, with delays averaging under five minutes.",
  "Some airports have sleeping pods for travelers with long layovers.",
  "A ship's anchor can weigh more than 10,000 pounds.",
  "The Concorde could fly from New York to London in just over 3 hours.",
  "The United States has over 5,000 public airports.",
  "Cargo ships use massive propellers that can be over 30 feet in diameter.",
  "The world's most expensive airport is Beijing Daxing International Airport, costing over $11 billion.",
  "Flight turbulence is more common in the summer due to rising warm air.",
  "In 2018, Norwegian Air set a record for the fastest transatlantic subsonic flight at 5 hours and 13 minutes.",
  "The Titanic had four funnels, but only three were functional. The fourth was for aesthetics.",
  "The world's longest commercial flight by distance is from Singapore to New York, covering over 9,500 miles.",
  "A ship's horn can be heard up to 10 miles away at sea.",
  "The International Space Station orbits Earth at about 17,500 mph, which is faster than most airplanes.",
  "Hartsfield-Jackson Atlanta Airport handles over 100 million passengers annually.",
  "The Airbus Beluga is a cargo plane designed to carry oversized cargo like airplane parts.",
  "Most ships operate 24/7 with rotating crew shifts.",
  "The Great Pacific Garbage Patch is a floating mass of plastic waste in the ocean.",
  "In-flight meals taste different due to changes in air pressure and humidity affecting taste buds.",
  "A modern cruise ship can carry over 6,000 passengers and 2,000 crew members.",
  "The Boeing 787 Dreamliner is designed to be more fuel-efficient and comfortable for passengers.",
  "The busiest sea route in the world is the Dover Strait between the UK and France.",
  "Most aircraft are painted white to reduce heating and make it easier to spot cracks and damage.",
  "Cruise ships use stabilizers to minimize rocking and improve passenger comfort.",
  "The world's longest bridge over water is the Lake Pontchartrain Causeway in Louisiana.",
  "The first autopilot system for airplanes was developed in 1914.",
  "Air traffic controllers communicate in English worldwide, regardless of country.",
  "The Strait of Malacca is one of the busiest shipping lanes in the world.",
  "Most modern aircraft wings are designed to flex rather than remain rigid for better aerodynamics.",
  "Seaplanes can take off and land on water using specially designed floats.",
  "Some ships use nuclear power instead of traditional fuel sources.",
  "On long-haul flights, pilots take controlled naps to stay alert.",
  "Many airports have designated sleeping areas and shower facilities for travelers.",
  "The world's largest container port is the Port of Shanghai.",
  "Some airlines allow passengers to track their flights in real-time using onboard maps.",
  "The Panama Canal saves ships over 8,000 miles of travel compared to going around South America.",
];

interface LoadingProps {
  onLoaded: () => void;
}

export default function Loading({ onLoaded }: LoadingProps) {
  const [factIndex, setFactIndex] = useState<number | null>(null);

  useEffect(() => {
    setFactIndex(Math.floor(Math.random() * travelFacts.length));

    const handleLoad = () => {
      setTimeout(() => onLoaded(), 3000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, [onLoaded]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-background overflow-hidden z-[9999]"
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <AnimatedHeading className="flex text-2xl md:text-4xl text-foreground font-bold mb-6 items-center justify-center">
        Loading airseatravels.com
      </AnimatedHeading>
      <AnimatedHeading className="text-4xl md:text-6xl text-primary font-bold mb-6">
        Did You Know?
      </AnimatedHeading>
      <div className="relative w-full h-fit flex items-center justify-center overflow-hidden px-6">
        <motion.div className="overflow-hidden text-center text-2xl md:text-4xl text-foreground font-medium max-w-4xl">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.6,
              ease: [1, 0.2, 0, 0.8],
            }}
            viewport={{ once: true }}
          >
            {factIndex !== null ? travelFacts[factIndex] : "Loading..."}
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
