"use client";

import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const business = formData.get("business") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    const waText = `Halo MAVEN! 👋%0A%0ANama: ${name}%0ABisnis: ${business || "-"}%0ALayanan: ${service}%0APesan: ${message}`;
    window.open(`https://wa.me/6281936142855?text=${waText}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 lg:py-32">
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
            Hubungi Kami
          </span>
          <h2 className="font-[family-name:var(--font-array-custom)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider mb-3 sm:mb-4">
            Mulai Langkah <span className="gradient-text">Digitalmu</span>
          </h2>
          <p className="font-[family-name:var(--font-khand-custom)] text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
            Konsultasikan masalah teknismu sekarang secara gratis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
              <div>
                <label className="block text-sm font-semibold font-[family-name:var(--font-khand-custom)] text-gray-700 mb-1.5">Nama Lengkap</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:border-violet-300 focus:ring-2 focus:ring-violet-100 outline-none transition-all font-[family-name:var(--font-khand-custom)] text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold font-[family-name:var(--font-khand-custom)] text-gray-700 mb-1.5">Nama Bisnis / Instansi <span className="font-normal text-gray-400">(Opsional)</span></label>
                <input
                  name="business"
                  type="text"
                  placeholder="Nama bisnis Anda"
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:border-violet-300 focus:ring-2 focus:ring-violet-100 outline-none transition-all font-[family-name:var(--font-khand-custom)] text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold font-[family-name:var(--font-khand-custom)] text-gray-700 mb-1.5">Layanan yang Dibutuhkan</label>
                <select
                  name="service"
                  required
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:border-violet-300 focus:ring-2 focus:ring-violet-100 outline-none transition-all font-[family-name:var(--font-khand-custom)] text-sm sm:text-base"
                >
                  <option value="Website & Aplikasi Kustom">Website & Aplikasi Kustom</option>
                  <option value="Website Template Ekonomis">Website Template Ekonomis</option>
                  <option value="Sistem Manajemen Bisnis">Sistem Manajemen Bisnis</option>
                  <option value="AI Automation">Otomatisasi Admin & AI Automation</option>
                  <option value="Hosting & Perawatan">Hosting & Perawatan Web</option>
                  <option value="Web Scraping">Pengumpulan Data / Web Scraping</option>
                  <option value="Academic Support">Bantuan Proyek Kuliah IT</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold font-[family-name:var(--font-khand-custom)] text-gray-700 mb-1.5">Ceritakan Masalah atau Ide Anda</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tuliskan kebutuhan Anda..."
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:border-violet-300 focus:ring-2 focus:ring-violet-100 outline-none transition-all font-[family-name:var(--font-khand-custom)] resize-none text-sm sm:text-base"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-gray-900 text-white hover:bg-black hover:shadow-lg transition-all duration-300 font-[family-name:var(--font-khand-custom)] font-medium text-sm sm:text-base w-full sm:w-auto"
              >
                <Send className="w-4 h-4" /> Kirim Formulir Konsultasi
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 sm:gap-5"
          >
            <p className="text-gray-600 font-[family-name:var(--font-khand-custom)] text-sm sm:text-base italic">
              Atau hubungi kami langsung via jalur cepat:
            </p>

            <Link
              href="https://wa.me/6281936142855"
              target="_blank"
              className="flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-md hover:shadow-green-50/50 transition-all duration-300 group"
            >
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/images/whatsapp-3d.png"
                  alt="WhatsApp"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </motion.div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400 font-[family-name:var(--font-khand-custom)]">WhatsApp Bisnis</p>
                <p className="text-sm sm:text-base font-semibold text-gray-900 font-[family-name:var(--font-khand-custom)]">+62 819-3614-2855</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-green-500 transition-colors" />
            </Link>

            <Link
              href="mailto:halomaven@gmail.com"
              className="flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-md hover:shadow-red-50/50 transition-all duration-300 group"
            >
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 shrink-0"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/images/gmail.png"
                  alt="Gmail"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </motion.div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400 font-[family-name:var(--font-khand-custom)]">Email Resmi</p>
                <p className="text-sm sm:text-base font-semibold text-gray-900 font-[family-name:var(--font-khand-custom)]">halomaven@gmail.com</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-red-500 transition-colors" />
            </Link>

            <Link
              href="https://instagram.com/halo.maven"
              target="_blank"
              className="flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-gray-100 hover:border-pink-200 hover:shadow-md hover:shadow-pink-50/50 transition-all duration-300 group"
            >
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/images/instagram-3d.png"
                  alt="Instagram"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </motion.div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400 font-[family-name:var(--font-khand-custom)]">Instagram</p>
                <p className="text-sm sm:text-base font-semibold text-gray-900 font-[family-name:var(--font-khand-custom)]">@halo.maven</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-pink-500 transition-colors" />
            </Link>

            {/* Testimonial / Trust */}
            <div className="mt-2 p-4 sm:p-5 rounded-xl bg-violet-50/50 border border-violet-100/50">
              <p className="text-gray-600 font-[family-name:var(--font-khand-custom)] text-xs sm:text-sm italic mb-2">
                &ldquo;Respon cepat, hasil profesional, dan harga bersahabat. MAVEN beneran bantu bisnis kami go digital!&rdquo;
              </p>
              <p className="text-violet-600 font-[family-name:var(--font-khand-custom)] text-xs font-semibold">— Klien UMKM, Makassar</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
