import { Sparkle } from "@/components/landing/marks";
import { Reveal } from "@/components/landing/reveal";
import {
  coverageExcluded,
  coverageNote,
  coverageZones,
  quoteCopy,
} from "@/lib/landing-content";

const matrixRows = [...coverageZones, coverageExcluded];

const rowTone = [
  {
    shell: "bg-mint text-navy",
    badge: "bg-navy text-mint",
    chip: "border-navy/20 text-navy",
    note: "text-navy/70",
  },
  {
    shell: "border-2 border-paper/12 bg-navy-mid text-paper",
    badge: "bg-mint text-navy",
    chip: "border-paper/15 text-paper/80",
    note: "text-paper/62",
  },
  {
    shell: "border-2 border-paper/12 bg-navy text-paper",
    badge: "border border-mint/50 text-mint",
    chip: "border-paper/15 text-paper/80",
    note: "text-paper/62",
  },
  {
    shell: "border-2 border-paper/12 bg-navy-mid text-paper",
    badge: "bg-paper text-navy",
    chip: "border-paper/15 text-paper/80",
    note: "text-paper/62",
  },
  {
    shell: "border-2 border-dashed border-paper/25 bg-ink text-paper",
    badge: "border border-paper/35 text-paper/70",
    chip: "border-paper/15 text-paper/55 line-through decoration-paper/40",
    note: "text-paper/55",
  },
];

export function Coverage() {
  return (
    <div id="cobertura" className="scroll-mt-24">
      <div className="flex flex-col gap-6 border-b border-paper/12 pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Reveal className="flex items-center gap-3 text-mint">
            <Sparkle className="size-3.5" />
            <p className="t-label">{quoteCopy.coverageEyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="t-heading mt-4 text-[clamp(1.5rem,3vw,2.25rem)] uppercase text-paper">
              {quoteCopy.coverageTitle}
            </h3>
          </Reveal>
        </div>
        <Reveal delay={140} className="max-w-md">
          <p className="text-sm leading-relaxed text-paper/62">
            {quoteCopy.coverageBody}
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-8 flex flex-wrap gap-2">
        {matrixRows.map((zone) => (
          <span
            key={zone.id}
            className="border border-paper/15 px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wide text-paper/80"
          >
            {zone.surchargeLabel}
            <span className="ml-2 font-sans font-normal normal-case tracking-normal text-paper/55">
              {zone.name}
            </span>
          </span>
        ))}
      </Reveal>

      <div className="mt-6 grid gap-3">
        {matrixRows.map((zone, index) => {
          const tone = rowTone[index] ?? rowTone[1];

          return (
            <Reveal
              as="article"
              key={zone.id}
              delay={index * 70}
              className={`p-6 sm:p-7 ${tone.shell}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className={`t-label ${tone.note}`}>Zona 0{index + 1}</p>
                  <h4 className="t-heading mt-2 text-[clamp(1.125rem,2vw,1.5rem)] uppercase">
                    {zone.name}
                  </h4>
                  <p className={`mt-2 max-w-xl text-sm leading-relaxed ${tone.note}`}>
                    {zone.note}
                  </p>
                </div>
                <span
                  className={`t-label shrink-0 px-3 py-2 ${tone.badge}`}
                >
                  {zone.surchargeLabel}
                </span>
              </div>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {zone.municipalities.map((place) => (
                  <li
                    key={place.name}
                    className={`border px-3 py-2 ${tone.chip}`}
                  >
                    <span className="block font-display text-xs font-bold uppercase tracking-wide">
                      {place.name}
                    </span>
                    {"note" in place && place.note ? (
                      <span className={`mt-1 block text-[0.7rem] leading-snug ${tone.note}`}>
                        {place.note}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-paper/62">
        {coverageNote}
      </p>
    </div>
  );
}
