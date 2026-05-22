import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { events } from "@/data/content";
import { Calendar } from "lucide-react";

export const metadata: Metadata = { title: "Events & News" };

export default function EventsPage() {
  return (
    <PageLayout title="Events & News" subtitle="Celebrating achievements, culture, and campus life" badge="What's Happening">
      <div className="grid md:grid-cols-2 gap-8">
        {events.map((event, i) => (
          <RevealOnScroll key={event.title} delay={i * 0.08}>
            <article className="premium-card overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <Image src={event.image} alt={event.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="50vw" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-jaya-navy">{event.category}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-jaya-cyan">
                  <Calendar className="w-4 h-4" /> {event.date}
                </div>
                <h3 className="mt-2 text-xl font-bold text-jaya-navy">{event.title}</h3>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </PageLayout>
  );
}
