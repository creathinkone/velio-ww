import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Velio – Oprogramowanie do zarządzania wspólnotami mieszkaniowymi",
  description:
    "Velio to nowoczesny system dla zarządców i zarządów wspólnot mieszkaniowych. Księgowość, płatności, portal właściciela i mobile w jednej platformie. Wypróbuj bezpłatnie.",
  alternates: { canonical: "https://velio.watch/" },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
