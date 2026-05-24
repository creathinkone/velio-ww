import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Velio — zarządzanie wspólnotą mieszkaniową",
  description:
    "Rozliczenia, dokumenty, głosowania i komunikacja z właścicielami — w jednym miejscu. Wypróbuj Velio za darmo.",
  keywords: [
    "zarządzanie wspólnotą",
    "wspólnota mieszkaniowa",
    "zarządca nieruchomości",
    "rozliczenia czynszowe",
    "głosowania uchwał",
  ],
  authors: [{ name: "Velio" }],
  openGraph: {
    title: "Velio — zarządzanie wspólnotą mieszkaniową",
    description:
      "Rozliczenia, dokumenty, głosowania i komunikacja z właścicielami — w jednym miejscu.",
    url: "https://velio.watch",
    siteName: "Velio",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://velio.watch/og-image.png",
        width: 1200,
        height: 630,
        alt: "Velio — zarządzanie wspólnotą mieszkaniową",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velio — zarządzanie wspólnotą mieszkaniową",
    description: "Rozliczenia, dokumenty, głosowania i komunikacja z właścicielami — w jednym miejscu.",
  },
  metadataBase: new URL("https://velio.watch"),
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={`${geist.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
