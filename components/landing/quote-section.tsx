import { Coverage } from "@/components/landing/coverage";
import { QuoteCalculator } from "@/components/landing/quote-calculator";
import { Reveal } from "@/components/landing/reveal";
import { quoteCopy } from "@/lib/landing-content";

export function QuoteSection() {
  return (
    <section
      id="cotizar"
      className="relative scroll-mt-24 overflow-x-clip bg-ink py-20 sm:py-28"
    >
      <div className="shell relative">
        <div className="border-b border-paper/12 pb-10">
          <Reveal>
            <h2 className="t-section text-paper">
              {quoteCopy.titleLead}{" "}
              <span className="text-mint">{quoteCopy.titleTrail}</span>
            </h2>
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
