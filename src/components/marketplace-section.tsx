"use client";

import { motion } from "framer-motion";
import { Clock, Sparkles, ShoppingBag, Building2, Megaphone, Palette } from "lucide-react";
import { useTranslation } from "react-i18next";

export function MarketplaceSection() {
  const { t } = useTranslation();

  const categories = [
    { icon: <ShoppingBag className="w-3.5 h-3.5" />, label: t("marketplace.categories.1") },
    { icon: <Building2 className="w-3.5 h-3.5" />, label: t("marketplace.categories.2") },
    { icon: <Megaphone className="w-3.5 h-3.5" />, label: t("marketplace.categories.3") },
    { icon: <Palette className="w-3.5 h-3.5" />, label: t("marketplace.categories.4") },
  ];

  return (
    <section id="marketplace" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs sm:text-sm font-medium font-[family-name:var(--font-khand-custom)] border border-violet-100 mb-4">
            <span className="w-2 h-2 bg-violet-500 rounded-sm" />
            {t("marketplace.badge")}
          </span>
          <h2 className="font-[family-name:var(--font-array-custom)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider mb-3 sm:mb-4">
            {t("marketplace.title1")}<span className="text-[#FFBA1F]">{t("marketplace.title2")}</span>{t("marketplace.title3")}
          </h2>
          <p className="font-[family-name:var(--font-khand-custom)] text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            {t("marketplace.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative rounded-2xl sm:rounded-3xl border-2 border-dashed border-violet-200 bg-white p-8 sm:p-10 md:p-14 lg:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 pixel-grid opacity-30" />
            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-violet-50 text-violet-500 mb-4 sm:mb-6"
              >
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </motion.div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-violet-100 text-violet-700 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 font-[family-name:var(--font-khand-custom)]">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                {t("marketplace.coming_soon")}
              </div>
              <h3 className="font-[family-name:var(--font-array-custom)] text-xl sm:text-2xl md:text-3xl font-semibold tracking-wider mb-3 sm:mb-4">
                {t("marketplace.box_title")}
              </h3>
              <p className="text-gray-500 font-[family-name:var(--font-khand-custom)] text-sm sm:text-base md:text-lg max-w-md mx-auto mb-5 sm:mb-8 leading-relaxed">
                {t("marketplace.box_desc")}
              </p>
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                {categories.map((cat, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gray-50 text-gray-400 text-[10px] sm:text-xs font-medium font-[family-name:var(--font-khand-custom)] border border-gray-100">
                    {cat.icon}
                    {cat.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
