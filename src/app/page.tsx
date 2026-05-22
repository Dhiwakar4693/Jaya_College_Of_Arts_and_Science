import { Hero } from "@/sections/home/Hero";
import { AboutSection } from "@/sections/home/AboutSection";
import { StatsSection } from "@/sections/home/StatsSection";
import { DepartmentsSection } from "@/sections/home/DepartmentsSection";
import { CoursesSection } from "@/sections/home/CoursesSection";
import { PlacementsSection } from "@/sections/home/PlacementsSection";
import { EventsSection } from "@/sections/home/EventsSection";
import { GallerySection } from "@/sections/home/GallerySection";
import { TestimonialsSection } from "@/sections/home/TestimonialsSection";
import { CampusLifeSection } from "@/sections/home/CampusLifeSection";
import { CTASection } from "@/sections/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <StatsSection />
      <DepartmentsSection />
      <CoursesSection />
      <PlacementsSection />
      <EventsSection />
      <GallerySection />
      <TestimonialsSection />
      <CampusLifeSection />
      <CTASection />
    </>
  );
}
