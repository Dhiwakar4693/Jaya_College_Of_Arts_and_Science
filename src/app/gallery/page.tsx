"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion-shim";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/sections/home/CTASection";
import { galleryImages } from "@/data/content";

const categories = ["All", ...Array.from(new Set(galleryImages.map((g) => g.category)))];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? galleryImages : galleryImages.filter((g) => g.category === filter);

  return (
    <>
      <PageHeader title="Gallery" subtitle="Moments that define the JCAS experience" badge="Campus Life" />
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? "bg-jaya-cyan text-white shadow-glow" : "bg-slate-100 text-slate-600 hover:bg-jaya-cyan/10"}`}
                data-cursor="pointer"
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative break-inside-avoid mb-4 rounded-2xl overflow-hidden group"
                  data-cursor="view"
                >
                  <div className={`relative ${i % 3 === 0 ? "h-72" : i % 3 === 1 ? "h-96" : "h-64"}`}>
                    <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-jaya-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-jaya-cyan font-semibold">{img.category}</span>
                      <p className="text-white font-medium">{img.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
