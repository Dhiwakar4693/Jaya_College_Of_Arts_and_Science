"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const mouseRef = useRef({ x: 0, y: 0 });

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const dotX = useSpring(0, springConfig);
  const dotY = useSpring(0, springConfig);
  const ringX = useSpring(0, { ...springConfig, damping: 20, stiffness: 150 });
  const ringY = useSpring(0, { ...springConfig, damping: 20, stiffness: 150 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor='pointer'], input, textarea, select");
      const gallery = target.closest("[data-cursor='drag']");
      const view = target.closest("[data-cursor='view']");

      if (gallery) {
        setIsDragging(true);
        setCursorText("Drag");
      } else if (view) {
        setIsHovering(true);
        setCursorText("View");
      } else if (interactive) {
        setIsHovering(true);
        setCursorText("");
      } else {
        setIsHovering(false);
        setIsDragging(false);
        setCursorText("");
      }
    };

    let rafId: number;
    const animate = () => {
      ringX.set(mouseRef.current.x);
      ringY.set(mouseRef.current.y);
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile, dotX, dotY, ringX, ringY]);

  if (isMobile) return null;

  const scale = isDragging ? 2.5 : isHovering ? 2 : 1;
  const ringScale = isDragging ? 1.8 : isHovering ? 1.5 : 1;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ scale }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="w-2 h-2 rounded-full bg-jaya-cyan shadow-glow"
        />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ scale: ringScale }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative flex items-center justify-center"
        >
          <motion.div
            className="rounded-full border border-jaya-cyan/40 bg-jaya-cyan/5 backdrop-blur-sm"
            style={{
              width: isHovering || isDragging ? 56 : 40,
              height: isHovering || isDragging ? 56 : 40,
            }}
            animate={{
              boxShadow: isHovering
                ? "0 0 30px rgba(0, 180, 216, 0.4)"
                : "0 0 15px rgba(0, 180, 216, 0.15)",
            }}
          />
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute text-[10px] font-semibold text-jaya-navy uppercase tracking-wider"
            >
              {cursorText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
