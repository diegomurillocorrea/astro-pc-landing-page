import { Coverage } from "@/components/landing/coverage";
import { QuoteCalculator } from "@/components/landing/quote-calculator";
import { Reveal } from "@/components/landing/reveal";
import { quoteCopy } from "@/lib/landing-content";

export function QuoteSection() {
  return (
    <section
      id="cotizar"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-20 sm:py-28"
    >
      <div className="shell relative">
        <div className="flex flex-col gap-6 border-b border-paper/12 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <h2 className="t-section text-paper">
              {quoteCopy.titleLead}{" "}
              <span className="text-mint">{quoteCopy.titleTrail}</span>
            </h2>
          </Reveal>
          <Reveal delay={80} className="max-w-sm">
            <p className="text-base leading-relaxed text-paper/70">
              {quoteCopy.body}
            </p>
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-12">
          <QuoteCalculator />
        </Reveal>

        <div className="mt-12">
          <Coverage />
        </div>
      </div>
    </section>
  );
}
