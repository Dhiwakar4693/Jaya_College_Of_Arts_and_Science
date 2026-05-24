"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion-shim";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { testimonials } from "@/data/content";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-mesh-light relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll className="text-center mb-16">
          <span className="text-sm font-semibold text-jaya-cyan uppercase tracking-wider">Student Voices</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-jaya-navy">What Our Alumni Say</h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="relative glass rounded-3xl p-8 md:p-12">
            <Quote className="w-12 h-12 text-jaya-cyan/30 mb-6" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed italic">&ldquo;{testimonials[active].quote}&rdquo;</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-jaya-cyan/30">
                    <Image src={testimonials[active].avatar} alt={testimonials[active].name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-jaya-navy">{testimonials[active].name}</p>
                    <p className="text-sm text-slate-500">{testimonials[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === active ? "w-8 bg-jaya-cyan" : "bg-slate-300"}`}
                  aria-label={`Testimonial ${i + 1}`}
                  data-cursor="pointer"
                />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
