import { FaqAccordion } from "@/components/landing/faq-accordion";
import { Reveal } from "@/components/landing/reveal";
import MagicBento from "@/components/react-bits/magic-bento";
import { guarantees } from "@/lib/landing-content";

const GUARANTEE_CARDS = guarantees.map((item) => ({
  color: "#03182a",
  label: item.title,
  title: item.body,
  wrapLabel: true,
}));

export function Faq() {
  return (
    <section
      id="preguntas"
      className="relative scroll-mt-24 overflow-x-clip bg-ink py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="dotted pointer-events-none absolute bottom-10 left-[6%] hidden size-40 text-mint opacity-40 lg:block"
      />

      <div className="shell relative">
        <div className="border-b border-paper/12 pb-10">
          <Reveal>
            <h2 className="t-section text-paper">
              Garantías
              <span className="ml-4 inline-block text-mint">y preguntas</span>
            </h2>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <MagicBento
            cards={GUARANTEE_CARDS}
            textAutoHide={false}
            enableStars
            enableSpotlight
            enableBorderGlow
            enableTilt
            enableMagnetism
            clickEffect={false}
            spotlightRadius={300}
            particleCount={12}
            glowColor="195, 255, 220"
            listLabel="Garantías"
          />
        </Reveal>

        <Reveal delay={100} className="mt-14 sm:mt-16">
          <FaqAccordion />
        </Reveal>
      </div>
    </section>
  );
}
