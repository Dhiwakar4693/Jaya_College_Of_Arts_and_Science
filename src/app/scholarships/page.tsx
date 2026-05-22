import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { scholarships } from "@/data/content";
import { Award } from "lucide-react";

export const metadata: Metadata = { title: "Scholarships" };

export default function ScholarshipsPage() {
  return (
    <PageLayout title="Scholarships" subtitle="Financial support for deserving students" badge="Financial Aid">
      <div className="grid md:grid-cols-2 gap-6">
        {scholarships.map((s, i) => (
          <RevealOnScroll key={s.name} delay={i * 0.08}>
            <div className="premium-card p-8 flex gap-4">
              <Award className="w-8 h-8 text-jaya-orange shrink-0" />
              <div>
                <h3 className="font-bold text-jaya-navy">{s.name}</h3>
                <p className="mt-2 text-slate-600">{s.description}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </PageLayout>
  );
}
