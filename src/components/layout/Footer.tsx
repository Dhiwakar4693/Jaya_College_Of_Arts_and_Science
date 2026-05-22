"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/site";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "Admissions", href: "/admissions" },
  { label: "Placements", href: "/placements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const academicLinks = [
  { label: "UG Courses", href: "/ug-courses" },
  { label: "PG Courses", href: "/pg-courses" },
  { label: "Examination", href: "/examination" },
  { label: "Research", href: "/research" },
  { label: "IQAC", href: "/iqac" },
  { label: "Alumni", href: "/alumni" },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white to-jaya-light/30 border-t border-slate-100 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-50" />
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-jaya-cyan/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6" data-cursor="pointer">
              <div className="relative w-full h-16 rounded-xl overflow-hidden">
                <Image src="/images/college-banner.png" alt={siteConfig.name} fill className="object-contain object-left" />
              </div>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">{siteConfig.tagline}</p>
            <p className="text-xs text-jaya-orange font-semibold">{siteConfig.accreditation}</p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-500 hover:text-jaya-cyan hover:border-jaya-cyan/30 transition-colors shadow-sm"
                  data-cursor="pointer"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-jaya-navy mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-jaya-cyan transition-colors" data-cursor="pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-jaya-navy mb-6">Academics</h4>
            <ul className="space-y-3">
              {academicLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-jaya-cyan transition-colors" data-cursor="pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-jaya-navy mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-slate-600">
                <MapPin className="w-5 h-5 text-jaya-cyan shrink-0" />
                <span>{siteConfig.location.full}</span>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} className="flex gap-3 text-sm text-slate-600 hover:text-jaya-cyan transition-colors" data-cursor="pointer">
                  <Phone className="w-5 h-5 text-jaya-cyan shrink-0" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex gap-3 text-sm text-slate-600 hover:text-jaya-cyan transition-colors" data-cursor="pointer">
                  <Mail className="w-5 h-5 text-jaya-cyan shrink-0" />
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.trust}. {siteConfig.affiliation}.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/about" className="hover:text-jaya-cyan transition-colors" data-cursor="pointer">Privacy</Link>
            <Link href="/contact" className="hover:text-jaya-cyan transition-colors" data-cursor="pointer">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
