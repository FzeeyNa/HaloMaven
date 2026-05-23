"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const transition  = { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] };

const animations = {
  opacity: {
    initial: { opacity: 0 },
    open: { opacity: 1, transition: { duration: 0.35 } },
    closed: { opacity: 0, transition: { duration: 0.35 } },
  },
  height: {
    initial: { height: 0 },
    enter: { height: "auto", transition },
    exit: { height: 0, transition },
  },
  background: {
    initial: { height: 0 },
    open: { height: "100vh", transition },
    closed: { height: 0, transition },
  },
  blur: {
    initial: { filter: "blur(0px)", opacity: 1 },
    open: { filter: "blur(4px)", opacity: 0.6, transition: { duration: 0.3 } },
    closed: {
      filter: "blur(0px)",
      opacity: 1,
      transition: { duration: 0.3 },
    },
  },
  translate: {
    initial: { y: "100%", opacity: 0 },
    enter: (i: number[]) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay: i[0] },
    }),
    exit: (i: number[]) => ({
      y: "100%",
      opacity: 0,
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay: i[1] },
    }),
  }
};

const animateChars = (word: string) => {
  return word.split("").map((char, i) => (
    <motion.span
      custom={[i * 0.02, (word.length - i) * 0.01]}
      variants={animations.translate}
      initial="initial"
      animate="enter"
      exit="exit"
      key={`${char}-${i}`}
    >
      {char}
    </motion.span>
  ));
};

function NavigationMenu({ onClose, navigationLinks }: { onClose: () => void, navigationLinks: {title: string, href: string}[] }) {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={animations.height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="navbar-nav"
    >
      <div className="navbar-nav-wrapper px-5">
        <div className="navbar-nav-container">
          <div className="navbar-body">
            {navigationLinks.map((link, index) => (
              <Link
                key={`link_${index}`}
                href={link.href}
                onClick={onClose}
                className="font-[family-name:var(--font-array-custom)] hover:text-violet-600 transition-colors duration-500"
              >
                <motion.p
                  onMouseOver={() =>
                    setSelectedLink({ isActive: true, index })
                  }
                  onMouseLeave={() =>
                    setSelectedLink({ isActive: false, index })
                  }
                  variants={animations.blur}
                  animate={
                    selectedLink.isActive && selectedLink.index !== index
                      ? "open"
                      : "closed"
                  }
                >
                  {animateChars(link.title)}
                </motion.p>
              </Link>
            ))}
          </div>
          <div className="navbar-nav-footer">
            <ul>
              <motion.li
                custom={[0.3, 0]}
                variants={animations.translate}
                initial="initial"
                animate="enter"
                exit="exit"
                className="font-[family-name:var(--font-khand-custom)] text-base"
              >
                <span>Made by:</span> MAVEN Team
              </motion.li>
            </ul>
            <ul>
              <motion.li
                custom={[0.3, 0]}
                variants={animations.translate}
                initial="initial"
                animate="enter"
                exit="exit"
                className="font-[family-name:var(--font-khand-custom)] text-base"
              >
                <span>Typography:</span> Fazry, Naira
              </motion.li>
            </ul>
            <ul>
              <motion.li
                custom={[0.3, 0]}
                variants={animations.translate}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link
                  href="https://instagram.com/halo.maven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-600 text-base font-[family-name:var(--font-khand-custom)]"
                >
                  @halo.maven
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import { LanguageSwitcher } from "./language-switcher";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation();

  const navigationLinks = [
    { title: t("navbar.home", "Beranda"), href: "#hero" },
    { title: t("navbar.services", "Layanan"), href: "#services" },
    { title: t("navbar.about", "Tentang"), href: "#about" },
    { title: t("navbar.marketplace", "Marketplace"), href: "#marketplace" },
    { title: t("navbar.academic", "Akademik"), href: "#academic" },
    { title: t("navbar.contact", "Kontak"), href: "#contact" },
  ];

  // Auto-close menu on scroll/wheel/touch
  useEffect(() => {
    if (!isActive) return;

    const handleClose = () => {
      setIsActive(false);
    };

    // wheel + touchmove work even when body overflow is hidden
    window.addEventListener("wheel", handleClose, { passive: true });
    window.addEventListener("touchmove", handleClose, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleClose);
      window.removeEventListener("touchmove", handleClose);
    };
  }, [isActive]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);

  return (
    <div className="navbar-header">
      <div className="navbar-bar">
        <Link href="/" className="flex items-center">
          <p className="font-[family-name:var(--font-array-custom)] text-xl font-semibold tracking-wider">
            MAVEN
          </p>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <LanguageSwitcher />
          <div
            onClick={() => setIsActive(!isActive)}
            className="navbar-el"
          >
            <div
              className={`navbar-burger ${
                isActive ? "navbar-burger-active" : ""
              }`}
            />
            <div className="navbar-label">
              <motion.p
                variants={animations.opacity}
                animate={!isActive ? "open" : "closed"}
                className="text-base font-[family-name:var(--font-array-custom)]"
              >
                {t("navbar.menu", "Menu")}
              </motion.p>
              <motion.p
                variants={animations.opacity}
                animate={isActive ? "open" : "closed"}
                className="text-base font-[family-name:var(--font-array-custom)]"
              >
                {t("navbar.close", "Close")}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        variants={animations.background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className="navbar-background"
      />
      <AnimatePresence mode="wait">
        {isActive && <NavigationMenu onClose={() => setIsActive(false)} navigationLinks={navigationLinks} />}
      </AnimatePresence>
    </div>
  );
}
