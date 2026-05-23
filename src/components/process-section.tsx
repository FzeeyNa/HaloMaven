"use client";

import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Code2, Rocket, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export function ProcessSection() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
      step: "01",
      title: t("process.steps.1.title"),
      description: t("process.steps.1.desc"),
    },
    {
      icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
      step: "02",
      title: t("process.steps.2.title"),
      description: t("process.steps.2.desc"),
    },
    {
      icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      step: "03",
      title: t("process.steps.3.title"),
      description: t("process.steps.3.desc"),
    },
    {
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
      step: "04",
      title: t("process.steps.4.title"),
      description: t("process.steps.4.desc"),
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left side - 3D Working visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left mb-6 sm:mb-8 w-full"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs sm:text-sm font-medium font-[family-name:var(--font-khand-custom)] border border-violet-100 mb-4">
                <span className="w-2 h-2 bg-violet-500 rounded-sm" />
                {t("process.badge")}
              </span>
              <h2 className="font-[family-name:var(--font-array-custom)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider mb-3 sm:mb-4">
                {t("process.title1")}<span className="text-[#FFBA1F]">{t("process.title2")}</span>
              </h2>
              <p className="font-[family-name:var(--font-khand-custom)] text-base sm:text-lg md:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0">
                {t("process.subtitle")}
              </p>
            </motion.div>

            <motion.div
              className="relative"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-violet-200/30 rounded-full blur-3xl" />
              <Image
                src="/images/working.png"
                alt="Tim MAVEN sedang bekerja"
                width={400}
                height={400}
                className="relative z-10 object-contain w-[260px] sm:w-[320px] md:w-[380px] lg:w-[400px] h-auto drop-shadow-xl"
              />
            </motion.div>
          </motion.div>

          {/* Right side - Steps */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50/50 transition-all duration-300 h-full">
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-violet-600 flex items-center justify-center text-white font-[family-name:var(--font-array-custom)] font-bold text-lg sm:text-xl">
                      {step.step}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-violet-200 to-transparent" />
                  </div>

                  {/* Icon */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-violet-50 flex items-center justify-center text-violet-600 mb-3 group-hover:bg-violet-100 transition-colors">
                    {step.icon}
                  </div>

                  <h3 className="font-[family-name:var(--font-array-custom)] text-base sm:text-lg font-semibold tracking-wide mb-2">{step.title}</h3>
                  <p className="text-gray-600 font-[family-name:var(--font-khand-custom)] text-xs sm:text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow connector - hidden on mobile */}
                {i < steps.length - 1 && i % 2 === 0 && (
                  <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-violet-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
