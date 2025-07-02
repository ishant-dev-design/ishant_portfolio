// src/pages/_app.tsx
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import CursorProvider from "@/components/layout/CustomCursor";
import { useEffect } from "react";
import Lenis from "lenis";
import Head from "next/head";

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
    <>
      <Head>
        <title>Ishant's Portfolio</title>
        <meta
          name="description"
          content="Explore Ishant's personal portfolio featuring projects, skills, and professional experience in web development and design."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CursorProvider>
        <Layout>
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={pathname} />
          </AnimatePresence>
        </Layout>
      </CursorProvider>
    </>
  );
}
