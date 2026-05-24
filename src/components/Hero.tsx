const APP_URL = "https://app.velio.watch";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface-lowest)] px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-[var(--radius-full)] border border-[var(--color-border)] bg-[var(--color-surface-low)] px-4 py-1.5 text-xs font-medium text-[var(--color-muted)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-success)]" aria-hidden="true" />
          Używany przez zarządy w całej Polsce
        </div>

        <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
          Zarządzaj wspólnotą&nbsp;
          <span className="text-[var(--color-accent)]">mieszkaniową</span>
          <br />
          bez chaosu
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-[var(--color-on-surface-variant)] sm:text-xl">
          Rozliczenia, dokumenty, głosowania i komunikacja z właścicielami — w jednym miejscu.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`${APP_URL}/auth/signup`}
            className="w-full rounded-[var(--radius)] bg-[var(--color-accent)] px-6 py-3 text-base font-medium text-[var(--color-accent-fg)] transition-colors hover:bg-[var(--color-accent-hover)] sm:w-auto"
          >
            Rozpocznij bezpłatnie
          </a>
          <a
            href="#features"
            className="w-full rounded-[var(--radius)] border border-[var(--color-border)] bg-transparent px-6 py-3 text-base font-medium text-[var(--color-fg)] transition-colors hover:bg-[var(--color-surface-low)] sm:w-auto"
          >
            Zobacz funkcje
          </a>
        </div>

        {/* Social proof */}
        <p className="mt-8 text-sm text-[var(--color-muted)]">
          Bezpłatna wersja próbna · Bez karty kredytowej · Konfiguracja w 5 minut
        </p>
      </div>
    </section>
  );
}
