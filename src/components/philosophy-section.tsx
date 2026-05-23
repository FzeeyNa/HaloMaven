"use client";

import { motion } from "framer-motion";
import { Shield, Blocks, Grid3X3 } from "lucide-react";
import { useTranslation } from "react-i18next";

export function PhilosophySection() {
  const { t } = useTranslation();

  const pillars = [
    {
      icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: t("philosophy.pillars.1.title"),
      subtitle: t("philosophy.pillars.1.subtitle"),
      description: t("philosophy.pillars.1.description"),
      pixelCount: 4,
    },
    {
      icon: <Blocks className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: t("philosophy.pillars.2.title"),
      subtitle: t("philosophy.pillars.2.subtitle"),
      description: t("philosophy.pillars.2.description"),
      pixelCount: 6,
    },
    {
      icon: <Grid3X3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: t("philosophy.pillars.3.title"),
      subtitle: t("philosophy.pillars.3.subtitle"),
      description: t("philosophy.pillars.3.description"),
      pixelCount: 8,
    },
  ];

  return (
    <section id="philosophy" className="py-16 sm:py-20 md:py-28 lg:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs sm:text-sm font-medium font-[family-name:var(--font-khand-custom)] border border-violet-100 mb-4">
            <span className="w-2 h-2 bg-[#FFBA1F] rounded-sm" />
            {t("philosophy.badge")}
          </span>
          <h2 className="font-[family-name:var(--font-array-custom)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider mb-3 sm:mb-4">
            {t("philosophy.title1")}
            <span className="gradient-text">{t("philosophy.title2")}</span>
          </h2>
          <p className="font-[family-name:var(--font-khand-custom)] text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            {t("philosophy.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 md:p-8 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50 transition-all duration-300"
            >
              {/* Pixel decoration */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                {Array.from({ length: pillar.pixelCount }, (_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#FFBA1F] rounded-sm"
                    style={{ opacity: 0.3 + (i / pillar.pixelCount) * 0.7 }}
                  />
                ))}
              </div>

              <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 mb-4 sm:mb-5 md:mb-6 group-hover:bg-violet-100 transition-colors">
                {pillar.icon}
              </div>

              <h3 className="font-[family-name:var(--font-array-custom)] text-lg sm:text-xl md:text-2xl font-semibold mb-1 tracking-wide">
                {pillar.title}
              </h3>
              <p className="text-violet-500 text-xs sm:text-sm font-[family-name:var(--font-khand-custom)] mb-3 sm:mb-4 italic">
                {pillar.subtitle}
              </p>
              <p className="text-gray-600 font-[family-name:var(--font-khand-custom)] text-sm sm:text-base leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
