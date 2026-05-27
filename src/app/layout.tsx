import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const array = localFont({
  src: "./fonts/Array-Regular.woff2",
  variable: "--font-array-custom",
  display: "swap",
});

const khand = localFont({
  src: "./fonts/Khand-Variable.woff2",
  variable: "--font-khand-custom",
  display: "swap",
});

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi-custom",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAVEN — Modern Applications & Versatile Engineering Network",
  description:
    "Urusan IT Bisnis Anda, Biar Ahlinya yang Selesai. MAVEN merakit website profesional, aplikasi kustom, dan sistem otomatisasi pintar untuk bisnis Anda.",
  keywords: [
    "software house",
    "software house indonesia",
    "web development",
    "aplikasi kustom",
    "custom software",
    "AI automation",
    "MAVEN",
    "jasa pembuatan website",
    "startup teknologi",
    "IT consultant",
    "digital transformation",
  ],
  authors: [{ name: "MAVEN Team" }],
  creator: "MAVEN",
  publisher: "MAVEN",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "MAVEN — Modern Applications & Versatile Engineering Network",
    description:
      "Urusan IT Bisnis Anda, Biar Ahlinya yang Selesai. Kami merakit website profesional, aplikasi kustom, dan sistem otomatisasi pintar.",
    siteName: "MAVEN",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAVEN — Modern Applications & Versatile Engineering Network",
    description:
      "Urusan IT Bisnis Anda, Biar Ahlinya yang Selesai. MAVEN merakit website profesional, aplikasi kustom, dan sistem otomatisasi pintar.",
    creator: "@maventech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { I18nProvider } from "@/components/i18n-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${array.variable} ${khand.variable} ${satoshi.variable} antialiased`}
      >
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
