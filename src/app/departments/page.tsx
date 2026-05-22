import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { departments } from "@/data/departments";

export const metadata: Metadata = { title: "Departments" };

export default function DepartmentsPage() {
  return (
    <PageLayout title="Departments" subtitle="Six departments offering diverse UG and PG programs" badge="Academics">
      <div className="space-y-16">
        {departments.map((dept, i) => (
          <RevealOnScroll key={dept.id} delay={i * 0.05}>
            <article id={dept.id} className="grid lg:grid-cols-2 gap-8 items-center scroll-mt-32">
              <div className={`relative rounded-3xl overflow-hidden aspect-video shadow-premium ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image src={dept.image} alt={dept.name} fill className="object-cover" sizes="50vw" />
                <div className={`absolute inset-0 bg-gradient-to-t ${dept.color} opacity-30`} />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-sm font-semibold text-jaya-cyan uppercase tracking-wider">{dept.shortName}</span>
                <h2 className="mt-2 text-2xl md:text-3xl font-bold text-jaya-navy">{dept.name}</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{dept.description}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-2">
                  {dept.courses.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-jaya-cyan" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </PageLayout>
  );
}
