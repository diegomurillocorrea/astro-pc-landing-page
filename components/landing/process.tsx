import { Sparkle } from "@/components/landing/marks";
import { Marquee } from "@/components/landing/marquee";
import { Reveal } from "@/components/landing/reveal";
import { processSteps } from "@/lib/landing-content";

const marqueeWords = processSteps.map((step) => step.title.split(" ")[0]);

export function Process() {
  return (
    <section
      id="proceso"
      className="relative scroll-mt-24 overflow-hidden bg-navy py-20 sm:py-28"
    >
      <div className="shell relative">
        <div className="flex flex-col gap-6 border-b border-paper/12 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal className="flex items-center gap-3 text-mint">
              <Sparkle className="size-3.5" />
              <p className="t-label">Cómo trabajamos · § 06</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="t-section mt-5 text-paper">
                Proceso
                <span className="t-outline ml-4 inline-block">de atención</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140} className="max-w-xs">
            <p className="text-sm leading-relaxed text-paper/60">
              Cuatro pasos, siempre en el mismo orden y siempre frente a ti. Sin
              cajas negras.
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:pb-14">
          {processSteps.map((item, index) => (
            <Reveal
              as="li"
              key={item.step}
              delay={index * 110}
              className="relative border-t-2 border-paper/15 pt-6 lg:even:translate-y-14"
            >
              <span
                aria-hidden="true"
                className={`block font-display text-[clamp(3.25rem,6vw,5rem)] font-extrabold leading-none tracking-[-0.06em] ${
                  index % 2 === 0 ? "text-mint" : "t-outline"
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
          itemClassName="gap-8 pr-8 font-display text-[clamp(1.5rem,4vw,3rem)] font-extrabold uppercase tracking-[-0.03em]"
          markClassName="size-4 shrink-0 text-mint"
        />
      </div>
    </section>
  );
}
