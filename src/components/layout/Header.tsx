"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { ArrowRightCircleIcon } from "lucide-react";
import Logo from "../ui/Logo";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Furry Friends", href: "/pets" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [1, 0.2, 0, 0.8], delay: 0.2 }}
      className="fixed top-0 w-full flex justify-between z-[500] pointer-events-none"
    >
      <div className="flex w-full h-fit p-4 justify-end md:justify-between space-x-2">
        <div className="w-fit z-[500] transition-all duration-300 rounded-full pointer-events-auto">
          {/* Desktop Navigation */}
          <div className="relative pointer-events-auto p-1 space-x-1 hidden md:flex items-center border backdrop-blur-md rounded-full bg-background">
            <nav className="relative flex">
              <div className="px-3 py-1 text-md font-bold text-foreground h-8">
                <Logo className="h-full w-full p-1" />
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-1 text-md transition-all rounded-full",
                    pathname === item.href
                      ? "bg-primary text-background font-bold"
                      : "bg-transparent text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className={cn(
            "md:hidden z-[500] p-2.5 rounded-full border pointer-events-auto h-fit bg-background backdrop-blur-lg"
          )}
        >
          <label className="hamburger">
            <input
              type="checkbox"
              checked={isOpen}
              onChange={() => setIsOpen(!isOpen)}
              className="hidden"
            />
            <svg viewBox="0 0 32 32" className="w-6">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </button>

        {/* Full-Screen Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: [1, 0.2, 0, 0.8] }}
              className="fixed inset-0 h-screen w-screen bg-background/ backdrop-blur-lg flex flex-col pointer-events-auto items-center justify-center z-40"
            >
              <motion.div className="relative flex flex-col items-center gap-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-3xl text-foreground font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
