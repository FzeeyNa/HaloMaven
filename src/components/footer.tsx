"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Mail, Globe, ArrowRight } from "lucide-react";

const serviceLinks = [
  { name: "Website Kustom", href: "#services" },
  { name: "Website Template", href: "#services" },
  { name: "Sistem Manajemen", href: "#services" },
  { name: "AI Automation", href: "#services" },
  { name: "Hosting & Perawatan", href: "#services" },
  { name: "Web Scraping", href: "#services" },
  { name: "Academic Support", href: "#academic" },
];

const navLinks = [
  { name: "Beranda", href: "#hero" },
  { name: "Filosofi", href: "#philosophy" },
  { name: "Layanan", href: "#services" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Marketplace", href: "#marketplace" },
  { name: "Kontak", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-gray-50/80 border-t border-gray-100 pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 mb-2 md:mb-0">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Image src="/images/logo-m.png" alt="MAVEN" width={52} height={52} className="object-contain" />
              <span className="font-[family-name:var(--font-array-custom)] text-lg sm:text-xl font-bold tracking-wider">MAVEN</span>
            </div>
            <p className="text-gray-500 font-[family-name:var(--font-khand-custom)] text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed max-w-xs">
              Modern Applications & Versatile Engineering Network.
              <br />
              Satu pixel, satu baris kode, satu solusi setiap saat.
            </p>
            <p className="text-gray-400 font-[family-name:var(--font-khand-custom)] text-xs">
              @halo.maven
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[family-name:var(--font-array-custom)] text-sm sm:text-base font-semibold tracking-wide mb-3 sm:mb-4">Layanan</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="flex items-center gap-1.5 text-gray-500 hover:text-violet-600 transition-colors font-[family-name:var(--font-khand-custom)] text-xs sm:text-sm">
                    <ArrowRight className="w-3 h-3 shrink-0" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-[family-name:var(--font-array-custom)] text-sm sm:text-base font-semibold tracking-wide mb-3 sm:mb-4">Navigasi</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="flex items-center gap-1.5 text-gray-500 hover:text-violet-600 transition-colors font-[family-name:var(--font-khand-custom)] text-xs sm:text-sm">
                    <ArrowRight className="w-3 h-3 shrink-0" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-array-custom)] text-sm sm:text-base font-semibold tracking-wide mb-3 sm:mb-4">Kontak</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="https://wa.me/6281936142855" target="_blank" className="flex items-center gap-2 text-gray-500 hover:text-violet-600 transition-colors font-[family-name:var(--font-khand-custom)] text-xs sm:text-sm">
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> WhatsApp
                </Link>
              </li>
              <li>
                <Link href="mailto:halomaven@gmail.com" className="flex items-center gap-2 text-gray-500 hover:text-violet-600 transition-colors font-[family-name:var(--font-khand-custom)] text-xs sm:text-sm">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> halomaven@gmail.com
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/halo.maven" target="_blank" className="flex items-center gap-2 text-gray-500 hover:text-violet-600 transition-colors font-[family-name:var(--font-khand-custom)] text-xs sm:text-sm">
                  <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> @halo.maven
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-400 font-[family-name:var(--font-khand-custom)] text-[10px] sm:text-xs text-center sm:text-left">
            © 2026 MAVEN. All rights reserved. Built with precision, one pixel at a time.
          </p>
          <div className="flex gap-4">
            <Link href="#hero" className="text-gray-400 hover:text-violet-500 transition-colors font-[family-name:var(--font-khand-custom)] text-[10px] sm:text-xs">
              Kembali ke Atas ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
