"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLang);
  };

  if (!mounted) return null;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white border-[3px] border-gray-900 rounded-sm shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] hover:shadow-[2px_2px_0px_0px_rgba(17,24,39,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
    >
      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
      <span className="font-[family-name:var(--font-array-custom)] font-bold text-gray-900 text-xs sm:text-sm uppercase tracking-widest">
        {i18n.language === 'en' ? 'EN' : 'ID'}
      </span>
    </motion.button>
  );
}
