"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { placements } from "@/data/content";

export function PlacementsSection() {
  const doubled = [...placements.recruiters, ...placements.recruiters];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll className="text-center mb-16">
          <span className="text-sm font-semibold text-jaya-orange uppercase tracking-wider">Career Success</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-jaya-navy">Placement Excellence</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">{placements.description}</p>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {placements.stats.map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i * 0.1}>
              <motion.div whileHover={{ scale: 1.05 }} className="glass rounded-2xl p-6 text-center">
                <p className="text-2xl md:text-3xl font-bold text-gradient">
                  {typeof stat.value === "number" ? <AnimatedCounter value={stat.value} suffix={stat.suffix} /> : stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="relative py-8 overflow-hidden rounded-3xl glass" data-cursor="drag">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/90 to-transparent z-10" />
          <motion.div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/90 to-transparent z-10" />
          <motion.div className="flex gap-8 animate-marquee w-max">
            {doubled.map((name, i) => (
              <span key={i} className="text-lg font-semibold text-slate-400 whitespace-nowrap px-4">{name}</span>
            ))}
          </motion.div>
        </div>

        <RevealOnScroll className="text-center mt-12">
          <Link href="/placements" className="btn-primary" data-cursor="pointer">View Placement Details</Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
