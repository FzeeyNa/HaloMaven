"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Target, Lightbulb, Zap, Shield, Clock } from "lucide-react";

const stats = [
  { value: "50+", label: "Proyek Selesai", icon: <Zap className="w-4 h-4" /> },
  { value: "30+", label: "Klien Puas", icon: <Users className="w-4 h-4" /> },
  { value: "24/7", label: "Support Aktif", icon: <Clock className="w-4 h-4" /> },
  { value: "100%", label: "Data Aman", icon: <Shield className="w-4 h-4" /> },
];

const values = [
  {
    icon: <Target className="w-5 h-5" />,
    title: "Fokus pada Solusi",
    desc: "Kami tidak hanya menulis kode, tapi merancang solusi yang tepat guna untuk masalah bisnis klien.",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Inovasi Berkelanjutan",
    desc: "Selalu mengadopsi teknologi terbaru (AI, Automation, Cloud) untuk memberikan keunggulan kompetitif.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Keamanan & Privasi",
    desc: "Data klien dan mahasiswa dijaga kerahasiaannya. Privasi adalah prioritas utama kami.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-28 lg:py-32">
      {/* Maskot Kiri - Muncul dari kiri bawah */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: -10, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="absolute left-0 bottom-[5%] sm:bottom-[10%] w-24 sm:w-36 md:w-48 lg:w-56 z-20 pointer-events-none opacity-90 sm:opacity-100"
      >
        <Image 
          src="/images/maskot_pose2.png" 
          alt="Maven Maskot Kiri" 
          width={224} 
          height={224} 
          className="object-contain drop-shadow-2xl w-full h-auto" 
        />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs sm:text-sm font-medium font-[family-name:var(--font-khand-custom)] border border-violet-100 mb-4">
            <span className="w-2 h-2 bg-[#FFBA1F] rounded-full" />
            Tentang Kami
          </span>
          <h2 className="font-[family-name:var(--font-array-custom)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider">
            Mengenal <span className="gradient-text">MAVEN</span>
          </h2>
        </motion.div>

        {/* Main about content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl bg-gray-900 p-6 sm:p-8 md:p-10 overflow-hidden min-h-[280px] sm:min-h-[340px] md:min-h-[400px] flex items-center justify-center">
              {/* Pixel grid overlay */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 grid grid-cols-3 gap-2 opacity-20">
                {Array.from({ length: 9 }, (_, i) => (
                  <div key={i} className="w-2 sm:w-3 h-2 sm:h-3 bg-violet-500 rounded-sm" style={{ opacity: 0.2 + (i * 0.06) }} />
                ))}
              </div>
              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 grid grid-cols-4 gap-1.5 opacity-15">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-violet-600 rounded-sm" style={{ opacity: 0.2 + (i * 0.05) }} />
                ))}
              </div>

              {/* Centered 3D Computer */}
              <motion.div className="relative z-10 animate-float">
                <Image
                  src="/images/komputer.png"
                  alt="MAVEN Tech Setup"
                  width={320}
                  height={320}
                  className="object-contain w-[200px] sm:w-[260px] md:w-[320px] h-auto drop-shadow-2xl"
                  style={{ filter: "drop-shadow(0 0 40px rgba(124, 58, 237, 0.3))" }}
                />
              </motion.div>

              {/* Accent gradients */}
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-violet-600/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-violet-500/10 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-5 sm:gap-6"
          >
            <div>
              <h3 className="font-[family-name:var(--font-array-custom)] text-xl sm:text-2xl font-semibold tracking-wide mb-3 sm:mb-4">
                Di Balik Jaringan Rekayasa Teknologi Serbaguna
              </h3>
              <p className="text-gray-600 font-[family-name:var(--font-khand-custom)] text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                <strong className="text-gray-900">MAVEN</strong> merupakan singkatan dari <em className="text-violet-600">Modern Applications & Versatile Engineering Network</em>. Lahir dari kecintaan kami pada dunia rekayasa perangkat lunak, nama ini juga memiliki arti harfiah sebagai &ldquo;Seorang Ahli&rdquo;. Kami adalah jaringan praktisi teknologi yang berdedikasi untuk merakit solusi digital yang andal bagi bisnis maupun kebutuhan akademis.
              </p>
              <p className="text-gray-600 font-[family-name:var(--font-khand-custom)] text-sm sm:text-base leading-relaxed">
                Kami percaya bahwa teknologi canggih tidak harus terasa rumit bagi pemilik usaha. Misi utama MAVEN adalah menjembatani kesenjangan teknis tersebut. Kami mengambil alih seluruh kerumitan baris kode dan pengelolaan infrastruktur digital, sehingga Anda dapat menghemat waktu, menekan biaya operasional, dan fokus sepenuhnya pada strategi pertumbuhan.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="bg-[#FFBA1F]/10 rounded-xl p-3 sm:p-4 text-center border border-[#FFBA1F]/30"
                >
                  <div className="flex items-center justify-center text-violet-600 mb-1">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 font-[family-name:var(--font-array-custom)]">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 font-[family-name:var(--font-khand-custom)]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <h3 className="font-[family-name:var(--font-array-custom)] text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-center mb-6 sm:mb-8">
            Nilai yang Kami <span className="text-[#FFBA1F]">Junjung</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 hover:border-violet-200 hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 mx-auto mb-3 sm:mb-4">
                {value.icon}
              </div>
              <h4 className="font-[family-name:var(--font-array-custom)] text-base sm:text-lg font-semibold tracking-wide mb-2">{value.title}</h4>
              <p className="text-gray-600 font-[family-name:var(--font-khand-custom)] text-xs sm:text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
