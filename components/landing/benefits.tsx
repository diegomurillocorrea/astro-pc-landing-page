import { Sparkle } from "@/components/landing/marks";
import { Reveal } from "@/components/landing/reveal";
import { benefits, metrics } from "@/lib/landing-content";

const benefitTone = [
  {
    shell: "border-2 border-paper/12 bg-navy",
    pad: "pt-14 sm:pt-16 lg:pt-16",
    numeral: "t-outline",
    isNumeralOutside: true,
    title: "text-paper",
    body: "text-paper/65",
  },
  {
    // Ningún color de la paleta se lee a la vez sobre el mint y sobre el fondo
    // de la sección, así que este numeral se queda dentro de la tarjeta.
    shell: "bg-mint",
    pad: "",
    numeral: "text-navy",
    isNumeralOutside: false,
    title: "text-navy",
    body: "text-navy/70",
  },
  {
    shell: "bg-ink",
    pad: "pt-14 sm:pt-16 lg:pt-16",
    numeral: "text-mint",
    isNumeralOutside: true,
    title: "text-paper",
    body: "text-paper/65",
  },
];

const numeralSize =
  "font-display text-[clamp(3.75rem,6.5vw,5.5rem)] font-extrabold leading-none tracking-[-0.06em]";

export function Benefits() {
  return (
    <section className="relative overflow-hidden bg-navy-mid py-20 sm:py-28">
      <div className="shell relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal className="flex items-center gap-3 text-mint">
              <Sparkle className="size-3.5" />
              <p className="t-label">Sin llevar nada al taller · § 04</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="t-section mt-5 max-w-3xl text-paper">
                {benefits.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <p className="t-label max-w-45 text-paper/62 sm:text-right">
              Tres razones para no mover tu equipo
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-3">
          {benefits.items.map((item, index) => {
            const tone = benefitTone[index] ?? benefitTone[0];

            return (
              <Reveal
                as="article"
                key={item.title}
                delay={index * 110}
                className={`relative p-7 lg:p-9 ${tone.pad} ${tone.shell}`}
              >
                <span
                  aria-hidden="true"
                  className={`${numeralSize} ${tone.numeral} ${
                    tone.isNumeralOutside
                      ? "absolute -top-7 left-6 sm:-top-9"
                      : "mb-6 block"
                  }`}
                >
                  0{index + 1}
                </span>
                <h3
                  className={`t-heading text-[clamp(1.125rem,2.4vw,1.75rem)] uppercase ${tone.title}`}
                >
                  {item.title}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed ${tone.body}`}>
                  {item.body}
                </p>
              </Reveal>
            );
          })}
        </div>

        {/* Cifras del servicio: los números mandan, el texto acompaña. */}
        <div className="mt-4 grid gap-px border-y-2 border-paper/12 bg-paper/12 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <Reveal
              key={metric.label}
              delay={index * 90}
              className="bg-navy-mid py-10 lg:px-8"
            >
              <p className="t-numeral text-mint">{metric.value}</p>
              <p className="t-label mt-5 text-paper">{metric.label}</p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-paper/62">
                {metric.note}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
