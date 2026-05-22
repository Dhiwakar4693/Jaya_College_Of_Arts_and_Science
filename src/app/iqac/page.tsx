import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { iqacContent } from "@/data/content";
import { Shield } from "lucide-react";

export const metadata: Metadata = { title: "IQAC" };

export default function IQACPage() {
  return (
    <PageLayout title="IQAC" subtitle="Internal Quality Assurance Cell — committed to continuous improvement" badge="Quality Assurance">
      <RevealOnScroll>
        <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-3xl">{iqacContent.description}</p>
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <div className="premium-card p-10">
          <Shield className="w-10 h-10 text-jaya-cyan mb-6" />
          <h2 className="text-xl font-bold text-jaya-navy mb-6">Objectives</h2>
          <ul className="space-y-4">
            {iqacContent.objectives.map((obj, i) => (
              <li key={i} className="flex gap-3 text-slate-600">
                <span className="w-2 h-2 rounded-full bg-jaya-cyan mt-2 shrink-0" />
                {obj}
              </li>
            ))}
          </ul>
        </div>
      </RevealOnScroll>
    </PageLayout>
  );
}
