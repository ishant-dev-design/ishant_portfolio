"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { useTheme } from "next-themes";

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
    company: "ADS247365 India Pvt Ltd",
    year: "Jan 2024 - Present",
    description:
      "Developing and optimizing high-performance ReactJS applications, improving load times, and enhancing user experience.",
  },
  {
    role: "Data Science Intern",
    company: "Placify Technologies",
    year: "2024",
    description:
      "Worked on real-world projects using Python, SQL, and Power BI to analyze and visualize data-driven insights.",
  },
];

const Experience = () => {
  const { theme } = useTheme();

  return (
    <motion.div className="h-fit flex justify-center items-center mb-12">
      <motion.div
        className="relative w-full h-fit flex flex-col md:pt-12 rounded-3xl overflow-visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.h1 className="text-4xl md:text-7xl font-bold text-foreground text-center mb-10">
          Education & Experience
        </motion.h1>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          {/* Education Section */}
          <motion.div
            className={`p-6 border backdrop-blur-md rounded-3xl
              ${
                theme === "light"
                  ? "bg-[#ffffff66] border-gray-300"
                  : "bg-[#00000066] border-white/20"
              }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2 className="text-3xl font-semibold text-primary mb-4 flex items-center">
              <GraduationCap className="flex h-8 mr-4" />
              Education
            </motion.h2>
            {educationData.map((edu, index) => (
              <motion.div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-md text-muted-foreground">
                  {edu.institution}
                </p>
                <p className="text-sm text-muted-foreground">{edu.year}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className={`p-6 border backdrop-blur-md rounded-3xl
              ${
                theme === "light"
                  ? "bg-[#ffffff66] border-gray-300"
                  : "bg-[#00000066] border-white/20"
              }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2 className="flex items-center text-3xl font-semibold text-primary mb-4">
              <BriefcaseBusiness className="flex h-8 mr-4" />
              Work Experience
            </motion.h2>
            {experienceData.map((exp, index) => (
              <motion.div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-md text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.year}</p>
                <p className="text-sm text-muted-foreground">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
