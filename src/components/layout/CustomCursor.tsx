import {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

const hideNativeCursor = () => {
  if (!("ontouchstart" in window)) {
    document.body.style.cursor = "none";
  }
};

const CursorContext = createContext({
  setHoverElement: () => {},
});

const cursorStyles = {
  default: "bg-white rounded-full",
  text: "bg-white rounded-md !w-1 ml-2",
  pointer: "bg-white rounded-full !h-8 !w-8 -ml-2 -mt-2",
  spotify: "bg-transparent",
};

type CursorType = keyof typeof cursorStyles;

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorDotClassName] = useState("");
  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [explode, setExplode] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window) {
      setIsTouchDevice(true);
    } else {
      hideNativeCursor();
    }
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setExplode(false);

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

    const handleMouseLeave = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        setExplode(true);
      }
    };
    const handleMouseEnter = () => setExplode(false);

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) {
    return (
      <CursorContext.Provider value={{ setHoverElement: () => {} }}>
        {children}
      </CursorContext.Provider>
    );
  }

  return (
    <CursorContext.Provider value={{ setHoverElement: () => {} }}>
      {children}
      <AnimatePresence>
        {!explode ? (
          <motion.div
            className={`fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference 
  ${cursorStyles[cursorType]} ${cursorDotClassName}`}
            layout
            animate={{
              x: position.x - 8,
              y: position.y - 8,
              width: 16,
              height: 16,
              opacity: 1,
            }}
            transition={{
              x: { duration: 0, ease: "linear" },
              y: { duration: 0, ease: "linear" },
              width: { duration: 0.3, ease: "easeOut" },
              height: { duration: 0.3, ease: "easeOut" },
              opacity: { duration: 0.3, ease: "easeOut" },
            }}
          />
        ) : (
          <motion.div
            key="explosion"
            className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference bg-white rounded-full"
            initial={{
              x: position.x - 8,
              y: position.y - 8,
              width: 16,
              height: 16,
              opacity: 1,
            }}
            animate={{
              x: position.x - 50,
              y: position.y - 50,
              width: 100,
              height: 100,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "circInOut",
            }}
          />
        )}
      </AnimatePresence>
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
export default CursorProvider;
