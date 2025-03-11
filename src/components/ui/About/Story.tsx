"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Story = () => {
  const { theme } = useTheme();

  return (
    <motion.div className="h-fit flex justify-center items-center">
      <motion.div
        className="relative w-full h-fit grid grid-cols-1 md:grid-cols-3 md:pt-12 mb-12 rounded-3xl overflow-visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div className="flex flex-col justify-end z-10 mt-3 md:-mr-12 col-span-2 order-3 md:order-2">
          <motion.div
            className={`flex flex-col justify-end text-start space-y-6 max-h-fit p-6 border backdrop-blur-md rounded-3xl 
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
              Ever since I can remember, I&apos;ve been{" "}
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
              that tell compelling stories. Whether it&apos;s{" "}
              <strong>coding, designing, or analyzing</strong>, I see technology
              as an endless playground for{" "}
              <strong>creativity and innovation</strong>.
              <br />
              <br />
              Beyond the screen, I&apos;m an <strong>avid explorer</strong>
              —whether it&apos;s through{" "}
              <strong>soccer, video games, movies, reading</strong>, or{" "}
              <strong>long walks</strong> (yes, <em>a lot</em> of them). Every
              experience, both digital and real-world, fuels my{" "}
              <strong>curiosity</strong> and inspires me to keep learning.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-2 md:order-3 w-full h-full flex col-span-1 justify-center items-center overflow-visible rounded-3xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.img
            src="/images/profilepic2.jpg"
            className="w-full pointer-events-none md:mt-24 h-full object-cover rounded-3xl transition-opacity duration-700 opacity-100 aspect-square"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Story;
