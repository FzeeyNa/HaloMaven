"use client";

import { useState, useCallback } from "react";
import { SplashScreen } from "@/components/splash-screen";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { ProcessSection } from "@/components/process-section";
import { MarketplaceSection } from "@/components/marketplace-section";
import { AcademicBanner } from "@/components/academic-banner";
import { ContactSection } from "@/components/contact-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <main className="min-h-screen bg-white overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <PhilosophySection />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <MarketplaceSection />
        <AcademicBanner />
        <CTASection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
