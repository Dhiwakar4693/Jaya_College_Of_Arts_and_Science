"use client";

import { motion } from "@/lib/motion-shim";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/data/site";

export function StatsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-jaya-cyan/5 via-white to-jaya-orange/5" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-jaya-cyan/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative">
        <RevealOnScroll className="text-center mb-16">
          <span className="text-sm font-semibold text-jaya-cyan uppercase tracking-wider">By The Numbers</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-jaya-navy">
            Excellence in Every Metric
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-2xl p-6 text-center group"
              >
                <p className="text-3xl md:text-4xl font-bold text-gradient">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-slate-600 group-hover:text-jaya-navy transition-colors">{stat.label}</p>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
