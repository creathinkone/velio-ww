const APP_URL = "https://app.velio.watch";

export default function CTA() {
  return (
    <section className="bg-[var(--color-primary)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">
          Wypróbuj Velio za darmo
        </h2>
        <p className="mb-8 text-[#c6c6cd]">
          Konfiguracja w 5 minut. Bez karty kredytowej. Bez zobowiązań.
        </p>

        <form
          className="mx-auto mb-4 flex max-w-md flex-col gap-3 sm:flex-row"
          action={`${APP_URL}/auth/signup`}
          method="GET"
        >
          <input
            type="email"
            name="email"
            placeholder="twoj@email.pl"
            className="flex-1 rounded-[var(--radius)] border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/50 outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20"
            aria-label="Adres e-mail"
          />
          <button
            type="submit"
            className="rounded-[var(--radius)] bg-white px-6 py-2.5 text-sm font-medium text-[var(--color-primary)] transition-colors hover:bg-white/90"
          >
            Rozpocznij bezpłatnie
          </button>
        </form>

        <p className="text-xs text-white/40">
          Rejestrując się, akceptujesz{" "}
          <a href="/terms" className="underline hover:text-white/60">
            Regulamin
          </a>{" "}
          i{" "}
          <a href="/privacy" className="underline hover:text-white/60">
            Politykę prywatności
          </a>
          .
        </p>
      </div>
    </section>
  );
}
