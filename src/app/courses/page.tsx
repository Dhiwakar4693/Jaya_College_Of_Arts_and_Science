import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GraduationCap, BookOpen } from "lucide-react";

export const metadata: Metadata = { title: "Courses" };

export default function CoursesPage() {
  return (
    <PageLayout title="Courses" subtitle="Comprehensive UG and PG programs across Arts, Science & Professional streams" badge="Programs">
      <div className="grid md:grid-cols-2 gap-8">
        <RevealOnScroll>
          <Link href="/ug-courses" className="block premium-card p-10 group" data-cursor="pointer">
            <GraduationCap className="w-12 h-12 text-jaya-cyan mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-bold text-jaya-navy">Undergraduate Courses</h2>
            <p className="mt-4 text-slate-600">B.Com, BBA, B.A, B.Sc and Hotel Management programs</p>
            <span className="inline-block mt-6 text-jaya-cyan font-semibold">View UG Courses →</span>
          </Link>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <Link href="/pg-courses" className="block premium-card p-10 group" data-cursor="pointer">
            <BookOpen className="w-12 h-12 text-jaya-orange mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-bold text-jaya-navy">Postgraduate Courses</h2>
            <p className="mt-4 text-slate-600">M.Com, M.A, M.Sc, MCA and MBA programs</p>
            <span className="inline-block mt-6 text-jaya-orange font-semibold">View PG Courses →</span>
          </Link>
        </RevealOnScroll>
      </div>
    </PageLayout>
  );
}
