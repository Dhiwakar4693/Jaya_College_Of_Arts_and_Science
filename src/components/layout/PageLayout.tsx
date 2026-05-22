import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/sections/home/CTASection";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  badge?: string;
  headerImage?: string;
  children: React.ReactNode;
  showCTA?: boolean;
}

export function PageLayout({
  title,
  subtitle,
  badge,
  headerImage,
  children,
  showCTA = true,
}: PageLayoutProps) {
  return (
    <>
      <PageHeader title={title} subtitle={subtitle} badge={badge} image={headerImage} />
      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
      {showCTA && <CTASection />}
    </>
  );
}
