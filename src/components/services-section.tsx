"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Code2, Bot, Database, ServerCog, LayoutTemplate, MonitorSmartphone, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Code2 className="w-6 h-6 sm:w-7 sm:h-7" />,
      number: "01",
      title: t("services.items.1.title", "Pembuatan Website & Aplikasi Kustom"),
      description: t("services.items.1.desc", "Pembuatan website profil perusahaan (company profile), toko online, atau aplikasi mobile yang dibangun khusus dari nol sesuai dengan kebutuhan spesifik bisnismu."),
      features: (t("services.items.1.features", { returnObjects: true }) as string[]) || ["Full-stack Development", "Responsive Design", "Custom CMS", "Mobile App"],
      highlight: true,
    },
    {
      icon: <LayoutTemplate className="w-6 h-6 sm:w-7 sm:h-7" />,
      number: "02",
      title: t("services.items.2.title", "Website Berbasis Template (Ekonomis)"),
      description: t("services.items.2.desc", "Solusi website siap pakai dengan proses pengerjaan super cepat (1–3 hari) dan harga ramah kantong. Sangat cocok untuk UMKM atau bisnis baru yang ingin segera tampil profesional di internet."),
      features: (t("services.items.2.features", { returnObjects: true }) as string[]) || ["Siap 1-3 Hari", "Hemat Biaya", "Profesional", "SEO Ready"],
      highlight: false,
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6 sm:w-7 sm:h-7" />,
      number: "03",
      title: t("services.items.3.title", "Sistem Manajemen Bisnis"),
      description: t("services.items.3.desc", "Pembuatan sistem kasir (POS), sistem pencatatan stok barang (inventaris), sistem absensi karyawan, hingga dasbor internal yang dapat diakses dari HP atau laptop kapan saja."),
      features: (t("services.items.3.features", { returnObjects: true }) as string[]) || ["Sistem Kasir POS", "Inventaris Stok", "Absensi Online", "Dashboard Realtime"],
      highlight: false,
    },
    {
      icon: <Bot className="w-6 h-6 sm:w-7 sm:h-7" />,
      number: "04",
      title: t("services.items.4.title", "Otomatisasi Admin & AI Automation"),
      description: t("services.items.4.desc", "Mengubah pekerjaan admin yang manual menjadi otomatis menggunakan teknologi AI dan n8n. Contohnya: bot membalas Whatsapp secara otomatis, sinkronisasi data form ke WA, dan rekap data pesanan otomatis ke Excel."),
      features: (t("services.items.4.features", { returnObjects: true }) as string[]) || ["WhatsApp Bot", "n8n Automation", "Auto-reporting", "AI Integration"],
      highlight: true,
    },
    {
      icon: <ServerCog className="w-6 h-6 sm:w-7 sm:h-7" />,
      number: "05",
      title: t("services.items.5.title", "Hosting & Perawatan Web (Menyeluruh)"),
      description: t("services.items.5.desc", "Menyediakan tempat penyimpanan data (server/hosting) sekaligus merawat website agar selalu aktif, aman dari peretas, rutin melakukan backup, dan memastikan sistem tidak lelet."),
      features: (t("services.items.5.features", { returnObjects: true }) as string[]) || ["24/7 Uptime", "SSL & Firewall", "Auto Backup", "Speed Optimization"],
      highlight: false,
    },
    {
      icon: <Database className="w-6 h-6 sm:w-7 sm:h-7" />,
      number: "06",
      title: t("services.items.6.title", "Pengumpulan Data & Riset Pasar (Web Scraping)"),
      description: t("services.items.6.desc", "Layanan mengambil data dari internet secara otomatis dan massal (daftar harga kompetitor, ulasan produk, atau kontak bisnis) langsung diubah menjadi file Excel siap pakai untuk strategi bisnismu."),
      features: (t("services.items.6.features", { returnObjects: true }) as string[]) || ["Market Intelligence", "Price Monitoring", "Data Export Excel", "Analisis Kompetitor"],
      highlight: false,
    },
    {
      icon: <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />,
      number: "07",
      title: t("services.items.7.title", "Bantuan Proyek & Tugas Kuliah IT"),
      description: t("services.items.7.desc", "Bimbingan dan jasa pengerjaan tugas kuliah bidang IT, pembuatan basis data, pengerjaan proyek coding berbagai bahasa pemrograman (Python, Java, Web Dev, dll), hingga bantuan tugas akhir atau skripsi."),
      features: (t("services.items.7.features", { returnObjects: true }) as string[]) || ["Python & Java", "Web Dev", "Database", "Skripsi & TA"],
      highlight: false,
    },
  ];

  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-28 lg:py-32 bg-gray-50/50 pixel-dots">
      {/* Maskot Kiri - Muncul dari kiri atas */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: -10, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="absolute left-0 top-2 sm:top-[5%] w-24 sm:w-36 md:w-48 lg:w-56 z-20 pointer-events-none opacity-90 sm:opacity-100"
      >
        <Image 
          src="/images/maskot_pose1.png" 
          alt="Maven Maskot Kiri" 
          width={224} 
          height={224} 
          className="object-contain drop-shadow-2xl w-full h-auto" 
        />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs sm:text-sm font-medium font-[family-name:var(--font-khand-custom)] border border-violet-100 mb-4">
            <span className="w-2 h-2 bg-[#FFBA1F] rounded-sm" />
            {t("services.badge", "7 Layanan Unggulan")}
          </span>
          <h2 className="font-[family-name:var(--font-array-custom)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider mb-3 sm:mb-4">
            {t("services.title1", "Solusi ")}<span className="text-[#FFBA1F]">{t("services.title2", "Teknologi ")}</span>{t("services.title3", "untuk Skala Bisnis Anda")}
          </h2>
          <p className="font-[family-name:var(--font-khand-custom)] text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            {t("services.subtitle", "Dari website hingga AI automation, kami menyediakan solusi end-to-end untuk kebutuhan digital bisnis Anda.")}
          </p>
        </motion.div>

        {/* Top row - 2 highlighted services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
          {services.filter(s => s.highlight).map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 md:p-8 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute top-3 right-4 sm:top-4 sm:right-5 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100/70 font-[family-name:var(--font-array-custom)] select-none group-hover:text-[#FFBA1F]/20 transition-colors">
                {service.number}
              </span>

              <div className="relative z-10">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 mb-4 sm:mb-5 group-hover:bg-violet-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-[family-name:var(--font-array-custom)] text-lg sm:text-xl font-semibold tracking-wide mb-2 sm:mb-3 pr-10 sm:pr-14">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-[family-name:var(--font-khand-custom)] text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-violet-50 text-violet-600 text-[10px] sm:text-xs font-medium font-[family-name:var(--font-khand-custom)]">
                      <span className="w-1 h-1 bg-violet-400 rounded-full" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom grid - 5 remaining services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.filter(s => !s.highlight).map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50/50 transition-all duration-300 relative overflow-hidden"
            >
              <span className="absolute top-2 right-3 sm:top-3 sm:right-4 text-3xl sm:text-4xl font-bold text-gray-100/70 font-[family-name:var(--font-array-custom)] select-none group-hover:text-[#FFBA1F]/20 transition-colors">
                {service.number}
              </span>

              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 mb-3 sm:mb-4 group-hover:bg-violet-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-[family-name:var(--font-array-custom)] text-base sm:text-lg font-semibold tracking-wide mb-2 pr-8 sm:pr-10">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-[family-name:var(--font-khand-custom)] text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {service.features.map((feature, i) => (
                    <span key={i} className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full bg-violet-50 text-violet-600 text-[10px] sm:text-xs font-medium font-[family-name:var(--font-khand-custom)]">
                      <span className="w-1 h-1 bg-violet-400 rounded-full" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-violet-700 transition-colors font-[family-name:var(--font-khand-custom)] text-sm sm:text-base"
          >
            {t("services.cta", "Diskusikan Kebutuhan Anda")} <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
