// src/data/blogs.ts
export const blogs = [
    {
      title: "Getting Started with Next.js",
      slug: "getting-started-nextjs",
      date: "March 12, 2025",
      excerpt:
        "A beginner-friendly guide to setting up and using Next.js for modern web development.",
      content: `
          <p><strong>Next.js</strong> is a React framework that enables server-side rendering and static site generation. 
          It's an excellent choice for building fast and SEO-friendly web applications.</p>
  
          <h2>Why Use Next.js?</h2>
          <p>Next.js offers several powerful features for modern web development, including:</p>
          <ul>
            <li><strong>Automatic Static Optimization:</strong> Next.js automatically optimizes your app for better performance.</li>
            <li><strong>API Routes:</strong> Easily create serverless functions within your application.</li>
            <li><strong>Built-in CSS and TypeScript Support:</strong> Full support for styling and TypeScript integration.</li>
          </ul>
          
          <h2>How to Get Started</h2>
          <p>To create a new Next.js app, simply run:</p>
          <pre><code>npx create-next-app my-app</code></pre>
          <p>Then, navigate to the project folder and start the development server:</p>
          <pre><code>cd my-app && npm run dev</code></pre>
  
          <h3>Folder Structure</h3>
          <p>Here’s the default structure of a Next.js application:</p>
          <pre><code>pages/ - Contains your application’s routes
  components/ - Reusable UI components
  public/ - Static files
  styles/ - Global CSS styles</code></pre>
      `,
    },
    {
      title: "Advanced CSS Techniques for Modern Web Design",
      slug: "advanced-css-techniques",
      date: "March 15, 2025",
      excerpt:
        "Exploring advanced CSS techniques like Grid, Flexbox, and Custom Properties to design stunning UIs.",
      content: `
          <p>In the world of web design, CSS has evolved significantly. Modern CSS allows us to create layouts and designs that were previously difficult or impossible.</p>
  
          <h2>CSS Grid Layout</h2>
          <p><strong>CSS Grid</strong> is a powerful layout system that enables developers to create complex, two-dimensional layouts with ease.</p>
          <p>Here’s an example of a simple grid layout:</p>
          <pre><code>div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }</code></pre>
  
          <h2>Flexbox for Responsive Design</h2>
          <p><strong>Flexbox</strong> is perfect for creating one-dimensional layouts. It allows for flexibility and responsive design by adjusting the layout to fit available space.</p>
          <p>Example usage:</p>
          <pre><code>div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }</code></pre>
  
          <h2>Custom Properties (CSS Variables)</h2>
          <p><strong>CSS Variables</strong> let you define reusable values in your stylesheets, making it easier to maintain and change themes.</p>
          <pre><code>:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
  }
  
  button {
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }</code></pre>
  
          <h3>Responsive Design</h3>
          <p>With the help of media queries, Flexbox, and Grid, CSS makes it easier than ever to create responsive designs that work on any screen size.</p>
      `,
    },
    {
      title: "Optimizing React Performance for Large Applications",
      slug: "optimizing-react-performance",
      date: "March 18, 2025",
      excerpt:
        "How to optimize the performance of your React applications for better user experience and faster load times.",
      content: `
          <p><strong>React performance optimization</strong> is essential for large-scale applications to ensure smooth user interactions and quick loading times. Let’s dive into several strategies to improve performance.</p>
  
          <h2>1. Code Splitting</h2>
          <p>Code splitting is a technique that splits your app's code into smaller bundles that are loaded only when needed. React supports code splitting through dynamic imports and React.lazy.</p>
          <pre><code>const MyComponent = React.lazy(() => import('./MyComponent'));</code></pre>
  
          <h2>2. Memoization</h2>
          <p><strong>Memoization</strong> is a performance optimization technique where you cache the result of expensive function calls and reuse the result when the same inputs occur.</p>
          <pre><code>const MyComponent = React.memo(function MyComponent(props) {
    // Component code
  });</code></pre>
  
          <h2>3. Virtualization</h2>
          <p><strong>Virtualization</strong> helps you render only the visible portion of a list, improving performance when displaying large sets of data. Libraries like React Window and React Virtualized help achieve this.</p>
  
          <h2>4. Avoid Inline Functions in JSX</h2>
          <p>Inline functions are created on each render, causing unnecessary re-renders. Instead, define functions outside of the JSX to prevent this.</p>
          <pre><code>const handleClick = () => { /* Some logic */ };
          return <button onClick={handleClick}>Click Me</button></code></pre>
  
          <h3>Conclusion</h3>
          <p>By implementing these strategies, you can significantly improve the performance of your React applications, providing a faster and smoother user experience.</p>
      `,
    },
    {
      title: "Mastering TypeScript in React",
      slug: "mastering-typescript-react",
      date: "March 20, 2025",
      excerpt:
        "Dive deep into how TypeScript enhances your React development experience with type safety and better tooling.",
      content: `
          <p><strong>TypeScript</strong> is a superset of JavaScript that adds optional static typing. It is especially useful in React projects to catch errors early and provide better tooling support.</p>
  
          <h2>Why TypeScript for React?</h2>
          <p>TypeScript improves your development workflow by offering the following benefits:</p>
          <ul>
            <li><strong>Type Safety:</strong> Helps you catch errors early in the development process.</li>
            <li><strong>Improved IDE Support:</strong> Enhanced autocompletion and type inference with supported IDEs.</li>
            <li><strong>Scalability:</strong> TypeScript makes it easier to scale large applications by ensuring consistency and reducing bugs.</li>
          </ul>
  
          <h2>Basic TypeScript Types in React</h2>
          <p>Let’s explore the basic types you’ll encounter when using TypeScript with React:</p>
          <pre><code>interface ButtonProps {
    label: string;
    onClick: () => void;
  }
  
  const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return <button onClick={onClick}>{label}</button>;
  }</code></pre>
  
          <h2>TypeScript and React Hooks</h2>
          <p>TypeScript works seamlessly with React hooks. For example, when using the 'useState' hook:</p>
          <pre><code>const [count, setCount] = useState<number>(0);</code></pre>
  
          <h3>Advanced TypeScript Features</h3>
          <p>TypeScript also supports advanced features like generics, union types, and intersection types, which can be useful for building flexible and reusable components.</p>
      `,
    },
  ];
  
  export default blogs;
  