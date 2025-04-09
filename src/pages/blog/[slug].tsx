import { GetStaticProps, GetStaticPaths } from "next";
import { blogs } from "@/data/blogs";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter from Next.js

interface Blog {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogData = blogs.find((blog) => blog.slug === params?.slug);
  if (!blogData) return { notFound: true };

  return { props: { blog: blogData } };
};

const BlogPage = ({ blog }: { blog: Blog }) => {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const router = useRouter(); // Next.js router hook

  // Get a more natural voice
  const getNaturalVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    const naturalVoice =
      voices.find((voice) => voice.name.includes("Google")) || voices[0];
    return naturalVoice;
  };

  useEffect(() => {
    const extractedHeadings: { id: string; text: string }[] = [];
    document
      .querySelectorAll("[data-section='true']")
      .forEach((section, index) => {
        const id = section.id || `section-${index}`;
        section.id = id;
        extractedHeadings.push({ id, text: section.textContent || "" });
      });

    setHeadings(extractedHeadings);

    // Stop speech when page is refreshed or navigated away
    const handleBeforeUnload = () => {
      window.speechSynthesis.cancel(); // Stop speech when the page is about to unload
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Stop speech when the user navigates to another page
    const handleRouteChange = () => {
      window.speechSynthesis.cancel(); // Stop speech on route change
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  const handleScroll = (event: React.MouseEvent, id: string) => {
    event.preventDefault();

    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Adjust for fixed navbar if needed
        behavior: "smooth",
      });
    }
  };

  // Function to toggle speech and read only the content from the blog
  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      localStorage.setItem("isSpeaking", "false");
    } else {
      const blogContent = document.querySelector(".prose.blog_box.flex-1");

      if (blogContent) {
        const textContent = (blogContent as HTMLElement).innerText;

        const utterance = new SpeechSynthesisUtterance(textContent);
        const voice = getNaturalVoice(); // Get natural voice
        utterance.voice = voice;

        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;

        window.speechSynthesis.speak(utterance);
      }
      localStorage.setItem("isSpeaking", "true");
    }

    setIsSpeaking(!isSpeaking);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Blog Title */}
      <motion.div className="flex flex-col pt-16 md:pt-24 pb-12 justify-center w-full">
        <div className="w-fit flex flex-col md:flex-row mt-2 gap-4">
          <Link
            data-cursor="pointer"
            href={"/blogs"}
            className="bg-accent text-background pl-2 pr-4 py-2 rounded-full flex items-center justify-center w-fit gap-4 border border-accent hover:bg-background hover:text-accent transition-colors"
          >
            <ArrowLeftCircle />
            <span className="text-sm">Back to Blog Home</span>
          </Link>
          {/* Text to Speech */}
          <button
            data-cursor="pointer"
            onClick={toggleSpeech}
            className="bg-accent text-background px-4 py-2 rounded-full flex items-center justify-center w-fit gap-4 border border-accent hover:bg-background hover:text-accent transition-colors"
          >
            {isSpeaking ? "Stop Reading" : "Read Aloud"}
          </button>
        </div>
        <AnimatedHeading className="text-3xl md:text-5xl lg:text-8xl text-foreground text-center mt-4">
          {blog.title}
        </AnimatedHeading>
        <p className="text-accent mt-2">{blog.date}</p>
      </motion.div>

      {/* Main Layout (Sidebar + Blog Content) */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar (Dynamic TOC) */}
        <aside className="w-full lg:w-1/4 lg:sticky top-20 h-fit rounded-lg py-2">
          <h3 className="text-xl font-semibold mb-4">CONTENTS</h3>
          <ul className="space-y-3 text-foreground">
            {headings.map((heading, index) => (
              <li key={index}>
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleScroll(e, heading.id)}
                  className="hover:text-accent"
                  data-cursor="pointer"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Blog Content */}

        <div
          className="prose blog_box flex-1"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
};

export default BlogPage;
