import { Brackets } from "@/components/landing/marks";
import { HallHardware } from "@/components/landing/hall-hardware";
import { QuoteLink } from "@/components/landing/quote-link";
import { Reveal } from "@/components/landing/reveal";
import { TiltCard } from "@/components/landing/tilt-card";
import { hallEffect } from "@/lib/landing-content";

export function HallEffect() {
  return (
    <section
      id="efecto-hall"
      className="section-light relative scroll-mt-24 overflow-hidden bg-bone py-20 text-ink sm:py-28"
    >
      <div
        aria-hidden="true"
        className="dotted pointer-events-none absolute -left-10 top-16 size-64 text-ink opacity-30"
      />

      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="t-display">{hallEffect.title}</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="t-heading mt-6 max-w-lg text-[clamp(1.125rem,2vw,1.5rem)] text-ink/80">
                {hallEffect.subtitle}
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/65">
                {hallEffect.body}
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-8 flex flex-wrap items-center gap-5">
              <QuoteLink variant="ink">{hallEffect.cta}</QuoteLink>
              <p className="flex items-center gap-2 text-sm font-semibold text-navy">
                <Brackets className="size-4" />
                {hallEffect.exclusive}
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-6">
            <HallHardware />
          </Reveal>
        </div>

        <div className="relative mt-16 grid gap-4 sm:mt-20 sm:grid-cols-2">
          <Reveal as="article">
            <TiltCard className="h-full border-2 border-ink/20 bg-transparent p-7 sm:p-9">
              <p className="text-sm font-semibold text-ink/68 line-through decoration-ink/45 decoration-2">
                {hallEffect.analogLabel}
              </p>
              <h3 className="t-heading mt-6 text-[clamp(1.375rem,2.4vw,1.875rem)] uppercase text-ink/68">
                {hallEffect.analogTitle}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/68">
                {hallEffect.analogBody}
              </p>
            </TiltCard>
          </Reveal>

          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 z-10 hidden size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink font-sans text-sm font-semibold text-bone sm:grid"
          >
            o
          </span>

          <Reveal as="article" delay={100}>
            <TiltCard className="relative h-full overflow-hidden bg-ink p-7 text-bone sm:p-9">
              <p className="text-sm font-semibold text-mint">
                {hallEffect.magneticLabel}
              </p>
              <h3 className="t-heading mt-6 text-[clamp(1.375rem,2.4vw,1.875rem)] uppercase text-bone">
                {hallEffect.magneticTitle}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-bone/70">
                {hallEffect.magneticBody}
              </p>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
