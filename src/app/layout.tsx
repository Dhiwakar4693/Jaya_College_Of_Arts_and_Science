import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jaya College of Arts & Science | Premium Education",
    template: "%s | Jaya College of Arts & Science",
  },
  description:
    "Jaya College of Arts & Science — A premier institution affiliated to University of Madras, established 1992. NAAC B++ accredited. Your Success Is Our Service.",
  keywords: [
    "Jaya College",
    "JCAS",
    "Thiruninravur",
    "Chennai college",
    "University of Madras",
    "NAAC accredited",
  ],
  openGraph: {
    title: "Jaya College of Arts & Science",
    description: "Premium education in Thiruninravur, Chennai. NAAC B++ accredited.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body overflow-x-hidden">
        <CustomCursor />
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
