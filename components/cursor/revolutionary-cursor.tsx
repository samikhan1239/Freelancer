"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";

// Define interface for mouse position
interface Position {
  x: number;
  y: number;
}

// Define cursor variants enum
enum CursorVariant {
  Default = "default",
  Hover = "hover",
  Pointer = "pointer",
  Magnetic = "magnetic",
  View = "view",
  Play = "play",
  Grab = "grab",
  Text = "text",
}

export const RevolutionaryCursor = () => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>(CursorVariant.Default);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<Position[]>([]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Hide native cursor
    document.body.classList.add("cursor-none");

    const updateMousePosition = (e: MouseEvent | TouchEvent) => {
      const newPosition = {
        x: "clientX" in e ? e.clientX : e.touches[0]?.clientX ?? mousePosition.x,
        y: "clientY" in e ? e.clientY : e.touches[0]?.clientY ?? mousePosition.y,
      };
      setMousePosition(newPosition);
      setTrail((prev) => [newPosition, ...prev.slice(0, 5)]); // Reduced trail length for performance
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: Event) => {
      const target = e.target as Element;
      if (target.classList.contains("cursor-magnetic")) {
        setCursorVariant(CursorVariant.Magnetic);
      } else if (target.classList.contains("cursor-view")) {
        setCursorVariant(CursorVariant.View);
      } else if (target.classList.contains("cursor-play")) {
        setCursorVariant(CursorVariant.Play);
      } else if (target.classList.contains("cursor-grab")) {
        setCursorVariant(CursorVariant.Grab);
      } else if (target.classList.contains("cursor-text")) {
        setCursorVariant(CursorVariant.Text);
      } else if (target.tagName === "BUTTON" || target.tagName === "A") {
        setCursorVariant(CursorVariant.Pointer);
      } else {
        setCursorVariant(CursorVariant.Hover);
      }
    };

    const handleMouseLeave = () => setCursorVariant(CursorVariant.Default);

    // Support both mouse and touch events
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("touchmove", updateMousePosition, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchstart", handleMouseDown, { passive: true });
    window.addEventListener("touchend", handleMouseUp, { passive: true });

    const interactiveElements = document.querySelectorAll(
      "button, a, .cursor-magnetic, .cursor-view, .cursor-play, .cursor-grab, .cursor-text, input, textarea",
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
      el.addEventListener("touchstart", handleMouseEnter, { passive: true });
      el.addEventListener("touchend", handleMouseLeave, { passive: true });
    });

    // Observe DOM changes for dynamic elements
    const observer = new MutationObserver(() => {
      const newInteractiveElements = document.querySelectorAll(
        "button, a, .cursor-magnetic, .cursor-view, .cursor-play, .cursor-grab, .cursor-text, input, textarea",
      );
      newInteractiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.removeEventListener("touchstart", handleMouseEnter);
        el.removeEventListener("touchend", handleMouseLeave);
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
        el.addEventListener("touchstart", handleMouseEnter, { passive: true });
        el.addEventListener("touchend", handleMouseLeave, { passive: true });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.classList.remove("cursor-none");
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("touchmove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchstart", handleMouseDown);
      window.removeEventListener("touchend", handleMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.removeEventListener("touchstart", handleMouseEnter);
        el.removeEventListener("touchend", handleMouseLeave);
      });
      observer.disconnect();
    };
  }, [mousePosition]);

  const cursorVariants = {
    [CursorVariant.Default]: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      scale: isClicking ? 0.8 : 1,
      backgroundColor: "#06b6d4",
      borderRadius: "50%",
      width: "12px",
      height: "12px",
    },
    [CursorVariant.Hover]: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: isClicking ? 1.5 : 2,
      backgroundColor: "transparent",
      border: "2px solid #8b5cf6",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
    },
    [CursorVariant.Pointer]: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: isClicking ? 0.8 : 1.2,
      backgroundColor: "transparent",
      border: "3px solid #10b981",
      borderRadius: "50%",
      width: "32px",
      height: "32px",
    },
    [CursorVariant.Magnetic]: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      scale: isClicking ? 2 : 2.5,
      backgroundColor: "rgba(239, 68, 68, 0.2)",
      border: "2px solid #ef4444",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
    },
    [CursorVariant.View]: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      scale: 1,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      border: "2px solid #06b6d4",
      borderRadius: "50%",
      width: "60px",
      height: "60px",
    },
    [CursorVariant.Play]: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: isClicking ? 0.9 : 1,
      backgroundColor: "rgba(34, 197, 94, 0.9)",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
    },
    [CursorVariant.Grab]: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      scale: isClicking ? 1.5 : 1,
      backgroundColor: "rgba(251, 146, 60, 0.8)",
      borderRadius: "8px",
      width: "30px",
      height: "30px",
    },
    [CursorVariant.Text]: {
      x: mousePosition.x - 1,
      y: mousePosition.y - 12,
      scale: 1,
      backgroundColor: "#06b6d4",
      borderRadius: "2px",
      width: "2px",
      height: "24px",
    },
  };

  return (
    <>
      {/* Trail Effect */}
      {!shouldReduceMotion &&
        trail.map((position, index) => (
          <motion.div
            key={index}
            className="fixed top-0 left-0 w-2 h-2 bg-cyan-400/30 rounded-full pointer-events-none z-40"
            animate={{
              x: position.x - 1, // Adjusted for centering
              y: position.y - 1,
              scale: [1, 0],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 0.5, // Reduced duration for performance
              ease: "easeOut",
            }}
          />
        ))}

      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        animate={cursorVariants[cursorVariant]}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        {cursorVariant === CursorVariant.View && (
          <div className="w-full h-full flex items-center justify-center text-cyan-400 text-xs font-bold">VIEW</div>
        )}
        {cursorVariant === CursorVariant.Play && (
          <div className="w-full h-full flex items-center justify-center text-white">
            <Play className="w-4 h-4" />
          </div>
        )}
        {cursorVariant === CursorVariant.Grab && (
          <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold">DRAG</div>
        )}
      </motion.div>

      {/* Magnetic Field Effect */}
      {cursorVariant === CursorVariant.Magnetic && !shouldReduceMotion && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-40"
          animate={{
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            scale: [1, 1.2, 1], // Reduced scale for subtler effect
          }}
          transition={{
            scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="w-20 h-20 border border-red-400/30 rounded-full" />
        </motion.div>
      )}
    </>
  );
};