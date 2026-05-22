import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { researchAreas } from "@/data/content";
import { Microscope } from "lucide-react";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <PageLayout title="Research" subtitle="Fostering a culture of inquiry and innovation across disciplines" badge="Innovation">
      <RevealOnScroll>
        <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-3xl">
          Jaya College promotes research culture through well-equipped laboratories, faculty mentorship, and interdisciplinary collaboration aligned with University of Madras guidelines.
        </p>
      </RevealOnScroll>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {researchAreas.map((area, i) => (
          <RevealOnScroll key={area} delay={i * 0.08}>
            <div className="premium-card p-8 flex items-center gap-4">
              <Microscope className="w-8 h-8 text-jaya-cyan shrink-0" />
              <h3 className="font-semibold text-jaya-navy">{area}</h3>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </PageLayout>
  );
}
