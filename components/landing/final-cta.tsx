import SplitText from "@/components/react-bits/split-text";
import { BrandLockup } from "@/components/landing/logo";
import { Reveal } from "@/components/landing/reveal";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";
import { brand, footer } from "@/lib/landing-content";

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

      <div className="shell relative">
        <div className="flex items-center gap-4 border-b-2 border-navy/20 pb-5">
          <span className="pulse-dot size-2 rounded-full bg-navy" />
          <p id="cierre-title" className="text-sm font-semibold">
            {footer.ctaTitle}
          </p>
        </div>

        <SplitText
          tag="h2"
          text={footer.ctaLines.join(" ")}
          className="t-hero mt-12 max-w-5xl text-left text-navy"
          textAlign="left"
          splitType="words"
          delay={50}
        />

        <Reveal
          delay={220}
          className="mt-12 flex flex-col gap-8 border-t-2 border-navy/20 pt-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-navy/70">
            {footer.ctaBody}
          </p>
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <p className="max-w-50 text-sm font-semibold text-navy/70">
              {brand.specialization} en {brand.location}
            </p>
            <WhatsAppButton messageKey="schedule" variant="ink">
              {footer.cta}
            </WhatsAppButton>
          </div>
        </Reveal>

        <div className="mt-12">
          <BrandLockup size="md" tone="on-light" />
        </div>
      </div>
    </section>
  );
}
