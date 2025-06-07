// src/pages/_app.tsx
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import CursorProvider from "@/components/layout/CustomCursor";
import { useEffect } from "react";
import Lenis from "lenis";

// 🔥 Create global accessor
let globalLenis: Lenis | null = null;
export const getLenis = () => globalLenis;

export default function MyApp({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 2,
      infinite: false,
    });

    // 🔐 Save it globally
    globalLenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      globalLenis = null;
    };
  }, []);

  return (
    <CursorProvider>
      <Layout>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={pathname} />
        </AnimatePresence>
      </Layout>
    </CursorProvider>
  );
}
