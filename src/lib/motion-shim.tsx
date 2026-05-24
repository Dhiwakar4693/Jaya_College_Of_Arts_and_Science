"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from "react";

// Minimal shim to avoid bundling framer-motion. Exports a tiny `motion` proxy
// that renders plain elements and lightweight hooks used in the repo.

type AnyProps = any;

const create = (tag: string) =>
  React.forwardRef(function MotionEl(props: AnyProps, ref: any) {
    const { children, className, style, ...rest } = props || {};
    return React.createElement(tag, { ref, className, style, ...rest }, children);
  });

const motion: any = new Proxy(
  {},
  {
    get(_, tag: string) {
      return create(tag);
    },
  }
);

export const AnimatePresence = (props: any) => <>{props.children}</>;

export function useInView(ref: any, options?: IntersectionObserverInit & { once?: boolean; margin?: string }) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref || !ref.current || typeof window === "undefined") return;
    const el = ref.current as Element;
    const rootMargin = (options as any)?.margin ?? options?.rootMargin;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (options && (options as any).once) obs.disconnect();
          } else if (!((options as any)?.once)) {
            setInView(false);
          }
        });
      },
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, options?.rootMargin]);
  return inView;
}

export function useScroll() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      setProgress(p);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return { scrollYProgress: progress };
}

export function useTransform(input: number, inputRange: number[], outputRange: number[]) {
  // Simple linear mapping from inputRange -> outputRange
  const [a, b] = inputRange;
  const [c, d] = outputRange;
  if (b === a) return c;
  const t = (input - a) / (b - a);
  return c + t * (d - c);
}

export function useSpring(initial = 0, _config?: any) {
  const [v, setV] = useState(initial);
  return {
    set: (n: number) => setV(n),
    get: () => v,
  } as any;
}

export function useMotionValue(initial = 0) {
  const [v, setV] = useState(initial);
  return {
    set: (n: number) => setV(n),
    get: () => v,
  } as any;
}

export { motion };
export default motion;
