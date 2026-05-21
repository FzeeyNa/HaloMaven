"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TechArc } from "./tech-arc";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15, duration: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function PixelParticles() {
  const pixels = [
    { x: 5, y: 10, s: 4, d: 0 },
    { x: 90, y: 15, s: 3, d: 1 },
    { x: 20, y: 80, s: 5, d: 0.5 },
    { x: 75, y: 60, s: 3, d: 1.5 },
    { x: 50, y: 30, s: 4, d: 2 },
    { x: 10, y: 50, s: 2, d: 0.8 },
    { x: 85, y: 75, s: 6, d: 1.2 },
    { x: 35, y: 90, s: 3, d: 0.3 },
    { x: 60, y: 5, s: 4, d: 1.8 },
    { x: 95, y: 45, s: 2, d: 2.5 },
    { x: 15, y: 35, s: 5, d: 0.6 },
    { x: 70, y: 85, s: 3, d: 1.1 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pixels.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bg-violet-500/10 rounded-sm"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s }}
          animate={{ opacity: [0.1, 0.5, 0.1], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 4 + p.d, delay: p.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

const quickChecklist = [
  "App Development",
  "Business Systems",
  "AI Automation",
  "Hosting & Maintenance",
  "Data Scraping",
  "Academic IT Support",
];

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-48 md:pt-28 md:pb-56 pixel-grid overflow-hidden">
      <PixelParticles />
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          
          {/* Mobile: Rocket first (order-first on mobile, order-last on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="relative h-[220px] sm:h-[280px] md:h-[350px] lg:h-[450px] w-full flex justify-center items-center order-first lg:order-last"
          >
            {/* Background glow - pulsing */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-violet-200 rounded-full blur-3xl opacity-40" />
            </motion.div>

            {/* Pixel grid decoration */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-8 md:right-8 grid grid-cols-5 gap-1 opacity-20">
              {Array.from({ length: 15 }, (_, i) => (
                <div key={i} className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-violet-500 rounded-sm" style={{ opacity: i % 3 === 0 ? 0.6 : 0.2 }} />
              ))}
            </div>

            {/* Main 3D Rocket with launch animation */}
            <motion.div
              className="relative z-10"
              animate={{
                y: [-8, 8, -8],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Rocket glow trail */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-24 sm:h-24 bg-[#FFBA1F]/20 rounded-full blur-2xl"
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <Image
                src="/images/rocket2.png"
                alt="MAVEN 3D Pixel Rocket"
                width={380}
                height={380}
                className="object-contain w-[180px] sm:w-[240px] md:w-[300px] lg:w-[380px] h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Floating pixel stars */}
            <motion.div
              className="absolute top-4 sm:top-8 right-4 sm:right-12 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-violet-400 rounded-sm"
              animate={{ y: [-5, 5, -5], rotate: [0, 90, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-8 sm:bottom-16 left-4 sm:left-12 w-2 sm:w-3 h-2 sm:h-3 bg-[#FFBA1F] rounded-sm"
              animate={{ y: [5, -5, 5], rotate: [0, -90, 0], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div
              className="absolute top-12 sm:top-20 left-8 sm:left-16 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-violet-300 rounded-full"
              animate={{ scale: [0.5, 1.5, 0.5], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Corner pixel grids */}
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:bottom-8 md:left-8 grid grid-cols-3 gap-1 opacity-15">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-sm" />
              ))}
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-3 sm:gap-4 md:gap-5 relative z-10 order-last lg:order-first">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs sm:text-sm font-medium font-[family-name:var(--font-khand-custom)] border border-violet-100">
                <span className="w-2 h-2 bg-[#FFBA1F] rounded-sm" />
                Versatile Engineering Network
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="font-[family-name:var(--font-array-custom)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-wider leading-tight">
                Website{" "}
                <span className="text-[#FFBA1F]">Impian Kamu?</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 font-[family-name:var(--font-khand-custom)] mt-2">
                Kami bantu wujudkan <span className="text-violet-600 font-semibold">Solusi Digital</span> yang tepat untuk bisnis mu.
              </p>
            </motion.div>

            {/* Checklist - clean without dark box */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <p className="text-xs sm:text-sm font-semibold font-[family-name:var(--font-khand-custom)] text-violet-600 uppercase tracking-wider">
                Solusi IT Praktis
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                {quickChecklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 font-[family-name:var(--font-khand-custom)] text-xs sm:text-sm md:text-base text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 mt-1 sm:mt-2">
              <MagneticWrapper>
                <Button className="px-5 sm:px-8 py-4 sm:py-6 text-sm sm:text-base rounded-full bg-gray-900 text-white font-semibold hover:bg-black hover:shadow-lg transition-all duration-300 font-[family-name:var(--font-khand-custom)]">
                  <Link href="#contact" className="flex items-center gap-2">
                    Konsultasi Proyek Kustom <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </MagneticWrapper>
              <MagneticWrapper>
                <Button variant="outline" className="px-5 sm:px-8 py-4 sm:py-6 text-sm sm:text-base rounded-full border-violet-200 text-violet-600 hover:bg-violet-50 transition-colors font-[family-name:var(--font-khand-custom)]">
                  <Link href="#services">Lihat Semua Layanan</Link>
                </Button>
              </MagneticWrapper>
            </motion.div>

            {/* Social */}
            <motion.div variants={itemVariants} className="mt-1 sm:mt-2">
              <p className="text-sm text-gray-400 font-[family-name:var(--font-khand-custom)]">@halo.maven</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Tech Arc Element at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <TechArc />
      </div>
    </section>
  );
}
