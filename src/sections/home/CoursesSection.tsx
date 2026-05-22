"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GraduationCap, BookOpen } from "lucide-react";

const courseTypes = [
  { title: "Undergraduate", count: "18+", href: "/ug-courses", icon: GraduationCap, color: "from-jaya-cyan to-jaya-blue" },
  { title: "Postgraduate", count: "12+", href: "/pg-courses", icon: BookOpen, color: "from-jaya-orange to-jaya-gold" },
];

export function CoursesSection() {
  return (
    <section className="section-padding bg-mesh-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll className="text-center mb-16">
          <span className="text-sm font-semibold text-jaya-cyan uppercase tracking-wider">Programs</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-jaya-navy">World-Class Academic Programs</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">From commerce and arts to cutting-edge sciences and professional degrees — find your path.</p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {courseTypes.map((course, i) => (
            <RevealOnScroll key={course.title} delay={i * 0.15}>
              <Link href={course.href} data-cursor="pointer">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative rounded-3xl overflow-hidden premium-card p-8 md:p-12 group"
                >
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${course.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />
                  <course.icon className="w-12 h-12 text-jaya-cyan mb-6" />
                  <h3 className="text-2xl md:text-3xl font-bold text-jaya-navy">{course.title}</h3>
                  <p className="mt-2 text-4xl font-bold text-gradient">{course.count}</p>
                  <p className="mt-4 text-slate-600">Programs available across Arts, Science, Hotel Management & Professional PG</p>
                  <span className="inline-block mt-6 text-jaya-cyan font-semibold group-hover:translate-x-2 transition-transform">Explore Programs →</span>
                </motion.div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
