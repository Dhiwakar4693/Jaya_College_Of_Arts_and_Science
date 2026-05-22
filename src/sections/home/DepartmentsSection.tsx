"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { departments } from "@/data/departments";
import { ArrowUpRight } from "lucide-react";

function DepartmentCard({ dept, index }: { dept: typeof departments[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]));
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]));

  return (
    <RevealOnScroll delay={index * 0.1}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          x.set(e.clientX - rect.left - rect.width / 2);
          y.set(e.clientY - rect.top - rect.height / 2);
        }}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        whileHover={{ scale: 1.02 }}
        className="group relative rounded-3xl overflow-hidden premium-card h-full min-h-[320px]"
        data-cursor="pointer"
      >
        <Image src={dept.image} alt={dept.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className={`absolute inset-0 bg-gradient-to-t ${dept.color} opacity-80 mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-jaya-navy/90 via-jaya-navy/40 to-transparent" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <span className="text-xs font-semibold text-jaya-cyan uppercase tracking-wider">{dept.shortName}</span>
          <h3 className="mt-2 text-xl font-bold text-white">{dept.name}</h3>
          <p className="mt-2 text-sm text-white/80 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{dept.description}</p>
          <Link href={`/departments#${dept.id}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-jaya-cyan opacity-0 group-hover:opacity-100 transition-opacity" data-cursor="pointer">
            Explore <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </RevealOnScroll>
  );
}

export function DepartmentsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-semibold text-jaya-orange uppercase tracking-wider">Academics</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-jaya-navy">Six Departments of Distinction</h2>
          </div>
          <Link href="/departments" className="btn-secondary shrink-0" data-cursor="pointer">View All Departments</Link>
        </RevealOnScroll>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: 1000 }}>
          {departments.map((dept, i) => (
            <DepartmentCard key={dept.id} dept={dept} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
