"use client";

import { motion } from "framer-motion";
import TextPressure from "../TextPressure";

const TextDesign = () => {
  return (
    <motion.div className="h-fit flex justify-center items-center max-w-5xl mx-auto">
      <motion.div
        className="relative w-full h-fit flex flex-col rounded-3xl overflow-visible "
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Text Section */}
        <motion.div className="flex flex-col justify-center z-10">
          <div style={{ position: "relative" }}>
            <TextPressure
              className="!text-accent"
              text="design"
              flex={true}
              alpha={false}
              stroke={false}
              width={false}
              weight={true}
              italic={true}
              minFontSize={12}
            />
          </div>
          <div style={{ position: "relative" }}>
            <TextPressure
              className="!text-foreground"
              text="develop"
              flex={true}
              alpha={false}
              stroke={false}
              width={false}
              weight={true}
              italic={true}
              minFontSize={12}
            />
          </div>
          <div style={{ position: "relative" }}>
            <TextPressure
              className="!text-accent"
              text="innovate"
              flex={true}
              alpha={false}
              stroke={false}
              width={false}
              weight={true}
              italic={true}
              minFontSize={12}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TextDesign;
