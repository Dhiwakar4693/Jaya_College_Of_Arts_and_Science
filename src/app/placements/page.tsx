import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { placements } from "@/data/content";

export const metadata: Metadata = { title: "Placements" };

export default function PlacementsPage() {
  return (
    <PageLayout title="Placements" subtitle="Connecting students with leading corporate recruiters" badge="Career Success">
      <RevealOnScroll>
        <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-3xl">{placements.description}</p>
      </RevealOnScroll>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {placements.stats.map((stat, i) => (
          <RevealOnScroll key={stat.label} delay={i * 0.1}>
            <div className="glass rounded-2xl p-8 text-center">
              <p className="text-3xl font-bold text-gradient">
                {typeof stat.value === "number" ? <AnimatedCounter value={stat.value} suffix={stat.suffix} /> : stat.value}
              </p>
              <p className="mt-2 text-slate-600">{stat.label}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
      <RevealOnScroll>
        <h2 className="text-2xl font-bold text-jaya-navy mb-8">Our Recruiters</h2>
        <div className="flex flex-wrap gap-4">
          {placements.recruiters.map((name) => (
            <span key={name} className="px-6 py-3 rounded-full glass text-slate-700 font-medium">{name}</span>
          ))}
        </div>
      </RevealOnScroll>
    </PageLayout>
  );
}
