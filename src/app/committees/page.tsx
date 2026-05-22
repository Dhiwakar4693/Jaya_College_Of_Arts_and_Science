import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { committees } from "@/data/content";

export const metadata: Metadata = { title: "Committees" };

export default function CommitteesPage() {
  return (
    <PageLayout title="Committees" subtitle="Statutory and functional committees ensuring governance and student welfare" badge="Governance">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {committees.map((name, i) => (
          <RevealOnScroll key={name} delay={i * 0.05}>
            <div className="premium-card p-6 text-center hover:border-jaya-cyan/30">
              <h3 className="font-semibold text-jaya-navy">{name}</h3>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </PageLayout>
  );
}
