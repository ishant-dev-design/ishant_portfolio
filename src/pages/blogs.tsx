import AnimatedHeading from "@/components/ui/AnimatedHeading";
import BlogCard from "@/components/ui/Blogs/BlogCard";
import { blogs } from "@/data/blogs";
import { motion } from "framer-motion";

export async function getStaticProps() {
  return { props: { blogs } };
}

interface Blog {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
}

const Blogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <motion.div className="flex pt-16 md:pt-24 pb-12 justify-center w-full">
        <AnimatedHeading className="text-3xl md:text-5xl lg:text-8xl text-foreground text-center">
          A Little Reading..
        </AnimatedHeading>
      </motion.div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 select-none">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.slug}
            title={blog.title}
            slug={blog.slug}
            date={blog.date}
            excerpt={blog.excerpt}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
