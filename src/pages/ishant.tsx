"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  Code,
  FileText,
  Users,
  Github,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CreatorPage = () => {
  return (
    <motion.div className="flex flex-col items-center text-foreground md:px-6 py-16">
      {/* 🚀 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.h1 className="text-5xl md:text-7xl font-bold flex items-center justify-center">
          Meet the Creator{" "}
          <Users className="ml-3 w-10 h-10 text-primary animate-bounce" />
        </motion.h1>

        <motion.p className="mt-4 text-lg md:text-xl text-foreground">
          Passionate about crafting seamless digital experiences, I specialize
          in frontend development, UI/UX design, and high-performance
          applications.
        </motion.p>
      </motion.div>

      {/* 🌟 Profile Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 w-full max-w-6xl p-8 bg-background"
      >
        {/* Profile Image */}
        <motion.div className="flex justify-center">
          <Image
            width={1000}
            height={1000}
            src="/images/ishant-profile.jpg"
            alt="Ishant Kumar"
            className="rounded-3xl h-full w-full aspect-square border-4 border-primary shadow-lg"
          />
        </motion.div>

        {/* Profile Details */}
        <motion.div className="flex flex-col justify-center">
          <h2 className="text-5xl font-semibold text-primary flex items-center">
            Ishant Kumar
          </h2>
          <p className="text-2xl text-foreground">
            Frontend Developer & UX/UI Designer
          </p>

          <div className="mt-4 space-y-3 text-md text-foreground">
            <p className="flex items-start flex-col">
              <div className="flex">
                <GraduationCap className="mr-2 text-primary" />
                <strong>Education:</strong>
              </div>
              <span> B.Tech in Computer Science & Engg.</span>
            </p>
            <p className="flex items-start flex-col">
              <div className="flex">
                <Briefcase className="mr-2 text-primary" />
                <strong>Current Role:</strong>
              </div>
              Frontend React Developer - ADS247365
            </p>
            <p className="flex items-start flex-col">
              <div className="flex">
                <FileText className="mr-2 text-primary" />
                <strong>Certifications:</strong>
              </div>
              <ul>
                <li>AWS Cloud Practitioner</li>
                <li>IBM ML with Python</li>
                <li>Google UX Design</li>
              </ul>
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="mt-6 flex space-x-4">
            <Link href="tel:+919718022115">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-full bg-gray-700 text-white transition-all"
              >
                <Phone size={24} />
              </motion.button>
            </Link>
            <Link href="mailto:ishant121003@gmail.com">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-full bg-gray-700 text-white transition-all"
              >
                <Mail size={24} />
              </motion.button>
            </Link>
            <Link
              href="https://linkedin.com/in/ishant-kumar-vitb"
              target="_blank"
            >
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-full bg-gray-700 text-white transition-all"
              >
                <Linkedin size={24} />
              </motion.button>
            </Link>
            <Link href="https://github.com/ishant010301" target="_blank">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-full bg-gray-700 text-white transition-all"
              >
                <Github size={24} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* 🔹 Technical Skills (Horizontal Cards) */}
      <motion.div className="mt-16 max-w-6xl w-full">
        <motion.h1 className="text-5xl md:text-7xl font-bold flex items-center justify-center mb-10">
          <Code className="ml-3 w-10 h-10 text-primary " /> Technical Skills
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: "🚀", skill: "ReactJS, Next.js, JavaScript, TypeScript" },
            { icon: "🎨", skill: "Figma, Adobe XD (UI/UX Design)" },
            { icon: "🛠️", skill: "NodeJS, MySQL, Docker" },
            { icon: "☁️", skill: "AWS, Git, GitHub, Tailwind CSS" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="p-6 w-full sm:w-[45%] md:w-[30%] xl:w-[22%] border border-gray-300 dark:border-gray-600 rounded-2xl bg-white dark:bg-gray-900 shadow-lg flex flex-col items-center text-center"
            >
              <h3 className="text-3xl">{item.icon}</h3>
              <p className="mt-3 text-lg font-medium text-gray-800 dark:text-gray-300">
                {item.skill}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CreatorPage;
