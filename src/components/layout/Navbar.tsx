"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
// removed framer-motion to reduce bundle size; use CSS transitions instead
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";
import { departments } from "@/data/departments";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!navRef.current) return;
      if (event.target instanceof Node && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    const handleDocumentKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    document.addEventListener("keydown", handleDocumentKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((current) => (current === label ? null : label));
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-premium border-b border-slate-100/80 py-2"
            : "bg-transparent py-4"
        )}
      >
        {!scrolled && (
          <div className="hidden lg:block border-b border-white/10 bg-jaya-navy/90 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end gap-6 text-sm text-white/80">
              <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 hover:text-jaya-cyan transition-colors" data-cursor="pointer">
                <Phone className="w-3.5 h-3.5" />
                {siteConfig.contact.phone}
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-jaya-cyan transition-colors" data-cursor="pointer">
                <Mail className="w-3.5 h-3.5" />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        )}

        <nav ref={navRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" data-cursor="pointer">
            <div className="relative w-12 h-12 min-w-[3rem] min-h-[3rem] rounded-xl overflow-hidden shadow-premium bg-white/10 flex-shrink-0 transform transition-transform duration-200 hover:scale-105">
              <Image src="/images/college-logo.jpg" alt={siteConfig.name} fill className="object-contain object-center" priority />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-sm md:text-base text-jaya-navy">Jaya College Of Arts & Science</span>
              <p className="text-[10px] md:text-xs text-slate-500">Arts & Science</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1" onMouseLeave={() => setActiveDropdown(null)}>
            {navigation.map((item) => (
              <div key={item.label} className="relative" onMouseEnter={() => item.children && setActiveDropdown(item.label)}>
                <Link
                  href={item.href}
                  onClick={(event) => {
                    if (item.children) {
                      event.preventDefault();
                      toggleDropdown(item.label);
                    }
                  }}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-jaya-navy hover:text-jaya-cyan hover:bg-jaya-cyan/5 rounded-lg transition-all"
                  data-cursor="pointer"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div
                    className={cn(
                      "absolute top-full mt-2 rounded-2xl shadow-premium border border-slate-100 bg-white/95 backdrop-blur-xl z-50 transition-transform transition-opacity duration-200 ease-out",
                      item.mega ? "w-[560px] -left-40 p-6" : "w-56 p-2 left-0"
                    )}
                  >
                    {item.mega ? (
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-xs font-semibold text-jaya-cyan uppercase tracking-wider mb-3">Academics</p>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setActiveDropdown(null)}
                              className="block px-3 py-2 text-sm text-slate-700 hover:text-jaya-cyan hover:bg-jaya-cyan/5 rounded-lg"
                              data-cursor="pointer"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-jaya-orange uppercase tracking-wider mb-3">Departments</p>
                          {departments.map((dept) => (
                            <Link
                              key={dept.id}
                              href={`/departments#${dept.id}`}
                              onClick={() => setActiveDropdown(null)}
                              className="block px-3 py-2 text-sm text-slate-700 hover:text-jaya-orange hover:bg-jaya-orange/5 rounded-lg"
                              data-cursor="pointer"
                            >
                              {dept.shortName}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-2.5 text-sm text-slate-700 hover:text-jaya-cyan hover:bg-jaya-cyan/5 rounded-xl"
                          data-cursor="pointer"
                        >
                          {child.label}
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admissions"
              className="hidden md:inline-flex btn-primary text-sm tracking-wide !px-5 !py-2.5 rounded-full shadow-lg shadow-jaya-cyan/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              data-cursor="pointer"
            >
              Apply Now
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-xl bg-white/80 shadow-premium" aria-label="Toggle menu" data-cursor="pointer">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-jaya-navy/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto transform transition-transform duration-300">
            <div className="p-6 pt-24 space-y-2">
              {navigation.map((item, i) => (
                <div key={item.label} className="transition-opacity duration-200" style={{ transitionDelay: `${i * 25}ms` }}>
                  <Link href={item.href} onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-lg font-medium text-jaya-navy hover:bg-jaya-cyan/5 rounded-xl">
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="block pl-8 py-2 text-sm text-slate-600">
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link href="/admissions" onClick={() => setMobileOpen(false)} className="block btn-primary w-full text-center mt-6">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
