import Link from "next/link";

interface BlogCardProps {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
}

const BlogCard = ({ title, slug, date, excerpt }: BlogCardProps) => {
  return (
    <Link href={`/blog/${slug}`} className="block" data-cursor="pointer">
      <div
        className={`flex flex-col md:flex-row gap-6 p-6 rounded-3xl bg-backgroundblur border-borderclr hover:bg-accentblur backdrop-blur-sm border transition h-full`}
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
