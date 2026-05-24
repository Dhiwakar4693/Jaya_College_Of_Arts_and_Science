"use client";

import { motion, useScroll, useTransform } from "@/lib/motion-shim";
import type { CSSProperties } from "react";
import { useMemo } from "react";

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}

export function ParallaxLayer({
  children,
  speed = 0.18,
  className,
  style,
}: ParallaxLayerProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -(speed * 120)]);

  const transformStyle = useMemo(() => ({ transform: `translateY(${y}px)` }), [y]);

  return (
    <motion.div style={{ ...transformStyle, ...style } as CSSProperties} className={className}>
      {children}
    </motion.div>
  );
}
