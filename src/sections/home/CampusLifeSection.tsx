"use client";

import Image from "next/image";
import { motion } from "@/lib/motion-shim";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Heart, Users, Trophy } from "lucide-react";

const highlights = [
  { icon: Users, title: "Vibrant Community", desc: "3500+ students across diverse programs", image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80" },
  { icon: Trophy, title: "Sports Excellence", desc: "District & inter-zone championship teams", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80" },
  { icon: Heart, title: "Social Impact", desc: "NSS, blood donation & community service", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" },
];

export function CampusLifeSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll className="text-center mb-16">
          <span className="text-sm font-semibold text-jaya-orange uppercase tracking-wider">Experience</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-jaya-navy">Life at JCAS</h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 0.1}>
              <motion.div whileHover={{ y: -8 }} className="group rounded-3xl overflow-hidden premium-card">
                <div className="relative h-48 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-jaya-navy/60 to-transparent" />
                  <item.icon className="absolute top-4 right-4 w-8 h-8 text-white/80" />
                </div>
                <motion.div className="p-6">
                  <h3 className="text-xl font-bold text-jaya-navy">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.desc}</p>
                </motion.div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
