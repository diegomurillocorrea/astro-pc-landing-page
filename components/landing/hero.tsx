import { HardwareStage } from "@/components/landing/hardware-stage";
import { ArrowRight } from "@/components/landing/marks";
import { Reveal } from "@/components/landing/reveal";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";
import MagicBento from "@/components/react-bits/magic-bento";
import { hero, heroPrices } from "@/lib/landing-content";
import { fitLineSize } from "@/lib/typography";

const HERO_PRICE_CARDS = heroPrices.map((item) => ({
  color: "#03182a",
  label: item.value,
  title: item.label,
  details: item.notes,
  href: item.href,
  wrapLabel: "wrapValue" in item ? item.wrapValue : undefined,
}));

const SERVICE_CAP = "clamp(0.9rem, 2.2vw, 1.2rem)";
const GEAR_CAP = "clamp(2.4rem, 8.2vw, 6.25rem)";
const PLACE_CAP = "clamp(1.35rem, 4.4vw, 3.5rem)";

const serviceLine = hero.lines[0];
const placeLine = hero.lines[hero.lines.length - 1];
const gearLines = hero.lines.slice(1, -1);
const longestGearText = gearLines.reduce(
  (longest, line) => (line.text.length > longest.length ? line.text : longest),
  "",
);
const gearSize = fitLineSize(longestGearText, GEAR_CAP);

function HeroPrices() {
  return (
    <div className="shell">
      <MagicBento
        cards={HERO_PRICE_CARDS}
        textAutoHide={false}
        enableStars
        enableSpotlight
        enableBorderGlow
        enableTilt
        enableMagnetism
        clickEffect
        spotlightRadius={300}
        particleCount={12}
        glowColor="195, 255, 220"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate scroll-mt-16 overflow-x-clip bg-navy pb-8 md:scroll-mt-20"
    >
      <div className="shell relative grid items-start gap-x-8 gap-y-8 pb-10 pt-7 md:grid-cols-[minmax(0,1fr)_minmax(18rem,30rem)] md:items-center md:gap-x-8 md:pb-14 md:pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,36rem)] lg:gap-x-10 lg:pb-16">
        <div className="min-w-0">
          <h1 className="sr-only">{hero.title}</h1>

          <div aria-hidden="true" className="@container min-w-0">
            <Reveal
              as="span"
              delay={80}
              distance="0.5em"
              className="mb-[0.35em] block font-display font-bold uppercase tracking-[0.18em] text-paper/55"
              style={{ fontSize: SERVICE_CAP }}
            >
              {serviceLine.text}
            </Reveal>
            {gearLines.map((line, index) => (
              <Reveal
                key={line.text}
                as="span"
                delay={140 + index * 70}
                distance="0.5em"
                className="t-hero block text-paper"
                style={{ fontSize: gearSize, lineHeight: 0.88 }}
              >
                {line.text}
              </Reveal>
            ))}
            <Reveal
              as="span"
              delay={360}
              distance="0.5em"
              className="t-hero mt-[0.06em] block text-mint"
              style={{
                fontSize: fitLineSize(placeLine.text, PLACE_CAP),
                lineHeight: 0.88,
              }}
            >
              {placeLine.text}
            </Reveal>
          </div>

          <Reveal delay={400} className="mt-7 max-w-xl">
            <p className="text-base leading-relaxed text-paper/75 sm:text-lg">
              {hero.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <WhatsAppButton messageKey="schedule">{hero.cta}</WhatsAppButton>
              <a
                href="#cotizar"
                className="group inline-flex items-center gap-2 border-b border-mint/40 pb-1 font-sans text-sm font-semibold text-mint transition-colors hover:border-mint hover:text-paper"
              >
                {hero.quoteCta}
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="min-w-0 overflow-visible">
          <HardwareStage />
        </Reveal>
      </div>

      <HeroPrices />
    </section>
  );
}
