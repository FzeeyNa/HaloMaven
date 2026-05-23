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
    "web development",
    "aplikasi kustom",
    "AI automation",
    "MAVEN",
    "jasa pembuatan website",
    "startup teknologi",
  ],
  openGraph: {
    title: "MAVEN — Modern Applications & Versatile Engineering Network",
    description:
      "Urusan IT Bisnis Anda, Biar Ahlinya yang Selesai. Kami merakit website profesional, aplikasi kustom, dan sistem otomatisasi pintar.",
    siteName: "MAVEN",
    locale: "id_ID",
    type: "website",
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
