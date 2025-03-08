"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion } from "framer-motion";

const ThemeToggleGroup = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex bg-background p-1 rounded-full border-accent border">
      {[
        { name: "Light", value: "light", icon: <Sun className="w-5 h-5" /> },
        { name: "Dark", value: "dark", icon: <Moon className="w-5 h-5" /> },
        {
          name: "System",
          value: "system",
          icon: <Monitor className="w-5 h-5" />,
        },
      ].map(({ name, value, icon }) => (
        <motion.button
          key={value}
          onClick={() => setTheme(value)}
          className={`flex items-center gap-1 px-4 py-2 rounded-full transition-colors ${
            theme === value || (theme === "system" && value === "system")
              ? "bg-accent text-background"
              : "text-foreground"
          }`}
        >
          {icon}
          <span className="hidden sm:inline">{name}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default ThemeToggleGroup;
