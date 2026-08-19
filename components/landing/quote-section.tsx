import { Coverage } from "@/components/landing/coverage";
import { QuoteCalculator } from "@/components/landing/quote-calculator";
import { Sparkle } from "@/components/landing/marks";
import { Reveal } from "@/components/landing/reveal";
import { quoteCopy } from "@/lib/landing-content";

export function QuoteSection() {
  return (
    <section
      id="cotizar"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="dotted pointer-events-none absolute -right-8 top-24 hidden size-48 text-mint opacity-30 lg:block"
      />

      <div className="shell relative">
        <div className="flex flex-col gap-8 border-b border-paper/12 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal className="flex items-center gap-3 text-mint">
              <Sparkle className="size-3.5" />
              <p className="t-label">{quoteCopy.eyebrow}</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="t-section mt-5 text-paper">
                {quoteCopy.titleLead}
                <span className="t-outline ml-4 inline-block">
                  {quoteCopy.titleTrail}
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140} className="max-w-sm">
            <p className="text-base leading-relaxed text-paper/60">
              {quoteCopy.body}
            </p>
            <ol className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {quoteCopy.steps.map((step) => (
                <li key={step.code} className="flex items-baseline gap-2">
                  <span className="t-label text-mint">{step.code}</span>
                  <span className="font-display text-sm font-bold uppercase tracking-tight text-paper">
                    {step.label}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal delay={100} className="mt-12">
          <QuoteCalculator />
        </Reveal>

        <div className="mt-20">
          <Coverage />
        </div>
      </div>
    </section>
  );
}
