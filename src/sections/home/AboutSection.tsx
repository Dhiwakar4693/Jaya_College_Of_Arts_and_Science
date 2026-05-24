"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "@/lib/motion-shim";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { aboutContent } from "@/data/content";

export function AboutSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-jaya-light/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll direction="left">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-premium aspect-[4/5]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
                  alt="JCAS Campus"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-jaya-navy/40 to-transparent" />
              </motion.div>
              <motion.div
                className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-premium border-4 border-white hidden md:block"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80"
                  alt="Library"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.1}>
            <span className="text-sm font-semibold text-jaya-cyan uppercase tracking-wider">About JCAS</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-jaya-navy leading-tight">
              Pioneering Excellence Since 1992
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">{aboutContent.intro}</p>
            <p className="mt-4 text-slate-600 leading-relaxed">{aboutContent.character}</p>
            <Link href="/about" className="inline-flex items-center gap-2 mt-8 text-jaya-cyan font-semibold hover:gap-3 transition-all" data-cursor="pointer">
              Discover Our Story <ArrowRight className="w-5 h-5" />
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
