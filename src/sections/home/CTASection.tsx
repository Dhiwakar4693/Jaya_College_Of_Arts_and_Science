"use client";

import Link from "next/link";
import { motion } from "@/lib/motion-shim";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-jaya-cyan via-jaya-blue to-jaya-navy" />
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)" }}
            />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white">Ready to Begin Your Journey?</h2>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">Join thousands of students who chose excellence. Admissions open for UG & PG programs.</p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/admissions" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-jaya-navy font-semibold hover:scale-105 transition-transform shadow-lg" data-cursor="pointer">
                  Apply for Admission <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors" data-cursor="pointer">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
