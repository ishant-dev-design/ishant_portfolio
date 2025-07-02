"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, LucideDownload } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  year: string;
  description: string;
  tech: string[];
}

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  tech?: string[];
  isLast?: boolean;
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "VIT Bhopal University, Bhopal, India",
    year: "Apr 2020 - Apr 2024",
  },
  {
    degree: "Senior Secondary (Class 12th)",
    institution: "DAV Public School, Sector 49, Faridabad, Haryana, India",
    year: "Apr 2018 - May 2019",
  },
  {
    degree: "Secondary (Class 10th)",
    institution: "DAV Public School, Sector 35, Faridabad, Haryana, India",
    year: "Apr 2016 - May 2017",
  },
];

const experienceData: ExperienceItem[] = [
  {
    role: "Front-End Developer",
    company: "FourCore Labs Pvt Ltd",
    year: "Jun 2025 - Present",
    description:
      "Collaborate with the engineering team to build scalable UI components using React and NextJS. Participate in feature planning, UI implementation, and performance optimization in a cybersecurity-focused environment.",
    tech: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    role: "Front-End Developer",
    company: "Airsea Travels LLC",
    year: "Mar 2025 - Present",
    description:
      "Developing and optimizing web apps with ReactJS, NextJS, HTML, CSS, and JavaScript. Ensuring cross-browser/device compatibility and collaborating on API integration.",
    tech: ["React", "Next.js", "JavaScript", "CSS"],
  },
  {
    role: "Front-End Developer",
    company: "ADS247365 India Pvt Ltd",
    year: "Jan 2024 - Feb 2025",
    description:
      "Worked with ReactJS, NodeJS, and NextJS to improve website load times, boost engagement, and refactor legacy code.",
    tech: ["React", "Node.js", "Next.js"],
  },
  {
    role: "Data Science Intern",
    company: "Placify Technologies",
    year: "2024",
    description:
      "Worked on data analysis and visualization using Python, SQL, and Power BI.",
    tech: ["Python", "SQL", "Power BI"],
  },
];

const TimelineItem = ({
  title,
  subtitle,
  date,
  description,
  tech = [],
  isLast = false,
}: TimelineItemProps) => (
  <motion.div
    className="relative pl-8 pb-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary z-10" />
    {!isLast && (
      <div className="absolute left-[5px] top-4 w-px h-[calc(100%-1rem)] bg-borderclr" />
    )}
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-md text-foreground">{subtitle}</p>
    <p className="text-sm text-foreground">{date}</p>
    {description && (
      <p className="text-sm text-foreground mb-2">{description}</p>
    )}
    {tech.length > 0 && (
      <div className="flex flex-wrap gap-2">
        {tech.map((item, idx) => (
          <span
            key={idx}
            className="text-xs px-2 py-0.5 bg-muted/10 text-muted-foreground rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    )}
  </motion.div>
);

const Experience = (): JSX.Element => {
  return (
    <motion.div
      className="h-fit flex flex-col justify-center items-center mb-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="relative w-full h-fit flex flex-col md:pt-12 rounded-3xl overflow-visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-4xl md:text-7xl font-bold text-foreground text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Education & Experience
        </motion.h1>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="p-6 border backdrop-blur-sm rounded-3xl bg-backgroundblur border-borderclr"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="text-3xl font-semibold text-primary mb-4 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <GraduationCap className="flex h-8 mr-4" />
              Education
            </motion.h2>
            {educationData.map((edu, index) => (
              <TimelineItem
                key={index}
                title={edu.degree}
                subtitle={edu.institution}
                date={edu.year}
                isLast={index === educationData.length - 1}
              />
            ))}
          </motion.div>

          <motion.div
            className="p-6 border backdrop-blur-sm rounded-3xl bg-backgroundblur border-borderclr"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="flex items-center text-3xl font-semibold text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <BriefcaseBusiness className="flex h-8 mr-4" />
              Work Experience
            </motion.h2>
            {experienceData.map((exp, index) => (
              <TimelineItem
                key={index}
                title={exp.role}
                subtitle={exp.company}
                date={exp.year}
                description={exp.description}
                tech={exp.tech}
                isLast={index === experienceData.length - 1}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="flex justify-center py-8">
          <a
            href="/resume.pdf"
            download="Ishant_Resume.pdf"
            data-cursor="pointer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-background text-lg font-semibold hover:bg-opacity-80 transition"
          >
            <LucideDownload className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
