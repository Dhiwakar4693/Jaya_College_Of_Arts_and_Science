"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RevealOnScroll } from "./RevealOnScroll";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  image?: string;
}

export function PageHeader({ title, subtitle, badge, image }: PageHeaderProps) {
  return (
    <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-mesh-light">
      <motion.div
        className="absolute inset-0 bg-hero-glow"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {image && (
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image src={image} alt="" fill className="object-cover" priority />
        </motion.div>
      )}

      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-jaya-cyan/10 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-jaya-orange/10 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-jaya-cyan/30"
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-jaya-orange/20"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32"
      >
        {badge && (
          <RevealOnScroll>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-jaya-blue bg-jaya-cyan/10 rounded-full border border-jaya-cyan/20">
              {badge}
            </span>
          </RevealOnScroll>
        )}
        <RevealOnScroll delay={0.1}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-jaya-navy tracking-tight">
            {title}
          </h1>
        </RevealOnScroll>
        {subtitle && (
          <RevealOnScroll delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </RevealOnScroll>
        )}
      </motion.div>
    </section>
  );
}
