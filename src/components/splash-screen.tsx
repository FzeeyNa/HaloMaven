"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"logo" | "text" | "exit">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("text"), 600);
    const t2 = setTimeout(() => setPhase("exit"), 2000);
    const t3 = setTimeout(() => onComplete(), 2600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : null}
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        initial={{ opacity: 1 }}
        animate={phase === "exit" ? { opacity: 0, scale: 1.05 } : { opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        style={{ pointerEvents: phase === "exit" ? "none" : "auto" }}
      >
        {/* Background pixel grid */}
        <div className="absolute inset-0 pixel-grid opacity-30" />

        {/* Floating pixel particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-violet-400/20 rounded-sm"
            style={{
              left: `${10 + (i * 7) % 80}%`,
              top: `${15 + (i * 11) % 70}%`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0.5, 1.2, 0.5],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 2 + (i % 3),
              delay: i * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Central content */}
        <div className="relative flex flex-col items-center gap-4 sm:gap-6">
          {/* Logo M */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotate: -10 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Image
              src="/images/logo-m.png"
              alt="MAVEN"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-lg"
              priority
            />
          </motion.div>

          {/* MAVEN text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={phase === "text" || phase === "exit" ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-1"
          >
            <h1 className="font-[family-name:var(--font-array-custom)] text-3xl sm:text-4xl font-semibold tracking-[0.3em] text-gray-900">
              MAVEN
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={phase === "text" || phase === "exit" ? { width: "100%" } : {}}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              className="h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={phase === "text" || phase === "exit" ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="font-[family-name:var(--font-khand-custom)] text-xs sm:text-sm text-gray-400 tracking-widest uppercase mt-1"
            >
              Versatile Engineering Network
            </motion.p>
          </motion.div>

          {/* Loading dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={phase === "text" || phase === "exit" ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex gap-1.5 mt-2"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 bg-violet-400 rounded-full"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
