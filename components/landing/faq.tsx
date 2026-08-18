import { Plus, Sparkle } from "@/components/landing/marks";
import { Reveal } from "@/components/landing/reveal";
import { faqs, guarantees } from "@/lib/landing-content";

export function Faq() {
  return (
    <section
      id="preguntas"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="dotted pointer-events-none absolute bottom-10 left-[6%] hidden size-40 text-mint opacity-40 lg:block"
      />

      <div className="shell relative">
        <div className="border-b border-paper/12 pb-10">
          <Reveal className="flex items-center gap-3 text-mint">
            <Sparkle className="size-3.5" />
            <p className="t-label">Respaldo · § 06</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="t-section mt-5 text-paper">
              Garantías
              <span className="t-outline ml-4 inline-block">y preguntas</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal as="ul" className="space-y-6">
              {guarantees.map((item, index) => (
                <li key={item.title} className="border-l-2 border-mint pl-5">
                  <p className="t-label text-mint">G-0{index + 1}</p>
                  <h3 className="t-heading mt-2 text-lg uppercase text-paper">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-paper/60">
                    {item.body}
                  </p>
                </li>
              ))}
            </Reveal>
          </div>

          <Reveal delay={100} className="border-t border-paper/15">
            {faqs.map((item, index) => (
              <details
                key={item.question}
                className="group border-b border-paper/15"
              >
                <summary className="flex cursor-pointer list-none items-start gap-4 py-6 sm:gap-6">
                  <span className="t-label shrink-0 pt-2 text-mint">
                    0{index + 1}
                  </span>
                  <span className="t-heading flex-1 text-[clamp(1.0625rem,1.9vw,1.5rem)] text-paper transition-colors group-hover:text-mint">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-paper/25 text-mint transition-all duration-300 group-open:rotate-45 group-open:border-mint group-open:bg-mint group-open:text-navy"
                  >
                    <Plus className="size-3.5" />
                  </span>
                </summary>
                <p className="pb-7 text-sm leading-relaxed text-paper/65 sm:pl-13 sm:pr-15">
                  {item.answer}
                </p>
              </details>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
