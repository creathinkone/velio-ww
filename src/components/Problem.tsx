const painPoints = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Arkusze Excel gubią dane czynszowe",
    desc: "Ręczne prowadzenie rozliczeń w arkuszach to ryzyko błędów, utrata historii wpłat i brak przejrzystości dla właścicieli.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "Właściciele pytają o stan rozliczeń mailem",
    desc: "Setki pytań o salda, faktury i przelewy — każde wymaga ręcznej odpowiedzi. Zarządca traci czas, właściciel czeka.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
    title: "Uchwały na kartce — brak śladu głosowania",
    desc: "Papierowe głosowania nie mają audytu. Kto głosował? Jak? Kiedy? Spory prawne zaczynają się właśnie od braku dokumentacji.",
  },
];

export default function Problem() {
  return (
    <section className="bg-[var(--color-surface-low)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--color-muted)]">
            Problem
          </p>
          <h2 className="text-2xl font-semibold text-[var(--color-fg)] sm:text-3xl">
            Zarządzanie wspólnotą nie musi boleć
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {painPoints.map((p) => (
            <div
              key={p.title}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-card)] p-6"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius)] bg-[var(--color-danger-bg,#ffdad6)] text-[var(--color-danger)]">
                {p.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold text-[var(--color-fg)]">{p.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
