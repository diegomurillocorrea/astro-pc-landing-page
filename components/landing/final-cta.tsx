import type { CSSProperties } from "react";
import { Sparkle } from "@/components/landing/marks";
import { Reveal } from "@/components/landing/reveal";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";
import { brand, footer } from "@/lib/landing-content";
import { fitLineSize } from "@/lib/typography";

const navyOutline = { "--outline-color": "var(--navy)" } as CSSProperties;
const CTA_CAP = "clamp(2rem, 13vw, 7.25rem)";

export function FinalCta() {
  return (
    <section
      id="cierre"
      aria-labelledby="cierre-title"
      className="section-light relative scroll-mt-24 overflow-hidden bg-mint py-20 text-navy sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 size-152 rounded-full border-2 border-navy/10"
      />
      <Sparkle className="pointer-events-none absolute -bottom-24 -right-16 size-96 text-navy/6" />

      <div className="shell relative">
        <div className="flex items-center gap-4 border-b-2 border-navy/20 pb-5">
          <span className="pulse-dot size-2 rounded-full bg-navy" />
          <p id="cierre-title" className="t-label">
            {footer.ctaTitle}
          </p>
          <span className="t-label ml-auto hidden text-navy/70 sm:block">
            {brand.coords}
          </span>
        </div>

        <h2 className="t-hero mt-12">
          {footer.ctaLines.map((line, index) => (
            <Reveal
              key={line}
              as="span"
              delay={index * 90}
              distance="0.4em"
              className={`block ${index === footer.ctaLines.length - 1 ? "t-outline" : ""}`}
              style={{
                fontSize: fitLineSize(line, CTA_CAP),
                ...(index === footer.ctaLines.length - 1 ? navyOutline : null),
              }}
            >
              {line}
            </Reveal>
          ))}
        </h2>

        <Reveal
          delay={220}
          className="mt-12 flex flex-col gap-8 border-t-2 border-navy/20 pt-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-navy/70">
            {footer.ctaBody}
          </p>
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <p className="t-label max-w-50 text-navy/70">
              {brand.specialization} · {brand.location}
            </p>
            <WhatsAppButton messageKey="schedule" variant="ink">
              {footer.cta}
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
