// src/components/layout/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import {
  Facebook,
  Headset,
  Instagram,
  Linkedin,
  Mailbox,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import ToggleTheme from "../ui/ToggleTheme";

const Footer = memo(() => {
  const socialMedia = [
    {
      id: 1,
      name: "Facebook",
      icon: Facebook,
      hoverBgColor: "hover:bg-blue-600",
    },
    {
      id: 2,
      name: "Twitter",
      icon: Twitter,
      hoverBgColor: "hover:bg-blue-400",
    },
    {
      id: 3,
      name: "Instagram",
      icon: Instagram,
      hoverBgColor:
        "hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500",
    },
    {
      id: 4,
      name: "LinkedIn",
      icon: Linkedin,
      hoverBgColor: "hover:bg-blue-700",
    },
    { id: 5, name: "YouTube", icon: Youtube, hoverBgColor: "hover:bg-red-600" },
  ];

  return (
    <motion.footer className="relative text-center w-full flex justify-center z-[60] max-w-7xl mx-auto">
      <motion.div className="flex flex-col w-full bg-background text-foreground rounded-3xl p-3 z-10">
        <motion.div className="flex h-full overflow-hidden w-full">
          <motion.div
            className="text-[clamp(1rem,14vw,12rem)] text-center w-full flex text-accent"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ amount: 1 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {["ishant", "kumar"].map((part, i) => (
              <motion.span
                key={i}
                className="inline-block leading-none"
                style={{
                  flex: 1,
                  textAlign: "center",
                }}
                variants={{
                  hidden: { y: "100%" },
                  visible: {
                    y: "0%",
                    transition: { duration: 0.6, ease: [1, 0.2, 0, 0.8] },
                  },
                  exit: { y: "-100%" },
                }}
              >
                {part}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="flex justify-center md:justify-between text-nowrap flex-col md:flex-row">
          {/* Social Media */}
          <motion.div className="flex w-full my-2 md:my-0 flex-col justify-center items-center md:items-start">
            <motion.div className="text-4xl">Follow me on</motion.div>
            <motion.div className="flex rounded-full p-1 gap-1" id="socialbox">
              {socialMedia.map(({ id, name, icon: Icon, hoverBgColor }) => (
                <motion.button
                  key={id}
                  initial={{ width: "40px", scale: 1 }}
                  whileHover={{ width: "150px" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    width: { duration: 0.3 },
                    scale: { duration: 0.1 },
                  }}
                  data-cursor="pointer"
                  className={`flex p-2 max-w-fit text-foreground hover:text-white rounded-full justify-start items-center transition-colors bg-background duration-300 ${hoverBgColor} hover:opacity-80`}
                >
                  <motion.div>
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <motion.span className="mx-2 overflow-hidden">
                    {name}
                  </motion.span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="flex flex-col md:flex-row w-full gap-3 md:gap-1 justify-end items-center">
            <motion.div data-cursor="call" className="flex mx-3">
              <motion.div className="px-1">
                <Headset />
              </motion.div>
              <motion.p className="px-1">+91 97180 22115</motion.p>
            </motion.div>
            <motion.div data-cursor="mail" className="flex mx-3">
              <motion.div className="px-1">
                <Mailbox />
              </motion.div>
              <motion.p className="px-1">ishant121003@gmail.com</motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="flex text-nowrap justify-center md:flex-row mt-4 w-full">
          <ToggleTheme />
        </motion.div>
        {/* Quick Links */}
        <motion.div className="flex text-nowrap justify-center items-center flex-col md:flex-row mt-4 w-full">
          {[
            { href: "/terms", label: "Terms & Conditions" },
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/refund", label: "Refund Policy" },
          ].map((link, index) => (
            <div key={link.href} className="flex items-center">
              {index > 0 && <div className="hidden md:flex p-1">|</div>}
              <Link
                href={link.href}
                className="relative p-1 text-foreground hover:text-accent transition-colors duration-300 
                  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] 
                  after:bg-accent after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </motion.div>
        {/* Copyright */}
        <motion.p className="mt-3">
          &copy; 2025 <b>ishant kumar</b>. All rights reserved.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
});

Footer.displayName = "Footer";
export default Footer;
