interface BlogContentProps {
  title: string;
  date: string;
  content: string;
}

const BlogContent = ({ title, date, content }: BlogContentProps) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-gray-500 mt-2">{date}</p>
      <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <div
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default BlogContent;
