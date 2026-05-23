"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";
import { GraduationCap, Lock, BookOpen, Wrench, Code2, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export function AcademicBanner() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Lock className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: t("academic.features.1.title"),
      subtitle: t("academic.features.1.subtitle") || undefined,
    },
    {
      icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: t("academic.features.2.title"),
      subtitle: t("academic.features.2.subtitle"),
    },
    {
      icon: <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: t("academic.features.3.title"),
      subtitle: t("academic.features.3.subtitle"),
    },
    {
      icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: t("academic.features.4.title"),
      subtitle: t("academic.features.4.subtitle"),
    },
    {
      icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: t("academic.features.5.title"),
      subtitle: t("academic.features.5.subtitle"),
    },
  ];

  return (
    <section id="academic" className="py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-violet-50 via-white to-violet-50 border border-violet-100 p-6 sm:p-8 md:p-10 lg:p-14"
        >
          {/* Pixel grid decoration */}
          <div className="absolute top-0 right-0 w-28 sm:w-40 h-28 sm:h-40 opacity-10">
            <svg viewBox="0 0 160 160" fill="none">
              {Array.from({ length: 8 }, (_, row) =>
                Array.from({ length: 8 }, (_, col) => (
                  <rect
                    key={`${row}-${col}`}
                    x={col * 20}
                    y={row * 20}
                    width="16"
                    height="16"
                    rx="2"
                    fill="#7c3aed"
                    opacity={(row + col) % 2 === 0 ? 0.3 : 0.15}
                  />
                ))
              )}
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6 font-[family-name:var(--font-khand-custom)]">
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {t("academic.badge")}
              </div>

              <h2 className="font-[family-name:var(--font-array-custom)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider mb-3 sm:mb-4">
                {t("academic.title1")}
                <span className="text-[#FFBA1F]">{t("academic.title2")}</span>
              </h2>

              <p className="text-gray-600 font-[family-name:var(--font-khand-custom)] text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
                {t("academic.subtitle")}
              </p>

              {/* 3D Rocket launch scene */}
              <motion.div
                className="mb-6 flex justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/rocket1.png"
                    alt="Launch your academic project"
                    width={360}
                    height={240}
                    className="object-contain w-[260px] sm:w-[320px] md:w-[360px] h-auto drop-shadow-xl"
                  />
                </motion.div>
              </motion.div>

              <MagneticWrapper>
                <Button className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-full bg-[#FFBA1F] text-black hover:bg-[#FFBA1F]/80 hover:shadow-lg transition-all duration-300 font-[family-name:var(--font-khand-custom)]">
                  <Link href="https://wa.me/6281936142855?text=Halo%20MAVEN%2C%20saya%20butuh%20bantuan%20tugas%20kuliah%20IT" target="_blank">
                    {t("academic.cta")}
                  </Link>
                </Button>
              </MagneticWrapper>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/80 border border-violet-50"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-violet-50 flex items-center justify-center text-violet-600 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-khand-custom)] text-sm sm:text-base font-semibold text-gray-800">
                      {item.title}
                    </p>
                    {item.subtitle && (
                      <p className="text-xs sm:text-sm text-gray-500 font-[family-name:var(--font-khand-custom)]">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
