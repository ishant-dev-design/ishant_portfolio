import { GetStaticProps, GetStaticPaths } from "next";
import { blogs } from "@/data/blogs";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowLeftCircle, Play, Pause } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Blog {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogs.map((blog) => ({ params: { slug: blog.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogData = blogs.find((blog) => blog.slug === params?.slug);
  if (!blogData) return { notFound: true };
  return { props: { blog: blogData } };
};

const BlogPage = ({ blog }: { blog: Blog }) => {
  const router = useRouter();
  const blogRef = useRef<HTMLDivElement>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [progressWidth, setProgressWidth] = useState("0%");
  const [pillPos, setPillPos] = useState({ top: 0, left: 0, width: 0, height: 0 });

  const sentenceMapRef = useRef<{ el: HTMLElement; sentence: string }[]>([]);
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);

  const splitIntoSentences = (text: string): string[] => {
    return text.match(/[^.!?]+[.!?]+[\])'"`’”]*|[^.!?]+$/g) || [];
  };

  const getVoice = (): Promise<SpeechSynthesisVoice | null> => {
    return new Promise((resolve) => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        resolve(
          voices.find((v) => v.name.includes("Google US English")) ||
          voices.find((v) => v.lang.startsWith("en")) ||
          voices[0] || null
        );
      } else {
        window.speechSynthesis.onvoiceschanged = () => {
          const updatedVoices = window.speechSynthesis.getVoices();
          resolve(
            updatedVoices.find((v) => v.name.includes("Google US English")) ||
            updatedVoices.find((v) => v.lang.startsWith("en")) ||
            updatedVoices[0] || null
          );
        };
      }
    });
  };

  const prepareSentences = () => {
    sentenceMapRef.current = [];
    const elements = blogRef.current?.querySelectorAll("h2, h3, h4, h5, h6, p, li, td, th") || [];

    elements.forEach((el) => {
      const sentences = splitIntoSentences(el.textContent || "");
      sentenceMapRef.current.push(...sentences.map(sentence => ({ el: el as HTMLElement, sentence: sentence.trim() })));
    });
  };

  const highlightNextWord = async (el: HTMLElement, sentence: string) => {
  const words = sentence.match(/\S+/g) || [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  let currentNode: Text | null = null;
  let nodeText = "";
  let nodeOffset = 0;

  const getNextTextNode = () => {
    while (walker.nextNode()) {
      const textNode = walker.currentNode as Text;
      if (textNode.textContent?.trim()) return textNode;
    }
    return null;
  };

  currentNode = getNextTextNode();
  nodeText = currentNode?.textContent ?? "";

  for (const word of words) {
    while (currentNode && nodeOffset >= nodeText.length) {
      currentNode = getNextTextNode();
      nodeOffset = 0;
      nodeText = currentNode?.textContent ?? "";
    }

    if (!currentNode) break;

    const wordRegex = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`);
    const match = wordRegex.exec(nodeText.slice(nodeOffset));

    if (match) {
      const start = nodeOffset + match.index;
      const end = start + word.length;

      const range = document.createRange();
      range.setStart(currentNode, start);
      range.setEnd(currentNode, end);

      const rect = range.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setPillPos({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
          height: rect.height,
        });
      }

      nodeOffset = end;
    }

    await new Promise((resolve) => setTimeout(resolve, 200));
  }
};

const speakSentence = async (index: number) => {
    const map = sentenceMapRef.current;
    if (index >= map.length) {
      setIsSpeaking(false);
      setProgressWidth("100%");
      return;
    }

    const { el, sentence } = map[index];
    const utterance = new SpeechSynthesisUtterance(sentence);
    utteranceRef.current = utterance;
    const voice = await getVoice();
    if (voice) utterance.voice = voice;

    utterance.onstart = () => {
      highlightNextWord(el, sentence);
    };

    utterance.onend = () => {
      const nextIndex = index + 1;
      setSentenceIndex(nextIndex);
      speakSentence(nextIndex);
    };

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      if (animationTimerRef.current) clearInterval(animationTimerRef.current);
      return;
    }

    if (sentenceMapRef.current.length === 0) {
      prepareSentences();
    }

    const estimatedTotalTime = Math.max(blogRef.current?.textContent?.split(" ").length ?? 500, 500) * 0.4;
    const startTime = Date.now();

    animationTimerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percent = Math.min((elapsed / (estimatedTotalTime * 1000)) * 100, 100);
      setProgressWidth(`${percent.toFixed(2)}%`);
      if (percent >= 100) clearInterval(animationTimerRef.current!);
    }, 100);

    speakSentence(sentenceIndex);
  };

  useEffect(() => {
    const stopSpeech = () => {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setSentenceIndex(0);
      setProgressWidth("0%");
      if (animationTimerRef.current) clearInterval(animationTimerRef.current);
    };

    window.addEventListener("beforeunload", stopSpeech);
    router.events.on("routeChangeStart", stopSpeech);

    return () => {
      window.removeEventListener("beforeunload", stopSpeech);
      router.events.off("routeChangeStart", stopSpeech);
    };
  }, [router.events]);

  useEffect(() => {
    const extracted: { id: string; text: string }[] = [];
    document.querySelectorAll("[data-section='true']").forEach((el, i) => {
      const id = el.id || `section-${i}`;
      el.id = id;
      extracted.push({ id, text: el.textContent || "" });
    });
    setHeadings(extracted);
  }, []);

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto relative">
      <motion.div className="flex flex-col pt-16 md:pt-24 pb-12 w-full">
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href="/blogs"
            className="bg-accent text-background pl-2 pr-4 py-2 rounded-full flex items-center gap-4 border border-accent hover:bg-background hover:text-accent"
          >
            <ArrowLeftCircle />
            <span className="text-sm">Back to Blog Home</span>
          </Link>
          <button
            onClick={toggleSpeech}
            className="bg-accent text-background px-4 py-2 rounded-full flex items-center gap-4 border border-accent hover:bg-background hover:text-accent"
          >
            {isSpeaking ? <Pause size={20} /> : <Play size={20} />}
            {isSpeaking ? "Pause Reading" : "Read Aloud"}
          </button>
        </div>

        <AnimatedHeading className="text-3xl md:text-5xl lg:text-8xl text-center mt-4">
          {blog.title}
        </AnimatedHeading>
        <p className="text-accent mt-2">{blog.date}</p>
      </motion.div>

      <div className="lg:grid lg:grid-cols-[1fr_3fr] gap-8">
        <aside className="hidden lg:block sticky top-20 py-2 self-start">
          <h3 className="text-xl font-semibold mb-4">CONTENTS</h3>
          <ul className="space-y-3 text-foreground">
            {headings.map((h, i) => (
              <li key={i}>
                <a
                  href={`#${h.id}`}
                  onClick={(e) => handleScroll(e, h.id)}
                  className="hover:text-accent"
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <div
          ref={blogRef}
          className="prose blog_box relative"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      <div
        className="fixed bg-accent/30 rounded-md pointer-events-none z-[9999] transition-all duration-200 ease-in-out"
        style={{
          top: pillPos.top,
          left: pillPos.left,
          width: pillPos.width,
          height: pillPos.height,
        }}
      />
    </div>
  );
};

export default BlogPage;
