import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Funkcje — Velio",
  description:
    "Odkryj funkcje Velio: księgowość wspólnot, portal właściciela, głosowania uchwał, PWA mobile i JPK. Kompleksowe oprogramowanie dla zarządców.",
  alternates: { canonical: "https://velio.watch/funkcje" },
};

export default function FunkcjePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
