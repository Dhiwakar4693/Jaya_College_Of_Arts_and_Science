import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { aboutContent } from "@/data/content";
import { siteConfig } from "@/data/site";
import { BookOpen, FlaskConical, Building2, Bus } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Jaya College of Arts & Science — established 1992, NAAC B++ accredited.",
};

const features = [
  { icon: BookOpen, title: "Library", desc: aboutContent.library },
  { icon: FlaskConical, title: "Laboratories", desc: aboutContent.labs },
  { icon: Building2, title: "Campus", desc: aboutContent.campus },
  { icon: Bus, title: "Transport", desc: "Excellent road connectivity between Thiruninravur and Chennai with special transport arrangements for students." },
];

export default function AboutPage() {
  return (
    <PageLayout
      title="About JCAS"
      subtitle="Pioneering institution carving young minds since 1992"
      badge="Our Story"
      headerImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
        <RevealOnScroll>
          <div className="relative rounded-3xl overflow-hidden aspect-video shadow-premium">
            <Image src="/images/college.webp" alt={siteConfig.name} fill className="object-cover" />
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">{aboutContent.intro}</p>
          <p className="text-slate-600 leading-relaxed mb-4">{aboutContent.founder}</p>
          <p className="text-slate-600 leading-relaxed">{aboutContent.community}</p>
        </RevealOnScroll>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <RevealOnScroll key={f.title} delay={i * 0.1}>
            <div className="premium-card p-8">
              <f.icon className="w-10 h-10 text-jaya-cyan mb-4" />
              <h3 className="text-xl font-bold text-jaya-navy">{f.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </PageLayout>
  );
}
