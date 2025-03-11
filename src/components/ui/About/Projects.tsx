"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    image: "/starfield_os.png",
    title: "Starfield OS",
    description:
      "A futuristic OS concept inspired by the Starfield universe, featuring a sleek UI and dynamic widgets.",
    link: "/projects/starfield-os",
  },
  {
    image: "/urjaa.png",
    title: "Urjaa",
    description:
      "An energy distribution platform designed to optimize and manage household power consumption efficiently.",
    link: "/projects/urjaa",
  },
  {
    image: "/synthcode.png",
    title: "SynthCode",
    description:
      "A modern IT solutions platform offering services like cloud computing, AI integrations, and security.",
    link: "/projects/synthcode",
  },
  {
    image: "/sbt.png",
    title: "SBT - Secure Blockchain Token",
    description:
      "A secure blockchain token system for verifying transactions and creating digital identities.",
    link: "/projects/sbt",
  },
];

const Projects = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center w-full h-auto gap-6 py-12">
      <h1 className="text-4xl md:text-7xl font-bold text-center my-2">
        My Projects
      </h1>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-6 md:px-12">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full !h-64 rounded-3xl object-cover"
              loading="lazy"
              layout="responsive"
              width={100}
              height={100}
            />
            <h2 className="text-2xl font-semibold mt-4 text-center">
              {project.title}
            </h2>
            <p className="text-lg text-foreground text-center mt-2">
              {project.description}
            </p>
            <Link data-cursor="pointer" href={project.link}>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 mt-4 rounded-full bg-accent text-foreground text-lg font-medium flex items-center"
              >
                View Project <ArrowUpRight className="ml-2" />
              </motion.button>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
