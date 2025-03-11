"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Loading from "../ui/Loading";
import { ThemeProvider, useTheme } from "next-themes";
import Squares from "./Square_BG";

export default function Layout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (!loading) window.scrollTo(0, 0);
  }, [pathname, loading]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="flex flex-col min-h-screen bg-background font-sans">
        <AnimatePresence mode="wait">
          {loading && <Loading onLoaded={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <>
            <Header />
            <div className="fixed w-screen h-screen">
              <Squares speed={0} squareSize={40} direction="left" />
            </div>
            <motion.main
              className="p-6 z-10 pointer-events-auto"
              key={pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {children}
            </motion.main>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}
