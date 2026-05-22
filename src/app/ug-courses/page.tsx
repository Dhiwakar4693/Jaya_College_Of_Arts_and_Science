import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ugCourses } from "@/data/courses";

export const metadata: Metadata = { title: "UG Courses" };

function CourseGrid({ title, courses }: { title: string; courses: typeof ugCourses.arts }) {
  return (
    <RevealOnScroll>
      <h2 className="text-2xl font-bold text-jaya-navy mb-6">{title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((c) => (
          <div key={c.name} className="premium-card p-6 hover:border-jaya-cyan/30">
            <span className="text-xs font-semibold text-jaya-cyan uppercase">{c.type}</span>
            <h3 className="mt-2 font-semibold text-jaya-navy">{c.name}</h3>
            <p className="mt-2 text-sm text-slate-500">{c.duration}</p>
          </div>
        ))}
      </div>
    </RevealOnScroll>
  );
}

export default function UGCoursesPage() {
  return (
    <PageLayout title="UG Courses" subtitle="Undergraduate programs affiliated to University of Madras" badge="Undergraduate">
      <div className="space-y-16">
        <CourseGrid title="Arts & Commerce" courses={ugCourses.arts} />
        <CourseGrid title="Science & Hotel Management" courses={ugCourses.science} />
      </div>
    </PageLayout>
  );
}
