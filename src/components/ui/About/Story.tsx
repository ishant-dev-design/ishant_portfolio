"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Story = () => {
  const { theme } = useTheme();

  return (
    <motion.div className="h-fit flex justify-center items-center mb-12">
      <motion.div
        className="relative w-full h-fit flex flex-col md:pt-12 rounded-3xl overflow-visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Text Section */}
        <motion.div className="flex flex-col justify-center z-10 mt-3">
          <motion.div
            className={`flex flex-col text-start space-y-6 max-h-fit p-6 border backdrop-blur-md rounded-3xl
              ${
                theme === "light"
                  ? "bg-[#ffffff66] border-gray-300"
                  : "bg-[#00000066] border-white/20"
              }`}
            transition={{
              staggerChildren: 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <motion.h1 className="text-2xl md:text-4xl font-bold text-foreground text-start">
              The Story of Ishant Kumar: A Technophile on a Mission
            </motion.h1>

            <motion.p className="text-md md:text-lg text-muted-foreground">
              Ever since I can remember, I’ve been{" "}
              <strong>captivated by technology</strong>—not just how it works,
              but how it <strong>shapes and enhances our world</strong>. My
              journey into the digital universe has led me to explore{" "}
              <strong>
                frontend development, UX/UI design, and data analytics
              </strong>
              , where I get to build, innovate, and solve problems every day.
              <br />
              <br />I thrive on{" "}
              <strong>crafting intuitive user experiences</strong>, making
              interfaces{" "}
              <strong>both visually appealing and highly functional</strong>. I
              also have a deep fascination with{" "}
              <strong>data-driven decision-making</strong>, uncovering patterns
              that tell compelling stories. Whether it's{" "}
              <strong>coding, designing, or analyzing</strong>, I see technology
              as an endless playground for{" "}
              <strong>creativity and innovation</strong>.
              <br />
              <br />
              Beyond the screen, I’m an <strong>avid explorer</strong>—whether
              it’s through <strong>soccer, video games, movies, reading</strong>
              , or <strong>long walks</strong> (yes, <em>a lot</em> of them).
              Every experience, both digital and real-world, fuels my{" "}
              <strong>curiosity</strong> and inspires me to keep learning.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Story;
