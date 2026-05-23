import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
const resources = {
  en: {
    translation: {
      "navbar": {
        "home": "Home",
        "services": "Services",
        "portfolio": "Portfolio",
        "philosophy": "Philosophy",
        "about": "About",
        "blog": "Blog",
        "marketplace": "Marketplace",
        "academic": "Academic",
        "contact": "Contact",
        "menu": "Menu",
        "close": "Close"
      },
      "hero": {
        "badge": "Versatile Engineering Network",
        "title1": "Your Dream",
        "title2": "Website?",
        "subtitle": "We help you build the right ",
        "subtitle_highlight": "Digital Solution",
        "subtitle2": " for your business.",
        "checklist": {
          "title": "Practical IT Solutions",
          "1": "App Development",
          "2": "Business Systems",
          "3": "AI Automation",
          "4": "Hosting & Maintenance",
          "5": "Data Scraping",
          "6": "Academic IT Support"
        },
        "cta": "Custom Project Consultation",
        "all_services": "View All Services"
      },
      "about": {
        "badge": "About Us",
        "title1": "Getting to know ",
        "title2": "MAVEN",
        "subtitle": "Behind the Versatile Engineering Network",
        "p1": "MAVEN stands for Modern Applications & Versatile Engineering Network. Born from our love for software engineering, the name also literally means \"An Expert\". We are a network of tech practitioners dedicated to assembling reliable digital solutions for businesses and academic needs.",
        "p2": "We believe that advanced technology shouldn't feel complicated for business owners. MAVEN's main mission is to bridge that technical gap. We take over all the complexities of code and digital infrastructure management, so you can save time, reduce operational costs, and focus entirely on growth strategies.",
        "stats": {
          "completed": "Completed Projects",
          "clients": "Satisfied Clients",
          "support": "Active Support",
          "security": "Data Security"
        },
        "values_title1": "Values We ",
        "values_title2": "Uphold",
        "values": {
          "focus": "Focus on Solutions",
          "focus_desc": "We don't just write code, but design effective solutions for client business problems.",
          "innovation": "Continuous Innovation",
          "innovation_desc": "Always adopting the latest technologies (AI, Automation, Cloud) to provide a competitive edge.",
          "security": "Security & Privacy",
          "security_desc": "Client and student data is kept confidential. Privacy is our top priority."
        }
      },
      "services": {
        "badge": "7 Core Services",
        "title1": "Technology ",
        "title2": "Solutions ",
        "title3": "for Your Business Scale",
        "subtitle": "From websites to AI automation, we provide end-to-end solutions for your business's digital needs.",
        "cta": "Discuss Your Needs",
        "items": {
          "1": {
            "title": "Custom Website & App Development",
            "desc": "Creation of company profile websites, online stores, or mobile apps built specifically from scratch according to your specific business needs.",
            "features": ["Full-stack Development", "Responsive Design", "Custom CMS", "Mobile App"]
          },
          "2": {
            "title": "Template-based Website (Economical)",
            "desc": "Ready-to-use website solutions with a super fast work process (1-3 days) and pocket-friendly prices. Perfect for SMEs or new businesses that want to appear professional online immediately.",
            "features": ["Ready in 1-3 Days", "Cost-Effective", "Professional", "SEO Ready"]
          },
          "3": {
            "title": "Business Management Systems",
            "desc": "Creation of cashier systems (POS), inventory tracking systems, employee attendance systems, to internal dashboards accessible from mobile or laptop anytime.",
            "features": ["POS System", "Inventory", "Online Attendance", "Realtime Dashboard"]
          },
          "4": {
            "title": "Admin Automation & AI",
            "desc": "Transform manual admin work into automated processes using AI technology and n8n. Example: automatic WhatsApp reply bot, form data sync to WA, and auto-recap order data to Excel.",
            "features": ["WhatsApp Bot", "n8n Automation", "Auto-reporting", "AI Integration"]
          },
          "5": {
            "title": "Web Hosting & Maintenance",
            "desc": "Providing data storage space (server/hosting) while maintaining the website to always be active, safe from hackers, routine backups, and ensuring the system isn't slow.",
            "features": ["24/7 Uptime", "SSL & Firewall", "Auto Backup", "Speed Optimization"]
          },
          "6": {
            "title": "Data Collection & Market Research (Scraping)",
            "desc": "Services to extract data from the internet automatically and in bulk (competitor price lists, product reviews, or business contacts) directly converted to ready-to-use Excel files for your strategy.",
            "features": ["Market Intelligence", "Price Monitoring", "Excel Export", "Competitor Analysis"]
          },
          "7": {
            "title": "IT Project & Academic Task Assistance",
            "desc": "Guidance and services for working on IT field college assignments, database creation, coding projects in various programming languages (Python, Java, Web Dev, etc.), to thesis or final project assistance.",
            "features": ["Python & Java", "Web Dev", "Database", "Thesis & Projects"]
          }
        }
      },
      "process": {
        "badge": "Work Process",
        "title1": "How Do ",
        "title2": "We Work",
        "subtitle": "Four simple steps from idea to finished product.",
        "steps": {
          "1": {
            "title": "Free Consultation",
            "desc": "Tell us your business needs. We will listen, analyze, and provide recommendations for the best solution with no consultation fee."
          },
          "2": {
            "title": "Planning & Design",
            "desc": "Our team designs wireframes, mockups, and system architecture. You will see a preview before the work begins."
          },
          "3": {
            "title": "Development & Testing",
            "desc": "Our engineers start building the system with high quality standards, thorough testing, and regular progress reports."
          },
          "4": {
            "title": "Launch & Support",
            "desc": "The project is launched with ongoing technical support. We ensure everything runs smoothly post-deployment."
          }
        }
      },
      "philosophy": {
        "badge": "Our Philosophy",
        "title1": "Why Choose ",
        "title2": "MAVEN?",
        "subtitle": "Three philosophical pillars that form the foundation of our digital solutions.",
        "pillars": {
          "1": {
            "title": "The Expert",
            "subtitle": "The Expert",
            "description": "Ready-to-use IT solutions. You focus on growing your business, let The Expert handle all technical complexities like servers, errors, and digital systems."
          },
          "2": {
            "title": "The Builder",
            "subtitle": "The Builder",
            "description": "We assemble your abstract business ideas into modern applications and tangible, functional digital systems."
          },
          "3": {
            "title": "Pixel Precision",
            "subtitle": "The Details",
            "description": "Like arranging pixel by pixel, we build every line of code and digital workflow with high-level precision."
          }
        }
      },
      "marketplace": {
        "badge": "Economical Template Website",
        "title1": "Catalog of ",
        "title2": "Instant",
        "title3": " & Economical Websites",
        "subtitle": "Fast and economical solutions for businesses that want to appear professional on the internet in 1-3 days.",
        "coming_soon": "Coming Soon",
        "box_title": "Template Marketplace",
        "box_desc": "We are preparing a collection of ready-to-use website templates. From Online Stores, Company Profiles, to SME Landing Pages.",
        "categories": {
          "1": "Online Store",
          "2": "Company Profile",
          "3": "SME Landing Page",
          "4": "Creative Portfolio"
        }
      },
      "academic": {
        "badge": "MAVEN Academic Support",
        "title1": "Complete IT College Projects ",
        "title2": "Stress-Free",
        "subtitle": "Guidance and services for IT college assignments, database creation, coding projects in various programming languages (Python, Java, Web Dev, etc.), to thesis or final project preparation assistance. 100% privacy and confidentiality guaranteed.",
        "cta": "Send Your College Assignment Details",
        "features": {
          "1": {
            "title": "100% Safe Privacy & Confidentiality",
            "subtitle": ""
          },
          "2": {
            "title": "Complete Code Explanation",
            "subtitle": "Taught until you understand"
          },
          "3": {
            "title": "Revision Facility",
            "subtitle": "If there are issues when running"
          },
          "4": {
            "title": "Multi Programming Languages",
            "subtitle": "Python, Java, JavaScript, PHP, etc."
          },
          "5": {
            "title": "Thesis & Final Project Guidance",
            "subtitle": "From concept to defense"
          }
        }
      },
      "contact": {
        "badge": "Contact Us",
        "title1": "Start Your ",
        "title2": "Digital Step",
        "subtitle": "Consult your technical problems now for free.",
        "form": {
          "name": "Full Name",
          "name_placeholder": "Enter your name",
          "business": "Business / Institution Name",
          "business_optional": "(Optional)",
          "business_placeholder": "Your business name",
          "service": "Required Service",
          "service_options": {
            "1": "Custom Website & App",
            "2": "Economical Template Website",
            "3": "Business Management System",
            "4": "Admin Automation & AI",
            "5": "Hosting & Web Maintenance",
            "6": "Data Collection / Web Scraping",
            "7": "IT Academic Project Assistance",
            "8": "Other"
          },
          "message": "Tell Us Your Problem or Idea",
          "message_placeholder": "Write your needs...",
          "submit": "Send Consultation Form"
        },
        "info": {
          "direct": "Or contact us directly via fast lane:",
          "wa_label": "Business WhatsApp",
          "email_label": "Official Email",
          "ig_label": "Instagram",
          "testimonial": "\"Fast response, professional results, and friendly prices. MAVEN really helped our business go digital!\"",
          "testimonial_author": "— SME Client, Makassar"
        }
      },
      "footer": {
        "description": "Modern Applications & Versatile Engineering Network.<br />One pixel, one line of code, one solution at a time.",
        "services": "Services",
        "navigation": "Navigation",
        "contact": "Contact",
        "copyright": "© 2026 MAVEN. All rights reserved. Built with precision, one pixel at a time.",
        "back_to_top": "Back to Top ↑",
        "service_links": {
          "1": "Custom Website",
          "2": "Template Website",
          "3": "Management System",
          "4": "AI Automation",
          "5": "Hosting & Maintenance",
          "6": "Web Scraping",
          "7": "Academic Support"
        },
        "nav_links": {
          "home": "Home",
          "philosophy": "Philosophy",
          "services": "Services",
          "about": "About Us",
          "marketplace": "Marketplace",
          "contact": "Contact"
        }
      }
    }
  },
  id: {
    translation: {
      "navbar": {
        "home": "Beranda",
        "services": "Layanan",
        "portfolio": "Portofolio",
        "philosophy": "Filosofi",
        "about": "Tentang",
        "blog": "Blog",
        "marketplace": "Marketplace",
        "academic": "Akademik",
        "contact": "Kontak",
        "menu": "Menu",
        "close": "Tutup"
      },
      "hero": {
        "badge": "Versatile Engineering Network",
        "title1": "Website",
        "title2": "Impian Kamu?",
        "subtitle": "Kami bantu wujudkan ",
        "subtitle_highlight": "Solusi Digital",
        "subtitle2": " yang tepat untuk bisnis mu.",
        "checklist": {
          "title": "Solusi IT Praktis",
          "1": "App Development",
          "2": "Business Systems",
          "3": "AI Automation",
          "4": "Hosting & Maintenance",
          "5": "Data Scraping",
          "6": "Academic IT Support"
        },
        "cta": "Konsultasi Proyek Kustom",
        "all_services": "Lihat Semua Layanan"
      },
      "about": {
        "badge": "Tentang Kami",
        "title1": "Mengenal ",
        "title2": "MAVEN",
        "subtitle": "Di Balik Jaringan Rekayasa Teknologi Serbaguna",
        "p1": "MAVEN merupakan singkatan dari Modern Applications & Versatile Engineering Network. Lahir dari kecintaan kami pada dunia rekayasa perangkat lunak, nama ini juga memiliki arti harfiah sebagai \"Seorang Ahli\". Kami adalah jaringan praktisi teknologi yang berdedikasi untuk merakit solusi digital yang andal bagi bisnis maupun kebutuhan akademis.",
        "p2": "Kami percaya bahwa teknologi canggih tidak harus terasa rumit bagi pemilik usaha. Misi utama MAVEN adalah menjembatani kesenjangan teknis tersebut. Kami mengambil alih seluruh kerumitan baris kode dan pengelolaan infrastruktur digital, sehingga Anda dapat menghemat waktu, menekan biaya operasional, dan fokus sepenuhnya pada strategi pertumbuhan.",
        "stats": {
          "completed": "Proyek Selesai",
          "clients": "Klien Puas",
          "support": "Support Aktif",
          "security": "Data Aman"
        },
        "values_title1": "Nilai yang Kami ",
        "values_title2": "Junjung",
        "values": {
          "focus": "Fokus pada Solusi",
          "focus_desc": "Kami tidak hanya menulis kode, tapi merancang solusi yang tepat guna untuk masalah bisnis klien.",
          "innovation": "Inovasi Berkelanjutan",
          "innovation_desc": "Selalu mengadopsi teknologi terbaru (AI, Automation, Cloud) untuk memberikan keunggulan kompetitif.",
          "security": "Keamanan & Privasi",
          "security_desc": "Data klien dan mahasiswa dijaga kerahasiaannya. Privasi adalah prioritas utama kami."
        }
      },
      "services": {
        "badge": "7 Layanan Unggulan",
        "title1": "Solusi ",
        "title2": "Teknologi ",
        "title3": "untuk Skala Bisnis Anda",
        "subtitle": "Dari website hingga AI automation, kami menyediakan solusi end-to-end untuk kebutuhan digital bisnis Anda.",
        "cta": "Diskusikan Kebutuhan Anda",
        "items": {
          "1": {
            "title": "Pembuatan Website & Aplikasi Kustom",
            "desc": "Pembuatan website profil perusahaan (company profile), toko online, atau aplikasi mobile yang dibangun khusus dari nol sesuai dengan kebutuhan spesifik bisnismu.",
            "features": ["Full-stack Development", "Responsive Design", "Custom CMS", "Mobile App"]
          },
          "2": {
            "title": "Website Berbasis Template (Ekonomis)",
            "desc": "Solusi website siap pakai dengan proses pengerjaan super cepat (1–3 hari) dan harga ramah kantong. Sangat cocok untuk UMKM atau bisnis baru yang ingin segera tampil profesional di internet.",
            "features": ["Siap 1-3 Hari", "Hemat Biaya", "Profesional", "SEO Ready"]
          },
          "3": {
            "title": "Sistem Manajemen Bisnis",
            "desc": "Pembuatan sistem kasir (POS), sistem pencatatan stok barang (inventaris), sistem absensi karyawan, hingga dasbor internal yang dapat diakses dari HP atau laptop kapan saja.",
            "features": ["Sistem Kasir POS", "Inventaris Stok", "Absensi Online", "Dashboard Realtime"]
          },
          "4": {
            "title": "Otomatisasi Admin & AI Automation",
            "desc": "Mengubah pekerjaan admin yang manual menjadi otomatis menggunakan teknologi AI dan n8n. Contohnya: bot membalas Whatsapp secara otomatis, sinkronisasi data form ke WA, dan rekap data pesanan otomatis ke Excel.",
            "features": ["WhatsApp Bot", "n8n Automation", "Auto-reporting", "AI Integration"]
          },
          "5": {
            "title": "Hosting & Perawatan Web (Menyeluruh)",
            "desc": "Menyediakan tempat penyimpanan data (server/hosting) sekaligus merawat website agar selalu aktif, aman dari peretas, rutin melakukan backup, dan memastikan sistem tidak lelet.",
            "features": ["24/7 Uptime", "SSL & Firewall", "Auto Backup", "Speed Optimization"]
          },
          "6": {
            "title": "Pengumpulan Data & Riset Pasar (Web Scraping)",
            "desc": "Layanan mengambil data dari internet secara otomatis dan massal (daftar harga kompetitor, ulasan produk, atau kontak bisnis) langsung diubah menjadi file Excel siap pakai untuk strategi bisnismu.",
            "features": ["Market Intelligence", "Price Monitoring", "Data Export Excel", "Analisis Kompetitor"]
          },
          "7": {
            "title": "Bantuan Proyek & Tugas Kuliah IT",
            "desc": "Bimbingan dan jasa pengerjaan tugas kuliah bidang IT, pembuatan basis data, pengerjaan proyek coding berbagai bahasa pemrograman (Python, Java, Web Dev, dll), hingga bantuan tugas akhir atau skripsi.",
            "features": ["Python & Java", "Web Dev", "Database", "Skripsi & TA"]
          }
        }
      },
      "process": {
        "badge": "Proses Kerja",
        "title1": "Bagaimana ",
        "title2": "Kami Bekerja?",
        "subtitle": "Empat langkah sederhana dari ide hingga produk jadi.",
        "steps": {
          "1": {
            "title": "Konsultasi Gratis",
            "desc": "Ceritakan kebutuhan bisnis Anda. Kami akan mendengarkan, menganalisis, dan memberikan rekomendasi solusi terbaik tanpa biaya konsultasi."
          },
          "2": {
            "title": "Perencanaan & Desain",
            "desc": "Tim kami merancang wireframe, mockup, dan arsitektur sistem. Anda akan melihat preview sebelum pengerjaan dimulai."
          },
          "3": {
            "title": "Pengembangan & Testing",
            "desc": "Engineer kami mulai membangun sistem dengan standar kualitas tinggi, testing menyeluruh, dan progress report berkala."
          },
          "4": {
            "title": "Launch & Dukungan",
            "desc": "Proyek diluncurkan dengan dukungan teknis berkelanjutan. Kami memastikan semuanya berjalan lancar pasca-deployment."
          }
        }
      },
      "philosophy": {
        "badge": "Filosofi Kami",
        "title1": "Mengapa Memilih ",
        "title2": "MAVEN?",
        "subtitle": "Tiga pilar filosofi yang menjadi fondasi setiap solusi digital kami.",
        "pillars": {
          "1": {
            "title": "Sang Ahli",
            "subtitle": "The Expert",
            "description": "Solusi IT siap pakai. Anda cukup fokus membesarkan bisnis, biarkan Sang Ahli yang mengurus semua kerumitan teknis seperti server, error, dan sistem digital."
          },
          "2": {
            "title": "Sang Pembangun",
            "subtitle": "The Builder",
            "description": "Kami merakit ide-ide bisnis Anda yang masih abstrak menjadi aplikasi modern dan sistem digital yang nyata serta fungsional."
          },
          "3": {
            "title": "Presisi Pixel",
            "subtitle": "The Details",
            "description": "Layaknya menyusun pixel demi pixel, setiap baris kode dan alur kerja digital Anda kami bangun dengan ketelitian tingkat tinggi."
          }
        }
      },
      "marketplace": {
        "badge": "Website Template Ekonomis",
        "title1": "Katalog Website ",
        "title2": "Instan",
        "title3": " & Ekonomis",
        "subtitle": "Solusi cepat dan hemat untuk bisnis yang ingin langsung tampil profesional di internet dalam waktu 1-3 hari.",
        "coming_soon": "Coming Soon",
        "box_title": "Marketplace Template",
        "box_desc": "Kami sedang menyiapkan koleksi template website siap pakai. Dari Toko Online, Profil Perusahaan, hingga Landing Page UMKM.",
        "categories": {
          "1": "Toko Online",
          "2": "Profil Perusahaan",
          "3": "Landing Page UMKM",
          "4": "Portofolio Kreatif"
        }
      },
      "academic": {
        "badge": "MAVEN Academic Support",
        "title1": "Tuntaskan Proyek Kuliah IT ",
        "title2": "Tanpa Stres",
        "subtitle": "Bimbingan dan jasa pengerjaan tugas kuliah bidang IT, pembuatan basis data, proyek coding berbagai bahasa pemrograman (Python, Java, Web Dev, dll), hingga bantuan persiapan tugas akhir atau skripsi. Privasi dan kerahasiaan dijamin 100%.",
        "cta": "Kirim Detail Tugas Kuliah Anda",
        "features": {
          "1": {
            "title": "Privasi & Kerahasiaan Aman 100%",
            "subtitle": ""
          },
          "2": {
            "title": "Penjelasan Baris Kode Lengkap",
            "subtitle": "Diajarkan sampai paham"
          },
          "3": {
            "title": "Fasilitas Revisi",
            "subtitle": "Jika terdapat kendala saat dijalankan"
          },
          "4": {
            "title": "Multi Bahasa Pemrograman",
            "subtitle": "Python, Java, JavaScript, PHP, dll"
          },
          "5": {
            "title": "Bimbingan Skripsi & TA",
            "subtitle": "Dari konsep hingga sidang"
          }
        }
      },
      "contact": {
        "badge": "Hubungi Kami",
        "title1": "Mulai Langkah ",
        "title2": "Digitalmu",
        "subtitle": "Konsultasikan masalah teknismu sekarang secara gratis.",
        "form": {
          "name": "Nama Lengkap",
          "name_placeholder": "Masukkan nama Anda",
          "business": "Nama Bisnis / Instansi",
          "business_optional": "(Opsional)",
          "business_placeholder": "Nama bisnis Anda",
          "service": "Layanan yang Dibutuhkan",
          "service_options": {
            "1": "Website & Aplikasi Kustom",
            "2": "Website Template Ekonomis",
            "3": "Sistem Manajemen Bisnis",
            "4": "Otomatisasi Admin & AI Automation",
            "5": "Hosting & Perawatan Web",
            "6": "Pengumpulan Data / Web Scraping",
            "7": "Bantuan Proyek Kuliah IT",
            "8": "Lainnya"
          },
          "message": "Ceritakan Masalah atau Ide Anda",
          "message_placeholder": "Tuliskan kebutuhan Anda...",
          "submit": "Kirim Formulir Konsultasi"
        },
        "info": {
          "direct": "Atau hubungi kami langsung via jalur cepat:",
          "wa_label": "WhatsApp Bisnis",
          "email_label": "Email Resmi",
          "ig_label": "Instagram",
          "testimonial": "\"Respon cepat, hasil profesional, dan harga bersahabat. MAVEN beneran bantu bisnis kami go digital!\"",
          "testimonial_author": "— Klien UMKM, Makassar"
        }
      },
      "footer": {
        "description": "Modern Applications & Versatile Engineering Network.<br />Satu pixel, satu baris kode, satu solusi setiap saat.",
        "services": "Layanan",
        "navigation": "Navigasi",
        "contact": "Kontak",
        "copyright": "© 2026 MAVEN. All rights reserved. Built with precision, one pixel at a time.",
        "back_to_top": "Kembali ke Atas ↑",
        "service_links": {
          "1": "Website Kustom",
          "2": "Website Template",
          "3": "Sistem Manajemen",
          "4": "AI Automation",
          "5": "Hosting & Perawatan",
          "6": "Web Scraping",
          "7": "Academic Support"
        },
        "nav_links": {
          "home": "Beranda",
          "philosophy": "Filosofi",
          "services": "Layanan",
          "about": "Tentang Kami",
          "marketplace": "Marketplace",
          "contact": "Kontak"
        }
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "id", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
