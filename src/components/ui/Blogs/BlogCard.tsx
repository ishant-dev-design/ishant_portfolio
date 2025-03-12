import { useTheme } from "next-themes";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
}

const BlogCard = ({ title, slug, date, excerpt }: BlogCardProps) => {
  const { theme } = useTheme();

  return (
    <Link href={`/blog/${slug}`} className="block">
      <div
        className={`flex flex-col md:flex-row gap-6 p-6 rounded-3xl backdrop-blur-sm border transition h-full ${
          theme === "light"
            ? "bg-[#f5f3f066] border-gray-300 hover:bg-[#758cff11]"
            : "bg-[#10101066] border-white/20 hover:bg-[#ccff0011]"
        }`}
      >
        <div className="flex flex-col w-full justify-between gap-2">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-gray-500">{date}</p>
        </div>
        <div className="flex flex-col w-full">
          <p className="text-accent">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
