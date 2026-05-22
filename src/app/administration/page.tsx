import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { administration } from "@/data/content";

export const metadata: Metadata = { title: "Administration" };

export default function AdministrationPage() {
  return (
    <PageLayout title="Administration" subtitle="Leadership guiding JCAS towards excellence" badge="Leadership">
      <div className="grid md:grid-cols-3 gap-8">
        {administration.map((person, i) => (
          <RevealOnScroll key={person.role} delay={i * 0.1}>
            <div className="premium-card p-8 text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-jaya-cyan to-jaya-blue flex items-center justify-center text-white text-2xl font-bold">
                {person.name.split(" ").pop()?.[0]}
              </div>
              <h3 className="mt-6 text-xl font-bold text-jaya-navy">{person.name}</h3>
              <p className="text-jaya-cyan font-medium mt-1">{person.role}</p>
              <p className="text-sm text-slate-500 mt-2">{person.qualification}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </PageLayout>
  );
}
