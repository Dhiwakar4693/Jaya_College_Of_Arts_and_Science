import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { visionMission } from "@/data/content";
import { Target, Eye, Sparkles } from "lucide-react";

export const metadata: Metadata = { title: "Vision & Mission" };

export default function VisionMissionPage() {
  return (
    <PageLayout title="Vision & Mission" subtitle={visionMission.motto} badge="Our Purpose">
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <RevealOnScroll>
          <div className="premium-card p-10 h-full">
            <Eye className="w-12 h-12 text-jaya-cyan mb-6" />
            <h2 className="text-2xl font-bold text-jaya-navy mb-4">Vision</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{visionMission.vision}</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className="premium-card p-10 h-full bg-gradient-to-br from-jaya-cyan/5 to-jaya-orange/5">
            <Sparkles className="w-12 h-12 text-jaya-orange mb-6" />
            <h2 className="text-2xl font-bold text-jaya-navy mb-4">Motto</h2>
            <p className="text-2xl font-display font-bold text-gradient-orange">{visionMission.motto}</p>
          </div>
        </RevealOnScroll>
      </div>
      <RevealOnScroll>
        <div className="premium-card p-10">
          <Target className="w-12 h-12 text-jaya-blue mb-6" />
          <h2 className="text-2xl font-bold text-jaya-navy mb-6">Mission</h2>
          <ul className="space-y-4">
            {visionMission.mission.map((item, i) => (
              <li key={i} className="flex gap-4 text-slate-600">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-jaya-cyan/10 text-jaya-cyan font-bold flex items-center justify-center text-sm">{i + 1}</span>
                <span className="leading-relaxed pt-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </RevealOnScroll>
    </PageLayout>
  );
}
