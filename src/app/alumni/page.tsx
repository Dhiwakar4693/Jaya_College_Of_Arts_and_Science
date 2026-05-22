import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Users, Heart, Globe } from "lucide-react";

export const metadata: Metadata = { title: "Alumni" };

export default function AlumniPage() {
  return (
    <PageLayout title="Alumni" subtitle="Join our growing network of successful graduates worldwide" badge="JCAS Family">
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {[
          { icon: Users, title: "Alumni Network", desc: "Connect with fellow graduates across industries and geographies." },
          { icon: Heart, title: "Give Back", desc: "Support current students through mentorship and scholarship programs." },
          { icon: Globe, title: "Stay Connected", desc: "Receive updates on college events, reunions, and achievements." },
        ].map((item, i) => (
          <RevealOnScroll key={item.title} delay={i * 0.1}>
            <div className="premium-card p-8 text-center">
              <item.icon className="w-10 h-10 text-jaya-cyan mx-auto mb-4" />
              <h3 className="font-bold text-jaya-navy">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.desc}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
      <RevealOnScroll>
        <div className="glass rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-bold text-jaya-navy mb-4">Register as Alumni</h2>
          <p className="text-slate-600">Contact us at info@jcas.ac.in to join the JCAS alumni association.</p>
        </div>
      </RevealOnScroll>
    </PageLayout>
  );
}
