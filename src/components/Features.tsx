const features = [
  {
    icon: "💳",
    title: "Rozliczenia i księgowość",
    desc: "Import wyciągów MT940, automatyczny plan czynszów, historia wpłat. Zero arkuszy.",
    badge: null,
  },
  {
    icon: "👤",
    title: "Portal właściciela",
    desc: "Każdy właściciel ma własne konto z historią wpłat, dokumentami i powiadomieniami.",
    badge: null,
  },
  {
    icon: "🗳️",
    title: "Głosowania uchwał",
    desc: "Weighted voting zgodny z udziałami, ślad audytu i eksport wyników do PDF.",
    badge: null,
  },
  {
    icon: "📁",
    title: "Dokumenty",
    desc: "Centralne repozytorium dokumentów wspólnoty. Upload, wersjonowanie, udostępnianie.",
    badge: null,
  },
  {
    icon: "📣",
    title: "Komunikacja",
    desc: "Ogłoszenia i wiadomości do właścicieli — grupowo lub indywidualnie.",
    badge: "Wkrótce",
  },
  {
    icon: "💸",
    title: "Płatności online",
    desc: "Właściciele opłacają czynsz bezpośrednio przez portal — bez przelewów ręcznych.",
    badge: "Wkrótce",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[var(--color-surface-lowest)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--color-muted)]">
            Funkcje
          </p>
          <h2 className="text-2xl font-semibold text-[var(--color-fg)] sm:text-3xl">
            Wszystko czego potrzebuje zarządca
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-muted)]">
            Jedna platforma zamiast Excela, maili i papierowych protokołów.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="relative rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-shadow hover:shadow-sm"
            >
              {f.badge && (
                <span className="absolute right-4 top-4 rounded-[var(--radius-full)] bg-[var(--color-secondary-container)] px-2 py-0.5 text-xs font-medium text-[var(--color-secondary)]">
                  {f.badge}
                </span>
              )}
              <div className="mb-3 text-2xl" aria-hidden="true">
                {f.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold text-[var(--color-fg)]">{f.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
