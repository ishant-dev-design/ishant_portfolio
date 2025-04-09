// src/pages/_app.tsx
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import CursorProvider from "@/components/layout/CustomCursor";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { ArrowUpIcon } from "lucide-react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const [scrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Listen to scroll and show the scroll-to-top button when user scrolls down
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollVisible(true);
      } else {
        setScrollVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener("scroll", handleScroll); // Cleanup scroll event listener
    };
  }, []);

  // Scroll to the top using Lenis
  const scrollToTop = () => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 2,
      infinite: false,
    });

    lenis.scrollTo(0, {
      duration: 1, // Smooth scroll duration (adjust as needed)
      easing: (t) => t * (2 - t), // Easing function (adjust as needed)
    });
  };

  return (
    <CursorProvider>
      <Layout>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={pathname} />
          {scrollVisible && (
            <button
              onClick={scrollToTop}
              data-cursor="pointer"
              className="fixed z-[1000] bottom-6 right-6 bg-accent border border-accent text-background p-4 rounded-full shadow-lg hover:bg-background hover:text-accent transition-colors"
            >
              <ArrowUpIcon className="h-6 w-6" />
            </button>
          )}
        </AnimatePresence>
      </Layout>
    </CursorProvider>
  );
}
