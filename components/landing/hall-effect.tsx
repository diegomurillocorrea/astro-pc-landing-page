import type { CSSProperties } from "react";
import { Brackets, Sparkle } from "@/components/landing/marks";
import { Reveal } from "@/components/landing/reveal";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";
import { hallEffect } from "@/lib/landing-content";

const inkOutline = { "--outline-color": "var(--ink)" } as CSSProperties;

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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/4 size-[30rem] rounded-full border-2 border-ink/[0.07]"
      />

      <div className="shell relative">
        <div className="flex items-center gap-4 border-b border-ink/15 pb-5">
          <Sparkle className="size-3.5 text-cobalt" />
          <p className="t-label text-cobalt">{hallEffect.eyebrow}</p>
          <span className="t-label ml-auto text-ink/68">§ 03</span>
        </div>

        <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="t-display">
                Efecto{" "}
                <span className="t-outline" style={inkOutline}>
                  Hall
                </span>
              </h2>
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
              <WhatsAppButton messageKey="joysticks" variant="ink">
                {hallEffect.cta}
              </WhatsAppButton>
              <p className="flex items-center gap-2 text-sm font-semibold text-cobalt">
                <Brackets className="size-4" />
                {hallEffect.exclusive}
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="flex items-end gap-4 border-t-4 border-ink pt-6">
              <span className="t-numeral text-cobalt">
                {hallEffect.metric.value}
              </span>
              <span className="t-heading pb-2 text-[clamp(1.5rem,3vw,2.25rem)] uppercase text-ink">
                {hallEffect.metric.unit}
              </span>
            </div>
            <p className="mt-3 text-sm text-ink/68">{hallEffect.metric.note}</p>

            <dl className="mt-10">
              {hallEffect.specs.map((spec) => (
                <div
                  key={spec.key}
                  className="flex items-baseline justify-between gap-4 border-t border-dashed border-ink/25 py-3.5 last:border-b"
                >
                  <dt className="t-label text-ink/68">{spec.key}</dt>
                  <dd className="font-display text-sm font-bold uppercase tracking-tight text-ink">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Comparativa: la pieza descartada se lee apagada, la nueva en sólido. */}
        <div className="relative mt-16 grid gap-4 sm:mt-20 sm:grid-cols-2">
          <Reveal
            as="article"
            className="border-2 border-ink/20 bg-transparent p-7 sm:p-9"
          >
                  <p className="t-label text-ink/68 line-through decoration-ink/45 decoration-2">
              {hallEffect.analogLabel}
            </p>
            <h3 className="t-heading mt-6 text-[clamp(1.375rem,2.4vw,1.875rem)] uppercase text-ink/68">
              {hallEffect.analogTitle}
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/68">
              {hallEffect.analogBody}
            </p>
          </Reveal>

          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 z-10 hidden size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink font-display text-sm font-extrabold uppercase tracking-tight text-bone sm:grid"
          >
            vs
          </span>

          <Reveal
            as="article"
            delay={100}
            className="relative overflow-hidden bg-ink p-7 text-bone sm:p-9"
          >
            <Sparkle className="pointer-events-none absolute -bottom-10 -right-8 size-40 text-mint/10" />
            <p className="t-label text-mint">{hallEffect.magneticLabel}</p>
            <h3 className="t-heading mt-6 text-[clamp(1.375rem,2.4vw,1.875rem)] uppercase text-bone">
              {hallEffect.magneticTitle}
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-bone/70">
              {hallEffect.magneticBody}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
