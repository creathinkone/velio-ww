import Link from "next/link";

const APP_URL = "https://app.velio.watch";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Velio — strona główna">
          <span className="text-xl font-semibold tracking-tight text-[var(--color-primary)]">
            velio
          </span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex" aria-label="Nawigacja główna">
          <a
            href="#features"
            className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
          >
            Funkcje
          </a>
          <a
            href="#pricing"
            className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
          >
            Cennik
          </a>
          <a
            href={APP_URL}
            className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
          >
            Zaloguj się
          </a>
        </nav>

        <a
          href={`${APP_URL}/auth/signup`}
          className="rounded-[var(--radius)] bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-[var(--color-accent-fg)] transition-colors hover:bg-[var(--color-accent-hover)]"
        >
          Rozpocznij bezpłatnie
        </a>
      </div>
    </header>
  );
}
