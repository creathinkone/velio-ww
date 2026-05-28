const plans = [
  {
    name: "Starter",
    price: "8 zł",
    period: "/ lokal / mies.",
    range: "20–50 lokali",
    desc: "Dla mniejszych wspólnot stawiających pierwsze kroki z Velio.",
    features: [
      "20–50 lokali",
      "Rozliczenia i windykacja",
      "Portal właściciela",
      "MT940 import",
      "Dokumenty (5 GB)",
    ],
    cta: "Zamów demo",
    ctaHref: "https://calendly.com/[CALENDLY_LINK]",
    highlight: false,
  },
  {
    name: "Growth",
    price: "6 zł",
    period: "/ lokal / mies.",
    range: "51–200 lokali",
    desc: "Dla rozwijających się zarządców obsługujących wiele wspólnot.",
    features: [
      "51–200 lokali",
      "Wszystko ze Starter",
      "Głosowania uchwał",
      "Komunikacja z właścicielami",
      "Priorytetowe wsparcie",
    ],
    cta: "Zamów demo",
    ctaHref: "https://calendly.com/[CALENDLY_LINK]",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Zapytaj",
    period: "o wycenę",
    range: "200+ lokali",
    desc: "Dla dużych zarządców z wieloma wspólnotami i niestandardowymi wymaganiami.",
    features: [
      "200+ lokali",
      "Wszystko z Growth",
      "Płatności online",
      "Dedykowane wsparcie",
      "SLA & custom onboarding",
    ],
    cta: "Skontaktuj się",
    ctaHref: "mailto:michal@velio.watch?subject=Velio Enterprise — zapytanie o wycenę",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[var(--color-surface-low)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--color-muted)]">
            Cennik
          </p>
          <h2 className="text-2xl font-semibold text-[var(--color-fg)] sm:text-3xl">
            Prosty, uczciwy cennik
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-muted)]">
            Płać za lokale, którymi faktycznie zarządzasz. Bez ukrytych opłat.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-[var(--radius-xl)] border p-6 ${
                plan.highlight
                  ? "border-[var(--color-accent)] bg-[var(--color-card)] shadow-md"
                  : "border-[var(--color-border)] bg-[var(--color-card)]"
              }`}
            >
              {plan.highlight && (
                <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                  Najpopularniejszy
                </div>
              )}
              <div className="mb-1 text-lg font-semibold text-[var(--color-fg)]">{plan.name}</div>
              <div className="mb-1 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-[var(--color-fg)]">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm text-[var(--color-muted)]">{plan.period}</span>
                )}
              </div>
              <div className="mb-1 text-xs text-[var(--color-muted)]">{plan.range}</div>
              <p className="mb-6 text-sm text-[var(--color-muted)]">{plan.desc}</p>

              <ul className="mb-8 flex-1 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-fg)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-[var(--color-success)]"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`w-full rounded-[var(--radius)] px-4 py-2.5 text-center text-sm font-medium transition-colors ${
                  plan.highlight
                    ? "bg-[var(--color-accent)] text-[var(--color-accent-fg)] hover:bg-[var(--color-accent-hover)]"
                    : "border border-[var(--color-border)] bg-transparent text-[var(--color-fg)] hover:bg-[var(--color-surface-low)]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[var(--color-muted)]">
          Cena netto + VAT. Minimum 20 lokali.
        </p>
      </div>
    </section>
  );
}
