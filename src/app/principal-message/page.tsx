import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { principalMessage } from "@/data/content";

export const metadata: Metadata = { title: "Principal Message" };

export default function PrincipalMessagePage() {
  return (
    <PageLayout title="Principal's Message" subtitle={principalMessage.title} badge="Academic Leadership">
      <RevealOnScroll>
        <div className="max-w-3xl">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-jaya-orange to-jaya-gold flex items-center justify-center text-white text-2xl font-bold">PG</div>
            <div>
              <h2 className="text-2xl font-bold text-jaya-navy">{principalMessage.name}</h2>
              <p className="text-jaya-orange">{principalMessage.title}</p>
            </div>
          </div>
          {principalMessage.message.split("\n\n").map((p, i) => (
            <p key={i} className="text-lg text-slate-600 leading-relaxed mb-6">{p}</p>
          ))}
        </div>
      </RevealOnScroll>
    </PageLayout>
  );
}
