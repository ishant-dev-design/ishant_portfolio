"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ToggleButtonProps {
  onLabel?: string;
  offLabel?: string;
  onChange?: (checked: boolean) => void;
}

export default function ToggleButton({
  onLabel = "On",
  offLabel = "Off",
  onChange,
}: ToggleButtonProps) {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!checked);
    if (onChange) onChange(!checked);
  };

  return (
    <div
      className="relative w-20 h-9 flex items-center cursor-pointer"
      onClick={toggleSwitch}
    >
      {/* Hidden Checkbox for Accessibility */}
      <input
        type="checkbox"
        className="absolute w-full h-full opacity-0"
        checked={checked}
        onChange={toggleSwitch}
      />

      {/* Background Track */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          backgroundColor: checked
            ? "var(--color-primary)"
            : "var(--color-secondary)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Toggle Knob */}
      <motion.div
        className="absolute min-w-7 w-fit h-7 bg-white shadow-lg rounded-full flex items-center justify-center text-xs font-semibold"
        animate={{
          x: checked ? 48 : 4,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {checked ? onLabel : offLabel}
      </motion.div>
    </div>
  );
}
