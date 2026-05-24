"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "@/lib/motion-shim";
import { ArrowRight, Sparkles, Award } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-mesh-light">
      <motion.div
        className="absolute inset-0 bg-hero-glow"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <ParallaxLayer speed={0.12} className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl">
        <motion.div
          className="w-full h-full bg-jaya-cyan/20 rounded-full"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={0.08} className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-3xl">
        <motion.div
          className="w-full h-full bg-jaya-orange/15 rounded-full"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </ParallaxLayer>

      <motion.div
        className="absolute top-32 right-[15%] w-3 h-3 rounded-full bg-jaya-cyan/60"
        animate={{ y: [0, -40, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-[20%] w-5 h-5 rounded-full bg-jaya-orange/40"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <Sparkles className="w-4 h-4 text-jaya-cyan" />
              <span className="text-sm font-medium text-jaya-navy">{siteConfig.accreditation}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              <span className="text-jaya-navy">Shape Your</span>
              <br />
              <span className="text-gradient">Future at JCAS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed"
            >
              {siteConfig.tagline} — Premier education since {siteConfig.established.split("-")[0]}, 
              affiliated to University of Madras, nurturing excellence in Thiruninravur.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Link href="/admissions" className="btn-primary" data-cursor="pointer">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Link href="/about" className="btn-secondary" data-cursor="pointer">
                  Explore JCAS
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-jaya-orange" />
                <span className="text-sm font-semibold text-jaya-navy">NAAC B++ Grade</span>
              </div>
              <motion.div className="h-8 w-px bg-slate-200" />
              <span className="text-sm text-slate-500">{siteConfig.affiliation}</span>
            </motion.div>
          </div>

          <ParallaxLayer speed={0.09} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-3xl overflow-hidden shadow-premium border border-white/60"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/college.webp"
                    alt={siteConfig.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jaya-navy/20 via-transparent to-transparent" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-premium"
              >
                <p className="text-3xl font-bold text-gradient">32+</p>
                <p className="text-sm text-slate-600">Years of Excellence</p>
              </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-premium"
            >
              <p className="text-3xl font-bold text-gradient-orange">3500+</p>
              <p className="text-sm text-slate-600">Students</p>
            </motion.div>
            </motion.div>
          </ParallaxLayer>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-jaya-cyan/30 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-jaya-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
