import { LandingLightfall } from "@/components/landing/landing-lightfall";
import { Reveal } from "@/components/landing/reveal";
import { footer } from "@/lib/landing-content";

const CTA_CAP = "clamp(2.5rem, 10vw, 10rem)";
const CTA_CHAR_RATIO = 0.65;
const longestCtaLine = footer.ctaLines.reduce(
  (longest, line) => (line.length > longest.length ? line : longest),
  "",
);
const ctaSize = `min(${CTA_CAP}, calc(100cqw / ${(longestCtaLine.length * CTA_CHAR_RATIO).toFixed(2)}))`;

export function FinalCta() {
  return (
    <section
      id="cierre"
      aria-label={footer.ctaLines.join(". ")}
      className="section-light relative flex min-h-[min(78vh,52rem)] scroll-mt-24 items-center overflow-hidden bg-mint py-20 text-navy sm:py-28"
    >
      <LandingLightfall />

      <div className="shell relative z-1 w-full">
        <h2 className="@container mx-auto w-full text-center">
          {footer.ctaLines.map((line, index) => (
            <Reveal
              key={line}
              as="span"
              delay={80 + index * 70}
              distance="0.5em"
              className="t-hero block whitespace-nowrap text-navy"
              style={{
                fontSize: ctaSize,
                lineHeight: 0.86,
                textWrap: "nowrap",
              }}
            >
              {line}
            </Reveal>
          ))}
        </h2>
      </div>
    </section>
  );
}
