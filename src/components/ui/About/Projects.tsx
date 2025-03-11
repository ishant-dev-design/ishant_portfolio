import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const images: string[] = [
  "/images/webpages/1.png",
  "/images/webpages/2.png",
  "/images/webpages/3.png",
  "/images/webpages/4.png",
];

export default function Projects() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  const height = typeof window !== "undefined" ? window.innerHeight : 800;

  // Transform values for parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 1.1]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.2]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 0.8]);

  // Track screen width for conditional rendering
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // Mobile: width < 640px
    };

    checkScreenSize(); // Check on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <main className="relative w-full px-4 sm:px-2">
      {/* Title */}
      <div className="relative md:absolute w-full z-0 flex justify-center items-center text-center  md:text-8xl text-3xl font-bold">
        My Projects
      </div>
      {/* Desktop View */}
      {!isMobile ? (
        <div
          ref={galleryRef}
          className="h-[175vh] p-8 sm:p-4 z-10 pointer-events-none"
        >
          <div className="relative -top-[12.5vh] h-[200vh] flex gap-8">
            <Column images={[images[0]]} y={y1} />
            <Column images={[images[1]]} y={y2} />
            <Column images={[images[2]]} y={y3} />
            <Column images={[images[3]]} y={y4} />
          </div>
        </div>
      ) : (
        // Mobile View - Show Something Different
        <div className="grid grid-cols-2 gap-4 p-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative h-48 w-full rounded-lg overflow-hidden"
            >
              <Image
                src={src}
                alt="Project Image"
                fill
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      )}
      {/* Call to Action */}
      <div className="relative md:absolute w-full z-0 bottom-0 flex flex-col justify-center items-center text-center md:text-8xl text-3xl font-bold">
        Want a page like this?
        <Link
          href="/contact"
          className="w-fit flex items-center justify-center text-accent hover:underline  md:text-8xl text-3xl mt-4"
        >
          Connect Now.
        </Link>
      </div>
    </main>
  );
}

interface ColumnProps {
  images: string[];
  y: any;
}

const Column: React.FC<ColumnProps> = ({ images, y }) => {
  return (
    <motion.div
      style={{ y }}
      className="relative h-full sm:h-auto w-1/4 sm:w-full flex flex-col gap-8 sm:gap-4"
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="relative h-1/3 w-full rounded-lg overflow-hidden"
        >
          <Image
            src={src}
            alt="Project Image"
            fill
            className="object-cover object-top"
          />
        </div>
      ))}
    </motion.div>
  );
};
