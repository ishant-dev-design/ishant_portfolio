import BlogCard from "@/components/ui/Blogs/BlogCard";
import { blogs } from "@/data/blogs"; // Importing directly from blogs.ts

export async function getStaticProps() {
  return { props: { blogs } };
}

const Blogs = ({ blogs }: { blogs: any[] }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center">Blog</h1>
      <p className="text-center text-gray-500 mt-2">
        Latest articles on web development and design.
      </p>
      <div className="mt-6 space-y-6">
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
