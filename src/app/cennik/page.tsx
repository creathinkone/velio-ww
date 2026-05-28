import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cennik — Velio",
  description:
    "Velio — przejrzysty cennik bez ukrytych opłat. Plany Starter, Pro i Enterprise dla zarządców wspólnot mieszkaniowych. Zacznij bezpłatne 14-dniowe demo.",
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
