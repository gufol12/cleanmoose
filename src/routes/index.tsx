import { createFileRoute } from "@tanstack/react-router";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import heroSeat from "@/assets/hero-seat.jpg";
import serviceCar from "@/assets/service-car.jpg";
import serviceSofa from "@/assets/service-sofa.jpg";
import serviceOzone from "@/assets/service-ozone.jpg";
import beforeSeat from "@/assets/before-seat.jpg";
import afterSeat from "@/assets/after-seat-matched.jpg";
import logo from "@/assets/clean-moose-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clean Moose — Profesjonalne Czyszczenie Tapicerki Modlnica" },
      {
        name: "description",
        content:
          "Pranie tapicerki samochodowej, czyszczenie dywanów i mebli, ozonowanie w Modlnicy i okolicach. Dojazd do klienta. Zadzwoń 511 173 472.",
      },
      { property: "og:title", content: "Clean Moose — Czyszczenie Tapicerki Modlnica" },
      {
        property: "og:description",
        content:
          "Profesjonalne pranie tapicerki samochodowej, dywanów, mebli i ozonowanie. Modlnica i okolice.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Clean Moose",
          image: "/og-image.jpg",
          telephone: "+48511173472",
          address: {
            "@type": "PostalAddress",
            streetAddress: "ul. Leśna 7",
            postalCode: "32-085",
            addressLocality: "Modlnica",
            addressCountry: "PL",
          },
          openingHours: "Mo-Fr 09:00-18:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "30",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    img: serviceCar,
    title: "Pranie tapicerki samochodowej",
    desc: "Auto wygląda jak nowe. Usuwamy nawet tłuste plamy z jasnej tapicerki i odświeżamy całe wnętrze.",
    cta: "Wycena darmowa",
  },
  {
    img: serviceSofa,
    title: "Czyszczenie dywanów i mebli",
    desc: "Ekspresowa obsługa w Twoim domu. Dywany odzyskują puszystość i głębię koloru jak z salonu.",
    cta: "Zamów pranie",
  },
  {
    img: serviceOzone,
    title: "Ozonowanie wnętrz",
    desc: "Pełna neutralizacja zapachów papierosów, zwierząt i pleśni. Czyste powietrze bez chemii.",
    cta: "Dowiedz się więcej",
  },
];

const reviews = [
  {
    text: "Pełen profesjonalizm... auto od razu wygląda jak nowe. Bardzo solidne podejście do pracy.",
    name: "Bartosz",
  },
  {
    text: "Dywan wyczyszczony tak, że wygląda na nowy. Zapach świeżości unosi się w całym salonie.",
    name: "Ireneusz",
  },
  {
    text: "Zero plam, ekspresowa obsługa. Super ozonowanie, pozbyłam się zapachu po poprzednim właścicielu.",
    name: "Izabela",
  },
];

const pillars = [
  {
    icon: "✓",
    title: "Dojazd do klienta",
    desc: "Oszczędzaj czas – to my przyjeżdżamy do Ciebie z pełnym profesjonalnym sprzętem.",
  },
  {
    icon: "✦",
    title: "Skuteczność Premium",
    desc: "Najmocniejsze ekstraktory Kärcher i dedykowana chemia, bezpieczna dla alergików.",
  },
  {
    icon: "⌚",
    title: "Punktualność",
    desc: "Cenimy Twój czas tak samo jak nasz. Jesteśmy zawsze o umówionej godzinie.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-3">
            <img src={logo.url} alt="Clean Moose" className="h-14 w-auto" width={200} height={80} />
            <span className="sr-only">Clean Moose</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#uslugi" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Usługi
            </a>
            <a href="#o-nas" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              O nas
            </a>
            <a href="#opinie" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Opinie
            </a>
            <a href="#kontakt" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Kontakt
            </a>
          </nav>
          <a
            href="tel:511173472"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2 text-sm font-medium text-background transition-transform active:scale-95"
          >
            <span aria-hidden className="opacity-70">📞</span>
            511 173 472
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative py-20 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col justify-center">
              <div className="mb-8 flex items-center gap-3">
                <div aria-hidden className="flex gap-0.5 text-brand-moss">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  5.0 w Google
                </span>
              </div>
              <h1 className="max-w-[18ch] text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Profesjonalne Czyszczenie Tapicerki – Modlnica i okolice
              </h1>
              <p className="mt-8 max-w-[48ch] text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                Przywracamy meblom i wnętrzom aut wygląd nowości. Dojazd do klienta, usuwanie trudnych plam i bezkompromisowa jakość w Twoim domu.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#kontakt"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-moss px-8 text-sm font-semibold text-primary-foreground ring-1 ring-brand-moss transition-colors hover:bg-brand-moss/90"
                >
                  Zarezerwuj termin
                </a>
                <a
                  href="tel:511173472"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-card px-8 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Zadzwoń
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroSeat}
                alt="Czysta tapicerka samochodowa po praniu ekstrakcyjnym"
                width={1200}
                height={1600}
                className="aspect-[3/4] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)] ring-1 ring-border"
              />
              <div className="absolute -bottom-6 -left-6 max-w-[220px] rounded-2xl bg-card p-6 shadow-[var(--shadow-card)] ring-1 ring-border">
                <p className="text-sm font-medium leading-snug">
                  Usunięte zabrudzenia, których inni nie mogli ruszyć.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="uslugi" className="bg-surface-elevated py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-moss">
                Specjalizacje
              </span>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Nasze Usługi</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="flex flex-col rounded-3xl bg-card p-4 ring-1 ring-border transition-shadow hover:shadow-[var(--shadow-card)]"
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="aspect-video w-full rounded-xl object-cover"
                  />
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                    <a href="#kontakt" className="mt-6 text-sm font-semibold text-brand-moss">
                      {s.cta} →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section className="bg-surface-elevated py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 flex flex-col items-start gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-moss">
                Efekty naszej pracy
              </span>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Zobacz różnicę na własne oczy
              </h2>
              <p className="max-w-[60ch] text-pretty text-muted-foreground">
                Przesuń suwak, aby porównać stan tapicerki przed i po profesjonalnym czyszczeniu ekstrakcyjnym.
              </p>
            </div>
            <BeforeAfterSlider
              beforeSrc={beforeSeat}
              afterSrc={afterSeat}
              beforeAlt="Tapicerka samochodowa przed czyszczeniem – widoczne plamy i zabrudzenia"
              afterAlt="Tapicerka samochodowa po czyszczeniu – czysta i odświeżona"
            />
          </div>
        </section>

        {/* Trust */}
        <section id="o-nas" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-moss">
                Dlaczego Clean Moose
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Trzy powody, dla których nas polecają
              </h2>
            </div>
            <div className="grid gap-12 md:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.title} className="flex flex-col gap-4">
                  <div className="grid size-10 place-items-center rounded-lg bg-secondary text-brand-moss">
                    {p.icon}
                  </div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="max-w-[40ch] text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="opinie" className="bg-brand-moss py-24 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                Opinie Google
              </span>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Zaufali nam mieszkańcy Modlnicy
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {reviews.map((r) => (
                <figure
                  key={r.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
                >
                  <div aria-hidden className="mb-4 text-sm text-white/70">★★★★★</div>
                  <blockquote className="text-pretty text-lg italic leading-relaxed text-white/90">
                    „{r.text}”
                  </blockquote>
                  <figcaption className="mt-8 text-sm font-semibold">— {r.name}</figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-12">
              <a
                href="https://www.google.com/search?q=Clean+Moose+Modlnica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b border-white/40 pb-1 text-sm font-semibold text-white/90 transition-colors hover:text-white"
              >
                Zobacz wszystkie opinie →
              </a>
            </div>
          </div>
        </section>

        {/* Contact + Map */}
        <section id="kontakt" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-moss">
                  Kontakt
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  Szybka rezerwacja
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Wypełnij formularz, oddzwonimy w ciągu 15 minut.
                </p>

                <form
                  className="mt-10 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = "tel:511173472";
                  }}
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      required
                      placeholder="Imię"
                      className="h-12 w-full rounded-lg bg-secondary px-4 text-sm ring-1 ring-border focus:outline-none focus:ring-2 focus:ring-brand-moss"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Telefon"
                      className="h-12 w-full rounded-lg bg-secondary px-4 text-sm ring-1 ring-border focus:outline-none focus:ring-2 focus:ring-brand-moss"
                    />
                  </div>
                  <select
                    defaultValue=""
                    required
                    className="h-12 w-full rounded-lg bg-secondary px-4 text-sm ring-1 ring-border focus:outline-none focus:ring-2 focus:ring-brand-moss"
                  >
                    <option value="" disabled>Rodzaj usługi</option>
                    <option>Pranie tapicerki samochodowej</option>
                    <option>Czyszczenie dywanów i mebli</option>
                    <option>Ozonowanie</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-brand-moss py-4 text-sm font-semibold text-primary-foreground transition-transform active:scale-[0.98]"
                  >
                    Wyślij zapytanie
                  </button>
                </form>

                <div className="mt-12">
                  <a
                    href="tel:511173472"
                    className="inline-flex h-16 w-full items-center justify-center gap-3 rounded-lg border border-brand-moss bg-transparent px-6 text-xl font-semibold text-brand-moss transition-colors hover:bg-brand-moss-soft"
                  >
                    📞 Zadzwoń: 511 173 472
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="aspect-square w-full overflow-hidden rounded-3xl ring-1 ring-border">
                  <iframe
                    title="Clean Moose – mapa Modlnica"
                    src="https://www.google.com/maps?q=Le%C5%9Bna+7,+32-085+Modlnica&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                  />
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <p className="text-sm font-semibold">Nasza lokalizacja</p>
                  <p className="mt-2 text-sm text-muted-foreground">ul. Leśna 7, 32-085 Modlnica</p>
                  <p className="mt-4 text-sm font-semibold">Godziny pracy</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Poniedziałek – Piątek: od 09:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-surface-elevated py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <img src={logo.url} alt="Clean Moose" className="h-12 w-auto" width={160} height={64} />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Najwyższej klasy usługi czyszczenia ekstrakcyjnego dla wymagających klientów w Modlnicy i okolicach Krakowa.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Usługi
              </h3>
              <ul className="space-y-2 text-sm">
                <li>Czyszczenie tapicerki Modlnica</li>
                <li>Pranie tapicerki samochodowej Modlnica</li>
                <li>Pranie dywanów</li>
                <li>Ozonowanie</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Kontakt
              </h3>
              <p className="text-sm">ul. Leśna 7, 32-085 Modlnica</p>
              <p className="text-sm">
                <a href="tel:511173472" className="font-medium hover:text-brand-moss">
                  tel. 511 173 472
                </a>
              </p>
              <p className="text-sm text-muted-foreground">Pon – Pt od 09:00</p>
            </div>
          </div>
          <div className="mt-16 border-t border-border pt-8">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
              © {new Date().getFullYear()} Clean Moose. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
