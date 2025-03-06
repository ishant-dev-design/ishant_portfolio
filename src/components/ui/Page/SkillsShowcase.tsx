"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  GitBranch,
  Paintbrush,
  Terminal,
  Github,
} from "lucide-react";
import Image from "next/image";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  image: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend & UI/UX",
    skills: [
      {
        name: "ReactJS",
        icon: Code,
        description: "A JavaScript library for building user interfaces.",
        image: "/images/react.png",
      },
      {
        name: "NextJS",
        icon: Code,
        description: "A powerful React framework for production.",
        image: "/images/nextjs.png",
      },
      {
        name: "HTML",
        icon: Paintbrush,
        description: "The standard markup language for web pages.",
        image: "/images/html.png",
      },
      {
        name: "CSS",
        icon: Paintbrush,
        description: "A stylesheet language for designing web pages.",
        image: "/images/css.png",
      },
      {
        name: "JavaScript",
        icon: Terminal,
        description: "A programming language for interactive web development.",
        image: "/images/javascript.png",
      },
      {
        name: "Figma",
        icon: Paintbrush,
        description: "A web-based UI/UX design tool.",
        image: "/images/figma.png",
      },
      {
        name: "Adobe XD",
        icon: Paintbrush,
        description: "A vector-based UI/UX design tool.",
        image: "/images/adobe_xd.png",
      },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      {
        name: "NodeJS",
        icon: Database,
        description: "A JavaScript runtime for server-side applications.",
        image: "/images/nodejs.png",
      },
      {
        name: "MySQL",
        icon: Database,
        description: "A relational database management system.",
        image: "/images/mysql.png",
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      {
        name: "AWS",
        icon: Cloud,
        description: "A cloud computing platform by Amazon.",
        image: "/images/aws.png",
      },
      {
        name: "Docker",
        icon: Cloud,
        description:
          "A platform for developing, shipping, and running applications.",
        image: "/images/docker.png",
      },
    ],
  },
  {
    category: "Version Control & Optimization",
    skills: [
      {
        name: "Git",
        icon: GitBranch,
        description: "A distributed version control system.",
        image: "/images/git.png",
      },
      {
        name: "GitHub",
        icon: Github,
        description: "A hosting service for Git repositories.",
        image: "/images/github.png",
      },
      {
        name: "Lighthouse Audits",
        icon: Terminal,
        description: "A tool for improving web page quality.",
        image: "/images/lighthouse.png",
      },
    ],
  },
];

const SkillsShowcase: React.FC = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center text-foreground md:px-6 py-16">
      {/* Section Header */}
      <motion.h1 className="text-5xl md:text-7xl font-bold text-center">
        My Skills & Expertise
      </motion.h1>

      <motion.p className="mt-4 text-lg md:text-xl text-foreground mx-auto max-w-3xl text-center">
        A well-rounded skill set covering frontend, backend, cloud, and
        optimization.
      </motion.p>

      {/* Skills Categories */}
      <div className="mt-12 w-full max-w-5xl">
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-12">
            <motion.h2 className="text-3xl font-semibold text-primary mb-6 text-center">
              {category.category}
            </motion.h2>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1 },
                },
                hidden: { opacity: 0, y: 50 },
              }}
            >
              {category.skills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      opacity: { duration: 0.8, ease: "easeInOut" },
                      scale: { duration: 0.3, ease: "easeInOut" },
                    }}
                    className="relative p-6 border border-gray-300 rounded-3xl text-center hover:shadow-md transition-all duration-300"
                  >
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <motion.h3 className="text-xl font-semibold text-primary">
                      {skill.name}
                    </motion.h3>
                    <p className="text-sm text-foreground mt-2">
                      {skill.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsShowcase;
