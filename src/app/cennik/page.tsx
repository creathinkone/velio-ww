import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cennik Velio — system dla wspólnot mieszkaniowych",
  description:
    "Przejrzysty cennik Velio bez ukrytych opłat. Starter 8 zł/lokal (20–50 lokali), Growth 6 zł/lokal (51–200 lokali). Zamów demo i zacznij zarządzać wspólnotą efektywnie.",
  alternates: { canonical: "https://velio.watch/cennik" },
};

export default function CennikPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
