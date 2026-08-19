import { ArrowRight, Plus, Sparkle } from "@/components/landing/marks";
import { Reveal } from "@/components/landing/reveal";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";
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
  },
  {
    shell: "section-light border-2 border-ink bg-bone text-ink",
    price: "text-ink",
    meta: "text-ink/68",
    body: "text-ink/70",
    mark: "text-navy",
    buttonVariant: "ink" as const,
    badge: "bg-ink text-mint",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="relative scroll-mt-24 overflow-hidden bg-navy py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="rules pointer-events-none absolute inset-0 hidden text-paper opacity-50 lg:block"
      />

      <div className="shell relative">
        <div className="flex flex-col gap-8 border-b border-paper/12 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal className="flex items-center gap-3 text-mint">
              <Sparkle className="size-3.5" />
              <p className="t-label">Tarifas claras · § 02</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="t-section mt-5 text-paper">
                Servicios
                <span className="t-outline ml-4 inline-block">y precios</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140} className="max-w-sm">
            <p className="text-base leading-relaxed text-paper/60">
              Precios fijos de mantenimiento y rangos para palancas, para que
              sepas qué esperar antes de escribirnos.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {maintenanceServices.map((service, index) => {
            const tone = cardTone[index] ?? cardTone[0];

            return (
              <Reveal
                key={service.id}
                as="article"
                delay={index * 100}
                className={`relative flex flex-col p-7 sm:p-9 lg:col-span-6 ${tone.shell}`}
              >
                <span
                  className={`t-label absolute -top-3 left-7 px-3 py-1.5 ${tone.badge}`}
                >
                  Precio fijo
                </span>

                <div className="mt-4 flex items-start justify-between gap-6">
                  <h3 className="t-heading max-w-[15ch] text-[clamp(1.375rem,2.4vw,1.875rem)] uppercase">
                    {service.title}
                  </h3>
                  <span className={`t-label shrink-0 ${tone.meta}`}>
                    0{index + 1}
                  </span>
                </div>

                <p
                  className={`mt-8 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-none tracking-[-0.05em] ${tone.price}`}
                >
                  {service.price}
                </p>
                <p className={`t-label mt-3 ${tone.meta}`}>USD · por visita</p>

                <ul className="mt-8 flex-1 space-y-4 text-sm leading-relaxed">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Plus className={`mt-0.5 size-3.5 shrink-0 ${tone.mark}`} />
                      <span className={tone.body}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-9">
                  <WhatsAppButton
                    messageKey={service.whatsappKey}
                    variant={tone.buttonVariant}
                    className="w-full"
                  >
                    {serviceCta}
                  </WhatsAppButton>
                </div>
              </Reveal>
            );
          })}

          <Reveal
            as="article"
            delay={200}
            className="relative flex flex-col justify-between gap-10 overflow-hidden rounded-[2.5rem] border-2 border-mint/40 bg-navy-mid p-7 sm:p-10 lg:col-span-8 lg:flex-row lg:items-end"
          >
            <div
              aria-hidden="true"
              className="dotted pointer-events-none absolute -right-6 -top-6 size-48 text-mint opacity-40"
            />
            <div className="relative max-w-md">
              <p className="t-label text-mint">{joystickService.subtitle}</p>
              <h3 className="t-heading mt-4 text-[clamp(1.5rem,3vw,2.25rem)] uppercase text-paper">
                {joystickService.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-paper/65">
                {joystickService.description}
              </p>
              <div className="mt-8">
                <WhatsAppButton
                  messageKey={joystickService.whatsappKey}
                  variant="outline"
                >
                  {serviceCta}
                </WhatsAppButton>
              </div>
            </div>

            <ul className="relative w-full shrink-0 lg:max-w-md">
              {joystickService.tiers.map((tier) => (
                <li
                  key={tier.label}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-dashed border-paper/20 py-4 last:border-b"
                >
                  <span className="text-sm text-paper/70">{tier.label}</span>
                  <span className="shrink-0 font-display text-lg font-extrabold tracking-tight text-mint">
                    {tier.price}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={260}
            className="lg:col-span-4"
          >
            <a
              href="#cobertura"
              className="group relative flex h-full flex-col overflow-hidden bg-mint p-7 text-navy sm:p-9"
            >
              <Sparkle className="pointer-events-none absolute -bottom-12 -right-10 size-48 text-navy/10" />
              <p className="t-label">Cobertura</p>
              <p className="t-heading mt-6 text-[clamp(1.5rem,2.6vw,2rem)] uppercase">
              Municipios cubiertos
              </p>
              <p className="mt-4 text-sm leading-relaxed text-navy">
                {quoteCopy.coverageTeaser}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.04em]">
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
