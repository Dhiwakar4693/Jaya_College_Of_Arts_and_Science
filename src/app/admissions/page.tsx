import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FileText, CheckCircle, Users } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Admissions" };

const steps = [
  { icon: FileText, title: "Apply Online", desc: "Fill the application form with required documents and academic details." },
  { icon: CheckCircle, title: "Document Verification", desc: "Submit mark sheets, transfer certificate, and community certificate if applicable." },
  { icon: Users, title: "Enrollment", desc: "Complete fee payment and receive your enrollment confirmation." },
];

export default function AdmissionsPage() {
  return (
    <PageLayout title="Admissions" subtitle="Begin your journey at JCAS — applications open for UG & PG programs" badge="Apply Now">
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {steps.map((step, i) => (
          <RevealOnScroll key={step.title} delay={i * 0.1}>
            <div className="premium-card p-8 text-center">
              <step.icon className="w-10 h-10 text-jaya-cyan mx-auto mb-4" />
              <h3 className="font-bold text-jaya-navy">{step.title}</h3>
              <p className="mt-3 text-slate-600 text-sm">{step.desc}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
      <RevealOnScroll>
        <div className="glass rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-bold text-jaya-navy mb-4">Ready to Apply?</h2>
          <p className="text-slate-600 mb-8">Contact our admissions office for eligibility criteria and application forms.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${siteConfig.contact.phone}`} className="btn-primary" data-cursor="pointer">Call {siteConfig.contact.phone}</a>
            <a href={`mailto:${siteConfig.contact.email}`} className="btn-secondary" data-cursor="pointer">Email Us</a>
            <Link href="/scholarships" className="btn-secondary" data-cursor="pointer">View Scholarships</Link>
          </div>
        </div>
      </RevealOnScroll>
    </PageLayout>
  );
}
