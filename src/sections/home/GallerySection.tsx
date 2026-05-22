"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { galleryImages } from "@/data/content";

export function GallerySection() {
  const featured = galleryImages.slice(0, 6);
  const heights = ["h-64", "h-80", "h-72", "h-96", "h-64", "h-80"];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll className="text-center mb-16">
          <span className="text-sm font-semibold text-jaya-orange uppercase tracking-wider">Visual Story</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-jaya-navy">Campus Gallery</h2>
        </RevealOnScroll>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {featured.map((img, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative ${heights[i % heights.length]} rounded-2xl overflow-hidden group break-inside-avoid mb-4`}
                data-cursor="view"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-jaya-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs font-semibold text-jaya-cyan">{img.category}</span>
                  <p className="text-white font-medium">{img.alt}</p>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="text-center mt-12">
          <Link href="/gallery" className="btn-secondary" data-cursor="pointer">View Full Gallery</Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
