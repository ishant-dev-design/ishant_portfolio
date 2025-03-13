"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import TextPressure from "../ui/TextPressure";
import {
  ArrowRight,
  BookOpenText,
  Headset,
  Mailbox,
  PawPrintIcon,
} from "lucide-react";
import ToggleTheme from "../ui/ToggleTheme";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]); // Runs whenever pathname changes

  return (
    <>
      {/* Menu Button */}
      <button
        data-cursor="pointer"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-[1000] p-2.5 text-[#101010] text-sm font-bold transition-all pointer-events-auto flex items-center gap-2 rounded-full bg-accent"
      >
        <label className="hamburger">
          <input type="checkbox" checked={isOpen} readOnly className="hidden" />
          <svg viewBox="0 0 32 32" className="w-6 pointer-events-none">
            <path
              className="line line-top-bottom fill-background"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
        <motion.div className="h-5 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "CLOSE" : "MENU"}
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
              transition={{ duration: 0.3, ease: "circInOut" }}
              className="w-12"
            >
              {isOpen ? "CLOSE" : "MENU"}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </button>

      {/* Fullscreen Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
            transition={{ duration: 0.8, ease: [1, 0, 0, 1] }}
            className="fixed gap-2 inset-0 bg-accent text-black z-[999] flex flex-col items-center justify-center tracking-tight"
          >
            <div className="items-center md:w-full w-72 max-w-sm px-6 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  className={`rounded-3xl -mx-4 ${
                    pathname === item.href ? "bg-[#232121]" : "bg-transparent"
                  }`}
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                >
                  <Link
                    data-cursor="star"
                    href={item.href}
                    className="text-foreground w-full"
                  >
                    <div
                      className="flex items-center mx-4"
                      data-cursor="pointer"
                    >
                      <TextPressure
                        className={`transition-all duration-300 bg-transparent items-center ${
                          pathname === item.href
                            ? "!text-accent"
                            : "!text-[#232121] "
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
              className="absolute bottom-3 left-3 md:bottom-6 md:left-6 text-xs text-[#101010]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [1, 0, 0, 1] }}
            >
              <motion.div
                data-cursor="pointer"
                className="flex hover:underline items-center"
              >
                <motion.div></motion.div>
                <Link href="https://www.instagram.com/ishant_dev_design/">
                  <motion.p className="flex items-center">
                    INSTAGRAM <ArrowRight className="h-4" />
                  </motion.p>
                </Link>
              </motion.div>
              <motion.div
                data-cursor="pointer"
                className="flex hover:underline items-center"
              >
                <motion.div></motion.div>
                <Link href="https://www.linkedin.com/in/ishant-dev-design/">
                  <motion.p className="flex items-center">
                    LINKEDIN <ArrowRight className="h-4" />
                  </motion.p>
                </Link>
              </motion.div>
              <motion.div
                data-cursor="pointer"
                className="flex hover:underline items-center"
              >
                <motion.div></motion.div>
                <Link href="https://github.com/ishant-dev-design">
                  <motion.p className="flex items-center">
                    GITHUB <ArrowRight className="h-4" />
                  </motion.p>
                </Link>
              </motion.div>
              <motion.div
                data-cursor="pointer"
                className="flex hover:underline items-center"
              >
                <motion.div></motion.div>
                <Link href="https://www.behance.net/ishant-dev-design">
                  <motion.p className="flex items-center">
                    BEHANCE <ArrowRight className="h-4" />
                  </motion.p>
                </Link>
              </motion.div>
              <motion.div
                data-cursor="pointer"
                className="flex hover:underline items-center"
              >
                <motion.div></motion.div>
                <Link href="https://t.me/ishant_devdesign">
                  <motion.p className="flex items-center">
                    TELEGRAM <ArrowRight className="h-4" />
                  </motion.p>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div className="flex text-nowrap justify-center items-center md:flex-row md:mt-4 w-full">
              <ToggleTheme />
            </motion.div>
            <motion.div className="flex flex-row text-nowrap justify-center items-center md:mt-4 w-full gap-2 md:gap-6">
              <Link href="/pets" data-cursor="pointer">
                <motion.button
                  className={`flex items-center px-4 py-2 rounded-full gap-2 transition-colors bg-background text-foreground`}
                >
                  <PawPrintIcon />
                  <span className="inline-flex">
                    <span className="hidden md:flex">meet my companions</span>
                    <span className="flex md:hidden">pets</span>
                  </span>
                </motion.button>
              </Link>
              <div className="hidden md:flex">or perhaps</div>
              <Link href="/blogs" data-cursor="pointer">
                <motion.button
                  className={`flex items-center px-4 py-2 rounded-full gap-2 transition-colors bg-background text-foreground`}
                >
                  <BookOpenText />
                  <span className="inline">
                    <span className="hidden md:flex">a little reading..</span>
                    <span className="flex md:hidden">blogs</span>
                  </span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="absolute bottom-3 right-3 md:bottom-6 md:right-6 text-xs text-black"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [1, 0, 0, 1] }}
            >
              <motion.div
                data-cursor="pointer"
                className="flex hover:underline items-center"
              >
                <motion.div className="px-1">
                  <Headset />
                </motion.div>
                <Link href="https://wa.me/+919718022115">
                  <motion.p className="px-1">+91 97180 22115</motion.p>
                </Link>
              </motion.div>
              <motion.div
                data-cursor="pointer"
                className="flex hover:underline items-center"
              >
                <motion.div className="px-1">
                  <Mailbox />
                </motion.div>
                <Link href="mailto:ishant.devdesign@gmail.com">
                  <motion.p className="px-1">
                    ishant.devdesign@gmail.com
                  </motion.p>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
