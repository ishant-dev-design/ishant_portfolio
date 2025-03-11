"use client";

import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern web development technologies, including Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. I also work with backend solutions like Node.js and serverless functions.",
  },
  {
    question: "Can I hire you for a freelance project?",
    answer:
      "Yes! I'm available for freelance work and open to discussing new projects. Feel free to reach out via my contact form or email to discuss your project details.",
  },
  {
    question: "Do you contribute to open-source projects?",
    answer:
      "Absolutely! I actively contribute to open-source projects, and you can check out my GitHub to see my latest work and contributions.",
  },
  {
    question: "What kind of projects do you work on?",
    answer:
      "I work on a variety of projects, including portfolio websites, interactive UI/UX experiences, web applications, and performance-optimized frontends.",
  },
  {
    question: "How can I get in touch with you?",
    answer:
      "You can contact me through my portfolio’s contact form or via email. I’ll do my best to respond as quickly as possible!",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div className="flex flex-col items-center justify-center text-foreground md:px-6 py-16">
      {/* Section Header */}
      <motion.h1 className="text-5xl md:text-7xl font-bold text-center">
        Frequently Asked Questions.
      </motion.h1>

      <motion.p className="mt-4 text-lg md:text-xl text-foreground mx-auto max-w-3xl text-center">
        Have questions? Here are some answers! If you don’t find what you’re
        looking for, feel free to reach out.
      </motion.p>

      {/* FAQ List */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.1,
            },
          },
          hidden: { opacity: 0, y: 50 },
        }}
        className="mt-8 w-full max-w-5xl"
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            onClick={() => toggleFAQ(index)}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="py-4 cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <motion.h3 className="text-lg font-semibold flex items-center">
                <HelpCircle className="mr-2 text-primary" /> {faq.question}
              </motion.h3>
              <ChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <motion.p className="mt-2 text-md text-foreground px-2 pb-2">
                {faq.answer}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FAQSection;
