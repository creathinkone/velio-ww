import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Polityka prywatności — Velio",
  alternates: { canonical: "https://velio.watch/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="mb-6 text-2xl font-semibold text-[var(--color-fg)]">Polityka prywatności</h1>
      <p className="text-[var(--color-muted)]">Treść polityki prywatności zostanie uzupełniona.</p>
      <Link href="/" className="mt-8 inline-block text-sm text-[var(--color-accent)] hover:underline">
        ← Wróć na stronę główną
      </Link>
    </main>
  );
}
