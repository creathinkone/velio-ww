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
  title: "Velio – Oprogramowanie do zarządzania wspólnotami mieszkaniowymi",
  description:
    "Velio to nowoczesny system dla zarządców i zarządów wspólnot mieszkaniowych. Księgowość, płatności, portal właściciela i mobile w jednej platformie. Wypróbuj bezpłatnie.",
  keywords: [
    "zarządzanie wspólnotą",
    "wspólnota mieszkaniowa",
    "zarządca nieruchomości",
    "rozliczenia czynszowe",
    "głosowania uchwał",
  ],
  authors: [{ name: "Velio" }],
  alternates: {
    canonical: "https://velio.watch",
  },
  openGraph: {
    title: "Velio – Oprogramowanie do zarządzania wspólnotami mieszkaniowymi",
    description:
      "Velio to nowoczesny system dla zarządców i zarządów wspólnot mieszkaniowych. Księgowość, płatności, portal właściciela i mobile w jednej platformie.",
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
    title: "Velio – Oprogramowanie do zarządzania wspólnotami mieszkaniowymi",
    description: "Velio to nowoczesny system dla zarządców i zarządów wspólnot mieszkaniowych. Księgowość, płatności, portal właściciela i mobile w jednej platformie.",
  },
  metadataBase: new URL("https://velio.watch"),
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Velio",
      url: "https://velio.watch",
      logo: "https://velio.watch/logo.png",
      description: "Nowoczesny system SaaS do zarządzania wspólnotami mieszkaniowymi.",
    },
    {
      "@type": "SoftwareApplication",
      name: "Velio",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://velio.watch",
      description:
        "System do zarządzania wspólnotami mieszkaniowymi. Księgowość, płatności, portal właściciela, mobile PWA.",
      offers: {
        "@type": "Offer",
        priceCurrency: "PLN",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geist.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
