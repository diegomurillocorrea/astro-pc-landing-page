import { ArrowRight, Plus } from "@/components/landing/marks";
import {
  DualSenseMark,
  PcMark,
  Ps5Mark,
} from "@/components/landing/hardware-art";
import { QuoteLink } from "@/components/landing/quote-link";
import { Reveal } from "@/components/landing/reveal";
import { TiltCard } from "@/components/landing/tilt-card";
import {
  joystickService,
  maintenanceServices,
  quoteCopy,
  serviceCta,
} from "@/lib/landing-content";

const cardTone = [
  {
    shell: "border-2 border-paper/12 bg-navy-mid text-paper",
    price: "text-mint",
    meta: "text-paper/62",
    body: "text-paper/70",
    mark: "text-mint",
    buttonVariant: "outline" as const,
    badge: "bg-mint text-navy",
    hardware: "text-paper/25",
    Hardware: Ps5Mark,
  },
  {
    shell: "section-light border-2 border-ink bg-bone text-ink",
    price: "text-ink",
    meta: "text-ink/68",
    body: "text-ink/70",
    mark: "text-navy",
    buttonVariant: "ink" as const,
    badge: "bg-ink text-mint",
    hardware: "text-navy/15",
    Hardware: PcMark,
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="relative scroll-mt-24 overflow-hidden bg-navy py-20 sm:py-28"
    >
      <div className="shell relative">
        <div className="flex flex-col gap-6 border-b border-paper/12 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <h2 className="t-section text-paper">
              Qué hacemos
              <span className="ml-3 inline-block text-mint">y cuánto sale</span>
            </h2>
          </Reveal>
          <Reveal delay={80} className="max-w-sm">
            <p className="text-base leading-relaxed text-paper/70">
              Desde $65 para PS5 y PC. El mando se cotiza según cuántas
              palancas hay que cambiar.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {maintenanceServices.map((service, index) => {
            const tone = cardTone[index] ?? cardTone[0];
            const Hardware = tone.Hardware;

            return (
              <Reveal
                key={service.id}
                delay={index * 100}
                className="lg:col-span-6"
              >
                <TiltCard
                  className={`relative flex h-full flex-col overflow-hidden p-7 sm:p-9 ${tone.shell}`}
                >
                  <Hardware
                    className={`pointer-events-none absolute -right-4 -bottom-6 h-36 w-36 ${tone.hardware}`}
                  />
                  <span
                    className={`absolute top-6 right-6 rounded-full px-3 py-1 text-xs font-semibold ${tone.badge}`}
                  >
                    Desde
                  </span>
                  <h3 className="t-heading relative max-w-[16ch] text-[clamp(1.375rem,2.4vw,1.875rem)] uppercase">
                    {service.title}
                  </h3>
                  <p
                    className={`relative mt-8 font-display text-[clamp(2.5rem,7vw,5rem)] font-bold leading-none tracking-tight ${tone.price}`}
                  >
                    {service.price}
                  </p>
                  <p className={`relative mt-2 text-sm ${tone.meta}`}>
                    por visita
                  </p>
                  <ul className="relative mt-8 flex-1 space-y-4 text-sm leading-relaxed">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <Plus
                          className={`mt-0.5 size-3.5 shrink-0 ${tone.mark}`}
                        />
                        <span className={tone.body}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative mt-9">
                    <QuoteLink variant={tone.buttonVariant} className="w-full">
                      {serviceCta}
                    </QuoteLink>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}

          <Reveal
            delay={200}
            className="lg:col-span-8"
          >
            <TiltCard className="relative flex h-full flex-col justify-between gap-10 overflow-hidden border-2 border-mint/40 bg-navy-mid p-7 sm:p-10 lg:flex-row lg:items-end">
              <DualSenseMark className="pointer-events-none absolute -right-8 top-4 h-32 w-48 text-mint/15" />
              <div className="relative max-w-md">
                <p className="text-sm font-semibold text-mint">
                  {joystickService.subtitle}
                </p>
                <h3 className="t-heading mt-3 text-[clamp(1.5rem,3vw,2.25rem)] uppercase text-paper">
                  {joystickService.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/70">
                  {joystickService.description}
                </p>
                <div className="mt-8">
                  <QuoteLink variant="outline">{serviceCta}</QuoteLink>
                </div>
              </div>
              <ul className="relative w-full shrink-0 lg:max-w-md">
                {joystickService.tiers.map((tier) => (
                  <li
                    key={tier.label}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-dashed border-paper/20 py-4 last:border-b"
                  >
                    <span className="text-sm text-paper/70">{tier.label}</span>
                    <span className="shrink-0 font-display text-lg font-bold tracking-tight text-mint">
                      {tier.price}
                    </span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>

          <Reveal delay={260} className="lg:col-span-4">
            <a
              href="#cobertura"
              className="group relative flex h-full flex-col overflow-hidden bg-mint p-7 text-navy sm:p-9"
            >
              <p className="text-sm font-semibold">Zonas</p>
              <p className="t-heading mt-6 text-[clamp(1.5rem,2.6vw,2rem)] uppercase">
                Dónde sí llegamos
              </p>
              <p className="mt-4 text-sm leading-relaxed text-navy">
                {quoteCopy.coverageTeaser}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                {quoteCopy.coverageCta}
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
