import { HardwareStage } from "@/components/landing/hardware-stage";
import { BrandLockup } from "@/components/landing/logo";
import { ArrowRight } from "@/components/landing/marks";
import { Reveal } from "@/components/landing/reveal";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";
import { hero, heroStats } from "@/lib/landing-content";
import { fitLineSize } from "@/lib/typography";

const HERO_CAP = "clamp(2rem, 12vw, 7.25rem)";
const BADGE_RESERVE_EM = 1.7;

const lineClass = {
  solid: "text-paper",
  accent: "text-mint",
} as const;

export function Hero() {
  const lastLineIndex = hero.lines.length - 1;

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden border-b border-paper/12 bg-navy"
    >
      <div className="shell relative grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:pb-24 lg:pt-16">
        <div>
          <Reveal>
            <BrandLockup priority showTagline size="lg" />
          </Reveal>

          <h1 className="t-hero relative z-10 mt-8">
            <span className="sr-only">{hero.title}</span>
            <span aria-hidden="true">
              {hero.lines.map((line, index) => (
                <Reveal
                  key={line.text}
                  as="span"
                  delay={80 + index * 80}
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
                    <span className="ml-3 inline-flex -translate-y-[0.28em] items-center rounded-full bg-mint px-4 py-1.5 align-middle font-sans text-[clamp(0.7rem,1.2vw,1.0625rem)] font-semibold normal-case leading-none tracking-normal text-navy">
                      {hero.badge}
                    </span>
                  ) : null}
                </Reveal>
              ))}
            </span>
          </h1>

          <Reveal delay={280} className="mt-8 max-w-xl">
            <p className="text-lg leading-relaxed text-paper/75 sm:text-xl">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:flex-wrap">
              <WhatsAppButton messageKey="schedule">{hero.cta}</WhatsAppButton>
              <a
                href="#cotizar"
                className="group inline-flex items-center gap-2 border-b border-mint/40 pb-1 font-sans text-sm font-semibold text-mint transition-colors hover:border-mint hover:text-paper"
              >
                {hero.quoteCta}
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-paper/12 pt-6">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-[clamp(1.35rem,2.4vw,2.25rem)] font-bold leading-none tracking-tight text-mint">
                      {stat.value}
                    </span>
                    <span className="mt-2 block text-sm font-semibold text-paper">
                      {stat.label}
                    </span>
                    <span className="mt-1 hidden text-xs leading-snug text-paper/62 sm:block">
                      {stat.note}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:pl-4">
          <HardwareStage />
        </Reveal>
      </div>
    </section>
  );
}
