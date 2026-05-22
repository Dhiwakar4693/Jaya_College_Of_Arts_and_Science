import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { pgCourses } from "@/data/courses";

export const metadata: Metadata = { title: "PG Courses" };

function CourseGrid({ title, courses }: { title: string; courses: typeof pgCourses.arts }) {
  return (
    <RevealOnScroll>
      <h2 className="text-2xl font-bold text-jaya-navy mb-6">{title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((c) => (
          <div key={c.name} className="premium-card p-6">
            <span className="text-xs font-semibold text-jaya-orange uppercase">{c.type}</span>
            <h3 className="mt-2 font-semibold text-jaya-navy">{c.name}</h3>
            <p className="mt-2 text-sm text-slate-500">{c.duration}</p>
          </div>
        ))}
      </div>
    </RevealOnScroll>
  );
}

export default function PGCoursesPage() {
  return (
    <PageLayout title="PG Courses" subtitle="Postgraduate and professional degree programs" badge="Postgraduate">
      <div className="space-y-16">
        <CourseGrid title="Arts" courses={pgCourses.arts} />
        <CourseGrid title="Science" courses={pgCourses.science} />
        <CourseGrid title="Professional" courses={pgCourses.professional} />
      </div>
    </PageLayout>
  );
}
