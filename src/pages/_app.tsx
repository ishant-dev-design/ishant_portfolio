// src/pages/_app.tsx
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function MyApp({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={pathname} />
      </AnimatePresence>
    </Layout>
  );
}
