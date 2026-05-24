export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface-lowest)] px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold tracking-tight text-[var(--color-primary)]">
              velio
            </span>
            <span className="text-sm text-[var(--color-muted)]">
              © {year} Velio. Wszelkie prawa zastrzeżone.
            </span>
          </div>

          <nav className="flex items-center gap-6" aria-label="Linki stopki">
            <a
              href="/privacy"
              className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
            >
              Polityka prywatności
            </a>
            <a
              href="/terms"
              className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
            >
              Regulamin
            </a>
            <a
              href="mailto:michal@velio.watch"
              className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
            >
              Kontakt
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
