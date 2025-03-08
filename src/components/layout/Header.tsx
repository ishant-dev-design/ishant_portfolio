"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import TextPressure from "../ui/TextPressure";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button (Fixed Position) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-[1000] overflow-hidden p-2.5 text-black text-sm font-bold transition-all pointer-events-auto flex items-center gap-2 rounded-full bg-accent"
      >
        <label className="hamburger">
          <input type="checkbox" checked={isOpen} readOnly className="hidden" />
          <svg viewBox="0 0 32 32" className="w-6">
            <path
              className="line line-top-bottom fill-background"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>

        <AnimatePresence mode="wait">
          <motion.span
            key={isOpen ? "CLOSE" : "MENU"}
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            exit={{ y: 10 }}
            transition={{ duration: 0.3 }}
            className="w-12"
          >
            {isOpen ? "CLOSE" : "MENU"}
          </motion.span>
        </AnimatePresence>
      </button>

      {/* Fullscreen Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-accent text-black z-[999] flex flex-col items-center justify-center tracking-tight"
          >
            <div className="items-center gap-6 w-full max-w-sm px-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`text-foreground w-full`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-full">
                      <TextPressure
                        className={`${
                          pathname === item.href
                            ? "!text-accent bg-[#232121]"
                            : "!text-[#232121]"
                        }`}
                        text={item.name}
                        flex={true}
                        alpha={false}
                        stroke={false}
                        scale={true}
                        width={true}
                        weight={true}
                        italic={true}
                        textColor="#ffffff"
                        strokeColor="#ff0000"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer Links */}
            <motion.div
              className="absolute bottom-6 left-6 text-xs text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="mb-2">CODEGRID</p>
              <p>INSTAGRAM →</p>
              <p>LINKEDIN →</p>
              <p>BEHANCE →</p>
              <p>DRIBBBLE →</p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="absolute bottom-6 right-6 text-xs text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p>INFO@CODEGRID.COM</p>
              <p>0923 3984 23</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
