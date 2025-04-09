"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

const educationData = [
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

const experienceData = [
  {
    role: "Front-End Developer",
    company: "Airsea Travels LLC",
    year: "Mar 2025 - Present",
    description:
      "Developing and optimizing web apps with ReactJS, NextJS, HTML, CSS, and JavaScript. Ensuring cross-browser/device compatibility and collaborating on API integration.",
  },
  {
    role: "Front-End Developer",
    company: "ADS247365 India Pvt Ltd",
    year: "Jan 2024 - Feb 2025",
    description:
      "Worked with ReactJS, NodeJS, and NextJS to improve website load times, boost engagement, and refactor legacy code.",
  },
  {
    role: "Data Science Intern",
    company: "Placify Technologies",
    year: "2024",
    description:
      "Worked on data analysis and visualization using Python, SQL, and Power BI.",
  },
];

const Experience = () => {
  return (
    <motion.div
      className="h-fit flex justify-center items-center mb-12"
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
        {/* Main Title */}
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
          {/* Education Section */}
          <motion.div
            className={`p-6 border backdrop-blur-sm rounded-3xl bg-backgroundblur border-borderclr`}
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
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-md text-foreground">{edu.institution}</p>
                <p className="text-sm text-foreground">{edu.year}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className={`p-6 border backdrop-blur-sm rounded-3xl bg-backgroundblur border-borderclr`}
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
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-md text-foreground">{exp.company}</p>
                <p className="text-sm text-foreground">{exp.year}</p>
                <p className="text-sm text-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
