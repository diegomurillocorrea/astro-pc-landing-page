import { Reveal } from "@/components/landing/reveal";
import { TiltCard } from "@/components/landing/tilt-card";
import { benefits } from "@/lib/landing-content";

const benefitTone = [
  {
    shell: "border-2 border-paper/12 bg-navy",
    title: "text-paper",
    body: "text-paper/65",
  },
  {
    shell: "bg-mint",
    title: "text-navy",
    body: "text-navy/70",
  },
  {
    shell: "bg-ink",
    title: "text-paper",
    body: "text-paper/65",
  },
];

export function Benefits() {
  return (
    <section className="relative overflow-hidden bg-navy-mid py-20 sm:py-28">
      <div className="shell relative">
        <Reveal>
          <h2 className="t-section max-w-3xl text-paper">{benefits.title}</h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {benefits.items.map((item, index) => {
            const tone = benefitTone[index] ?? benefitTone[0];

            return (
              <Reveal
                as="article"
                key={item.title}
                delay={index * 110}
              >
                <TiltCard className={`h-full p-7 lg:p-9 ${tone.shell}`}>
                  <h3
                    className={`t-heading text-[clamp(1.125rem,2.4vw,1.75rem)] uppercase ${tone.title}`}
                  >
                    {item.title}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed ${tone.body}`}>
                    {item.body}
                  </p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
