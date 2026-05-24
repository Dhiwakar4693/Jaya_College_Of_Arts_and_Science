"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const [, setTick] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mqReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointerFine = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
    setEnabled(Boolean(pointerFine && !mqReduced));
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const targetEl = e.target as HTMLElement;
      const interactive = targetEl.closest("a, button, [data-cursor='pointer'], input, textarea, select");
      const gallery = targetEl.closest("[data-cursor='drag']");
      const view = targetEl.closest("[data-cursor='view']");

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

    let rafId = 0;
    const loop = () => {
      // simple lerp
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      // force update
      setTick((t) => t + 1);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  const dotStyle: React.CSSProperties = {
    transform: `translate3d(${pos.current.x - 1}px, ${pos.current.y - 1}px, 0) translate(-50%, -50%)`,
  };
  const ringSize = isDragging ? 56 : isHovering ? 56 : 40;
  const ringStyle: React.CSSProperties = {
    transform: `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) scale(${isDragging ? 1.8 : isHovering ? 1.5 : 1})`,
    width: ringSize,
    height: ringSize,
  };

  return (
    <>
      <div
        aria-hidden
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={dotStyle}
      >
        <div className="w-2 h-2 rounded-full bg-jaya-cyan shadow-glow" />
      </div>

      <div aria-hidden className="fixed top-0 left-0 z-[9998] pointer-events-none" style={ringStyle}>
        <div
          className="rounded-full border border-jaya-cyan/40 bg-jaya-cyan/5 backdrop-blur-sm"
          style={{ width: "100%", height: "100%", boxShadow: isHovering ? "0 0 30px rgba(0, 180, 216, 0.4)" : "0 0 15px rgba(0, 180, 216, 0.15)" }}
        />
        {cursorText && (
          <span className="absolute text-[10px] font-semibold text-jaya-navy uppercase tracking-wider" style={{ transform: "translate(-50%, -50%)" }}>
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
