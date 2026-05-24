"use client";

import { useEffect, useRef } from "react";

export function SmoothScroll() {
  const targetY = useRef(0);
  const currentY = useRef(0);
  const requestId = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

    const updatePosition = () => {
      const diff = targetY.current - currentY.current;
      currentY.current += diff * 0.18;
      window.scrollTo(0, currentY.current);

      if (Math.abs(diff) > 0.5) {
        requestId.current = window.requestAnimationFrame(updatePosition);
      } else {
        currentY.current = targetY.current;
        requestId.current = null;
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (window.innerWidth < 768) return;
      event.preventDefault();
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetY.current = clamp(targetY.current + event.deltaY, 0, maxScroll);
      if (!requestId.current) {
        currentY.current = window.scrollY;
        requestId.current = window.requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (requestId.current) {
        window.cancelAnimationFrame(requestId.current);
      }
    };
  }, []);

  return null;
}
