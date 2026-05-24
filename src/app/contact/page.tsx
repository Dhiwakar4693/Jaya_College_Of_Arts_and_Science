"use client";

import { useState } from "react";
import { motion } from "@/lib/motion-shim";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/sections/home/CTASection";
import { siteConfig } from "@/data/site";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you" badge="Get in Touch" />
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-jaya-navy mb-8">Reach Out</h2>
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Address", value: siteConfig.location.full },
                { icon: Phone, label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
                { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-jaya-cyan/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-jaya-cyan" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-jaya-navy font-medium hover:text-jaya-cyan transition-colors" data-cursor="pointer">{item.value}</a>
                    ) : (
                      <p className="text-jaya-navy font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-3xl overflow-hidden h-64 bg-slate-100 relative">
              <iframe
                title="JCAS Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.0!2d80.03!3d13.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA3JzEyLjAiTiA4MMKwMDEnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <motion.form onSubmit={handleSubmit} className="premium-card p-8 md:p-10">
            <h2 className="text-2xl font-bold text-jaya-navy mb-6">Send a Message</h2>
            {submitted ? (
              <p className="text-jaya-cyan font-medium py-8 text-center">Thank you! We&apos;ll get back to you soon.</p>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <input required placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-jaya-cyan focus:ring-2 focus:ring-jaya-cyan/20 outline-none transition-all" />
                  <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-jaya-cyan focus:ring-2 focus:ring-jaya-cyan/20 outline-none transition-all" />
                </div>
                <input required placeholder="Subject" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-jaya-cyan focus:ring-2 focus:ring-jaya-cyan/20 outline-none transition-all mb-4" />
                <textarea required rows={5} placeholder="Your Message" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-jaya-cyan focus:ring-2 focus:ring-jaya-cyan/20 outline-none transition-all mb-6 resize-none" />
                <button type="submit" className="btn-primary w-full sm:w-auto" data-cursor="pointer">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </>
            )}
          </motion.form>
        </div>
      </section>
      <CTASection />
    </>
  );
}
