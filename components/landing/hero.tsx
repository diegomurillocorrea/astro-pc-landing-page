import CircularText from "@/components/react-bits/circular-text";
import { HeroThreads } from "@/components/landing/hero-threads";
import { ArrowRight, Sparkle } from "@/components/landing/marks";
import { Reveal } from "@/components/landing/reveal";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";
import { brand, hero, heroStats } from "@/lib/landing-content";
import { fitLineSize } from "@/lib/typography";

const ORBIT_TEXT = "SAN SALVADOR • SERVICIO A DOMICILIO • ";
/** Cada línea crece hasta llenar el ancho, sin pasar de este techo. */
const HERO_CAP = "clamp(2rem, 13vw, 8rem)";
/** Hueco que deja la última línea para la etiqueta "a domicilio". */
const BADGE_RESERVE_EM = 1.7;

const lineClass = {
  solid: "text-paper",
  outline: "t-outline",
  accent: "text-mint",
} as const;

export function Hero() {
  const lastLineIndex = hero.lines.length - 1;

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden border-b border-paper/12 bg-navy"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <HeroThreads />
        <div className="rules absolute inset-0 hidden text-paper opacity-70 sm:block" />
        <div className="absolute -left-40 top-1/3 size-[34rem] rounded-full border border-mint/10" />
        <div className="absolute -left-24 top-1/2 size-72 rounded-full border border-mint/25" />
        <div className="dotted absolute bottom-24 right-[8%] hidden size-40 text-mint lg:block" />
      </div>

      {/* Tira de metadatos: coordenadas reales del área de cobertura. */}
      <div className="relative border-b border-paper/12">
        <div className="shell no-scrollbar flex items-center gap-6 overflow-x-auto py-3">
          <span className="flex shrink-0 items-center gap-2">
            <span className="pulse-dot size-1.5 rounded-full bg-mint" />
            <span className="t-label text-mint">{hero.status}</span>
          </span>
          <span className="t-label shrink-0 text-paper/62">{brand.coords}</span>
          <span className="t-label ml-auto shrink-0 text-paper/62">
            {brand.location}
          </span>
        </div>
      </div>

      <div className="shell relative pb-14 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <span
          aria-hidden="true"
          className="t-label vertical-rl absolute left-2 top-40 hidden text-paper/62 xl:block"
        >
          Especialistas · Astro PC
        </span>

        <div className="relative">
          <Reveal
            className="flex items-center gap-3 text-mint"
            distance="0.75rem"
          >
            <Sparkle className="size-3.5 shrink-0" />
            <p className="t-label">Servicio técnico a domicilio</p>
            <span className="h-px flex-1 bg-mint/25 sm:max-w-40" />
          </Reveal>

          {/* La órbita se cuela detrás del titular para romper el grid. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-6 z-0 hidden lg:block"
          >
            <div className="relative size-[19rem] xl:size-[22rem]">
              <CircularText
                text={ORBIT_TEXT}
                radius={130}
                spinDuration={30}
                onHover="slowDown"
              />
              <div className="absolute inset-[26%] grid place-items-center rounded-full border border-mint/25 bg-navy-mid/70 backdrop-blur-sm">
                <span className="t-label px-4 text-center text-mint">
                  Astro PC
                </span>
              </div>
            </div>
          </div>

          <h1 className="t-hero relative z-10 mt-6">
            <span className="sr-only">{hero.title}</span>
            <span aria-hidden="true">
              {hero.lines.map((line, index) => (
                <Reveal
                  key={line.text}
                  as="span"
                  delay={120 + index * 90}
                  distance="0.5em"
                  className={`block ${lineClass[line.variant as keyof typeof lineClass]}`}
                  style={{
                    fontSize: fitLineSize(
                      line.text,
                      HERO_CAP,
                      index === lastLineIndex ? BADGE_RESERVE_EM : 0,
                    ),
                  }}
                >
                  {line.text}
                  {index === lastLineIndex ? (
                    <span className="ml-3 inline-flex -translate-y-[0.28em] items-center gap-2 rounded-full bg-mint px-4 py-1.5 align-middle font-sans text-[clamp(0.7rem,1.2vw,1.0625rem)] font-semibold normal-case leading-none tracking-normal text-navy">
                      <Sparkle className="size-3" />
                      {hero.badge}
                    </span>
                  ) : null}
                </Reveal>
              ))}
            </span>
          </h1>
        </div>

        <div className="relative z-10 mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
          <Reveal delay={340} className="max-w-xl">
            <p className="text-lg leading-relaxed text-paper/75 sm:text-xl">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton messageKey="schedule">{hero.cta}</WhatsAppButton>
              <a
                href="#servicios"
                className="group inline-flex items-center gap-2 border-b border-paper/25 pb-1 font-display text-sm font-bold uppercase tracking-[0.04em] text-paper transition-colors hover:border-mint hover:text-mint"
              >
                {hero.secondaryCta}
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <dl className="grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-3 sm:gap-x-8">
              {heroStats.map((stat) => (
                <div key={stat.label} className="border-t-2 border-mint/30 pt-4">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-[clamp(1.5rem,2.6vw,3.25rem)] font-extrabold leading-none tracking-[-0.05em] text-mint">
                      {stat.value}
                    </span>
                    <span className="t-label mt-3 block text-paper">
                      {stat.label}
                    </span>
                    <span className="mt-1.5 block text-xs leading-snug text-paper/62">
                      {stat.note}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
