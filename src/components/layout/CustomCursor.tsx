import {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRightSquare } from "lucide-react";

// Hide the native cursor globally
const hideNativeCursor = () => {
  if (!("ontouchstart" in window)) {
    document.body.style.cursor = "none";
  }
};

// Cursor Context
const CursorContext = createContext({
  setHoverElement: (
    el: HTMLElement | null,
    options?: { customContent?: ReactNode; cursordotClassName?: string }
  ) => {},
});

// Cursor Styles
const cursorStyles = {
  default: "bg-white rounded-full",
  text: "bg-white rounded-md !w-1 ml-2",
  pointer: "bg-white rounded-full !h-8 !w-8 -ml-2 -mt-2",
  spotify: "bg-transparent",
};

type CursorType = keyof typeof cursorStyles;

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [customContent, setCustomContent] = useState<ReactNode | null>(null);
  const [cursorDotClassName, setCursorDotClassName] = useState("");
  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window) {
      setIsTouchDevice(true);
    } else {
      hideNativeCursor();
    }
  }, []);

  useEffect(() => {
    setCustomContent(cursorStyles[cursorType] ? null : null);
  }, [cursorType]);

  useEffect(() => {
    if (isTouchDevice) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Find the closest parent with data-cursor
      let element = e.target as HTMLElement | null;
      while (element && !element.hasAttribute("data-cursor")) {
        element = element.parentElement;
      }

      if (element) {
        const cursorAttr = element.getAttribute("data-cursor") as CursorType;
        if (cursorAttr && cursorStyles[cursorAttr]) {
          setCursorType(cursorAttr);
        } else {
          setCursorType("default");
        }
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, [isTouchDevice]);

  if (isTouchDevice) {
    return (
      <CursorContext.Provider value={{ setHoverElement: () => {} }}>
        {children}
      </CursorContext.Provider>
    );
  }

  return (
    <CursorContext.Provider
      value={{
        setHoverElement: (el, options) => {
          if (options) {
            setCustomContent(options.customContent || null);
            setCursorDotClassName(options.cursordotClassName || "");
          }
        },
      }}
    >
      {children}
      {/* Inner Dot */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference 
  ${cursorStyles[cursorType]} ${cursorDotClassName}`}
        layout
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          width: 16,
          height: 16,
        }}
        transition={{
          x: { duration: 0, ease: "linear" }, // Instant update
          y: { duration: 0, ease: "linear" }, // Instant update
          width: { duration: 0.3, ease: "easeOut" },
          height: { duration: 0.3, ease: "easeOut" },
          padding: { duration: 0.3, ease: "easeOut" },
          backgroundColor: { duration: 0.3, ease: "easeOut" },
          margin: { duration: 0.3, ease: "easeOut" },
          opacity: { duration: 0.2, ease: "easeOut" },
          borderRadius: { duration: 0.2, ease: "easeOut" },
        }}
      >
        <AnimatePresence mode="wait">
          {customContent && (
            <motion.div
              key={cursorType}
              className="absolute flex items-center justify-center"
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {customContent}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
export default CursorProvider;
