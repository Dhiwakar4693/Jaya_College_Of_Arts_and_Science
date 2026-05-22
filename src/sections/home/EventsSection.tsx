"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { events } from "@/data/content";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

export function EventsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % events.length);
  const prev = () => setCurrent((c) => (c - 1 + events.length) % events.length);

  return (
    <section className="section-padding bg-mesh-light">
      <motion.div className="max-w-7xl mx-auto">
        <RevealOnScroll className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-semibold text-jaya-cyan uppercase tracking-wider">Campus Life</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-jaya-navy">Events & News</h2>
          </div>
          <Link href="/events" className="btn-secondary shrink-0" data-cursor="pointer">All Events</Link>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="relative rounded-3xl overflow-hidden shadow-premium" data-cursor="drag">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2"
              >
                <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[400px]">
                  <Image src={events[current].image} alt={events[current].title} fill className="object-cover" sizes="50vw" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-jaya-navy/20 md:bg-gradient-to-l md:from-transparent md:to-white" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-jaya-orange">
                    <Calendar className="w-4 h-4" /> {events[current].date}
                  </span>
                  <span className="mt-2 text-xs font-medium text-jaya-cyan uppercase tracking-wider">{events[current].category}</span>
                  <h3 className="mt-4 text-2xl md:text-3xl font-bold text-jaya-navy">{events[current].title}</h3>
                  <div className="mt-8 flex gap-3">
                    <button onClick={prev} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-jaya-cyan/10 hover:border-jaya-cyan transition-colors" data-cursor="pointer" aria-label="Previous">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={next} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-jaya-cyan/10 hover:border-jaya-cyan transition-colors" data-cursor="pointer" aria-label="Next">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </RevealOnScroll>
      </motion.div>
    </section>
  );
}
