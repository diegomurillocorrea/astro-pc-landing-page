import { Marquee } from "@/components/landing/marquee";
import { Reveal } from "@/components/landing/reveal";
import { TiltCard } from "@/components/landing/tilt-card";
import { processSteps } from "@/lib/landing-content";

const marqueeWords = processSteps.map((step) => step.title);

export function Process() {
  return (
    <section
      id="proceso"
      className="relative scroll-mt-24 overflow-hidden bg-navy py-20 sm:py-28"
    >
      <div className="shell relative">
        <div className="flex flex-col gap-6 border-b border-paper/12 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <h2 className="t-section text-paper">
              Así
              <span className="ml-3 inline-block text-mint">vamos</span>
            </h2>
          </Reveal>
          <Reveal delay={80} className="max-w-xs">
            <p className="text-sm leading-relaxed text-paper/60">
              Cuatro pasos, siempre en el mismo orden y siempre frente a ti. Sin
              sorpresas.
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:pb-14">
          {processSteps.map((item, index) => (
            <Reveal
              as="li"
              key={item.step}
              delay={index * 110}
              className="lg:even:translate-y-14"
            >
              <TiltCard className="h-full border-t-2 border-paper/15 pt-6">
                <span
                  aria-hidden="true"
                  className={`block font-mono text-[clamp(3.25rem,6vw,5rem)] font-semibold leading-none tracking-[-0.06em] ${
                    index % 2 === 0 ? "text-mint" : "text-paper/40"
                  }`}
                >
                  {item.step}
                </span>
                <h3 className="t-heading mt-5 text-lg uppercase text-paper">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">
                  {item.body}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </ol>
      </div>

      <div className="mt-20 border-y border-paper/12 py-5">
        <Marquee
          items={marqueeWords}
          duration={30}
          reverse
          className="text-paper/25"
          itemClassName="gap-8 pr-8 font-display text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase tracking-[-0.03em]"
          markClassName="size-4 shrink-0 text-mint"
        />
      </div>
    </section>
  );
}
