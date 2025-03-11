import Link from "next/link";

interface BlogCardProps {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
}

const BlogCard = ({ title, slug, date, excerpt }: BlogCardProps) => {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-500">{date}</p>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{excerpt}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
