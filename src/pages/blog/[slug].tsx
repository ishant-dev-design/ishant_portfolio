import { GetStaticProps, GetStaticPaths } from "next";
import { blogs } from "@/data/blogs"; // Import the blogs directly from the blogs.ts file

interface Blog {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths based on the slug from the blogs array
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Find the specific blog based on the slug
  const blogData = blogs.find((blog) => blog.slug === params?.slug);

  if (!blogData) {
    return { notFound: true };
  }

  return { props: { blog: blogData } };
};

const BlogPage = ({ blog }: { blog: Blog }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="text-gray-500 mt-2">{blog.date}</p>
      <div
        className="mt-4 prose"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogPage;
