"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-violet-100 via-violet-50 to-violet-100/50 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14 lg:p-16 overflow-hidden"
        >
          {/* Decorations */}
          <div className="absolute top-0 right-0 w-40 sm:w-60 h-40 sm:h-60 bg-violet-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-violet-200/20 rounded-full blur-3xl" />

          {/* Pixel decoration */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 grid grid-cols-3 gap-1.5 opacity-15">
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#FFBA1F] rounded-sm" />
            ))}
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-array-custom)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider mb-3 sm:mb-4">
                Siap Memulai Transformasi <span className="text-[#FFBA1F]">Digital</span>?
              </h2>
              <p className="text-gray-600 font-[family-name:var(--font-khand-custom)] text-sm sm:text-base md:text-lg mb-5 sm:mb-6 max-w-lg">
                Konsultasikan kebutuhan teknologi bisnis Anda secara gratis. Tim engineer kami siap membantu mewujudkan ide Anda dari konsep hingga produk jadi.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gray-900 text-white hover:bg-black hover:shadow-lg transition-all duration-300 font-[family-name:var(--font-khand-custom)] text-sm sm:text-base font-medium"
                >
                  Mulai Konsultasi Gratis <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://wa.me/6281936142855"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-violet-300 text-violet-700 hover:bg-white/50 transition-colors font-[family-name:var(--font-khand-custom)] text-sm sm:text-base"
                >
                  Chat via WhatsApp
                </Link>
              </div>
            </div>

            {/* 3D AI Robot visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex items-center justify-center"
            >
              <motion.div
                className="relative"
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-violet-300/20 rounded-full blur-3xl" />
                <Image
                  src="/images/ai.png"
                  alt="MAVEN AI Automation"
                  width={300}
                  height={300}
                  className="relative z-10 object-contain drop-shadow-xl w-[220px] md:w-[260px] lg:w-[300px]"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
