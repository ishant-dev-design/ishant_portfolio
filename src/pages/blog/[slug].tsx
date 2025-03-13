import { GetStaticProps, GetStaticPaths } from "next";
import { blogs } from "@/data/blogs";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  }, []);

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

  return (
    <div className="max-w-7xl mx-auto">
      {/* Blog Title */}
      <motion.div className="flex flex-col pt-16 md:pt-24 pb-12 justify-center w-full">
        <AnimatedHeading className="text-3xl md:text-5xl lg:text-8xl text-foreground text-center">
          {blog.title}
        </AnimatedHeading>{" "}
        <p className="text-accent mt-2">{blog.date}</p>
      </motion.div>

      {/* Main Layout (Sidebar + Blog Content) */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar (Dynamic TOC) */}
        <aside className="w-full lg:w-1/4 lg:sticky top-20 h-fit rounded-lg py-2">
          <h3 className="text-xl font-semibold mb-4">CONTENTS</h3>{" "}
          {/* Changed h2 to h3 */}
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
