import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { chairmanMessage } from "@/data/content";

export const metadata: Metadata = { title: "Chairman Message" };

export default function ChairmanMessagePage() {
  return (
    <PageLayout title="Chairman's Message" subtitle={chairmanMessage.title} badge="From Our Founder">
      <RevealOnScroll>
        <div className="max-w-3xl">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-jaya-cyan to-jaya-navy flex items-center justify-center text-white text-2xl font-bold">AK</div>
            <div>
              <h2 className="text-2xl font-bold text-jaya-navy">{chairmanMessage.name}</h2>
              <p className="text-jaya-cyan">{chairmanMessage.title}</p>
            </div>
          </div>
          {chairmanMessage.message.split("\n\n").map((p, i) => (
            <p key={i} className="text-lg text-slate-600 leading-relaxed mb-6">{p}</p>
          ))}
        </div>
      </RevealOnScroll>
    </PageLayout>
  );
}
