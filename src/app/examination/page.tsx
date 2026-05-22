import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ClipboardList, Calendar, FileCheck } from "lucide-react";

export const metadata: Metadata = { title: "Examination" };

const examInfo = [
  { icon: ClipboardList, title: "University Examinations", desc: "Semester examinations conducted as per University of Madras schedule and regulations." },
  { icon: Calendar, title: "Internal Assessments", desc: "Continuous internal evaluation including tests, assignments, and practical examinations." },
  { icon: FileCheck, title: "Results & Certificates", desc: "Provisional certificates and mark statements issued through the examination cell." },
];

export default function ExaminationPage() {
  return (
    <PageLayout title="Examination" subtitle="University of Madras affiliated examination system" badge="Academics">
      <div className="grid md:grid-cols-3 gap-8">
        {examInfo.map((item, i) => (
          <RevealOnScroll key={item.title} delay={i * 0.1}>
            <div className="premium-card p-8">
              <item.icon className="w-10 h-10 text-jaya-blue mb-4" />
              <h3 className="font-bold text-jaya-navy">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.desc}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </PageLayout>
  );
}
