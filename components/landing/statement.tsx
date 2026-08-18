import { ArrowUpRight, Sparkle } from "@/components/landing/marks";
import { Marquee } from "@/components/landing/marquee";
import { Reveal } from "@/components/landing/reveal";
import { marqueeItems, specialization } from "@/lib/landing-content";

export function Statement() {
  return (
    <section
      aria-labelledby="especializacion-title"
      className="relative overflow-hidden bg-ink"
    >
      {/* Cinta inclinada: pura decoración tipográfica entre el hero y el bloque. */}
      <div className="relative z-10 -mt-px origin-center rotate-[-1.15deg] scale-[1.04] border-y-2 border-navy bg-mint py-3 sm:py-4">
        <Marquee
          items={marqueeItems}
          duration={38}
          className="text-navy"
          itemClassName="gap-6 pr-6 font-display text-[clamp(1.125rem,2.4vw,2rem)] font-extrabold uppercase tracking-[-0.02em]"
          markClassName="size-3 shrink-0 sm:size-4"
        />
      </div>

      <div className="shell relative py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-10 select-none font-display text-[14rem] font-extrabold leading-none tracking-tighter text-paper/3 sm:text-[22rem]"
        >
          03
        </div>

        <Reveal className="flex items-center gap-3 text-mint">
          <Sparkle className="size-3.5" />
          <p id="especializacion-title" className="t-label">
            {specialization.title} · § 01
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="t-display mt-6 max-w-5xl text-paper">
            {specialization.headline}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <div className="lg:order-2">
            <Reveal delay={160}>
              <p className="max-w-md text-base leading-relaxed text-paper/60">
                {specialization.body}
              </p>
            </Reveal>

            <Reveal
              delay={200}
              className="mt-10 border-t border-paper/12 pt-6 lg:mt-14"
            >
              <p className="t-label text-paper/62">
                {specialization.excludedTitle}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {specialization.excluded.map((item) => (
                  <li
                    key={item}
                          className="border border-paper/12 px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wide text-paper/62 line-through decoration-paper/50 decoration-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-paper/62">
                {specialization.excludedNote}
              </p>
            </Reveal>
          </div>

          <div className="lg:order-1">
            <Reveal as="ul" delay={120} className="border-t border-paper/12">
              {specialization.supported.map((item) => (
                <li key={item.code} className="border-b border-paper/12">
                  <a
                    href={item.href}
                    className="group flex items-center gap-5 py-6 sm:gap-8"
                  >
                        <span className="t-label shrink-0 text-mint">
                      {item.code}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="t-heading block text-[clamp(1.5rem,3.4vw,2.75rem)] uppercase text-paper transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 group-hover:text-mint">
                        {item.label}
                      </span>
                      <span className="mt-1.5 block text-sm text-paper/62">
                        {item.note}
                      </span>
                    </span>
                    <ArrowUpRight className="size-5 shrink-0 text-paper/25 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-mint" />
                  </a>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
