import fs from "fs";
import path from "path";

const BLOGS_DIR = path.join(process.cwd(), "public/blogs");

const getBlogContent = (slug: string) => {
  try {
    return fs.readFileSync(path.join(BLOGS_DIR, `${slug}.html`), "utf-8");
  } catch (error) {
    console.error(`Error reading blog ${slug}:`, error);
    return "";
  }
};
export const blogs = [
  {
    title: "The Art of Microinteractions in UX Design",
    slug: "microinteractions-ux-design",
    date: "March 12, 2025",
    excerpt:
      "Mastering microinteractions to elevate user experience with subtle, yet effective design elements.",
    content: getBlogContent("microinteractions"),
  },
  {
    title: "Dark Mode: Designing for Accessibility and Aesthetics",
    slug: "dark-mode-accessibility-aesthetics",
    date: "March 12, 2025",
    excerpt:
      "Learn how to design dark mode interfaces that are both accessible and visually appealing, with tips for color schemes and usability.",
    content: getBlogContent("dark-mode"),
  },
  {
    title: "Web Animation Best Practices for UI Design",
    slug: "web-animation-ui-design",
    date: "March 12, 2025",
    excerpt:
      "How to leverage web animations to enhance user experience without overwhelming the user interface.",
    content: getBlogContent("web-animations"),
  },
  {
    title: "Designing Responsive Web Experiences with Flexbox and Grid",
    slug: "responsive-web-design-flexbox-grid",
    date: "March 12, 2025",
    excerpt:
      "Master responsive design using Flexbox and CSS Grid to create layouts that adapt seamlessly to different screen sizes.",
    content: getBlogContent("responsive-web"),
  },
  {
    title: "The Science of Color Theory in UI/UX Design",
    slug: "color-theory-ui-ux-design",
    date: "March 12, 2025",
    excerpt:
      "Explore the principles of color theory in UI/UX design and learn how color impacts user perception, emotions, and interactions.",
    content: getBlogContent("color-theory"),
  },
  {
    title: "Typography in Web Design: Choosing the Right Fonts",
    slug: "typography-web-design",
    date: "March 12, 2025",
    excerpt:
      "Learn the principles of typography in web design, from readability and contrast to font pairing techniques.",
    content: getBlogContent("typography-web"),
  },
  {
    title: "Gamification in UX: Enhancing User Engagement",
    slug: "gamification-ux-user-engagement",
    date: "March 12, 2025",
    excerpt:
      "Learn how gamification elements like rewards, progress tracking, and challenges boost user engagement and retention.",
    content: getBlogContent("gamification"),
  },
];

export default blogs;
