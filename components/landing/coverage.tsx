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
      <div className="flex flex-col gap-4 border-b border-paper/12 pb-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <h3 className="t-heading text-[clamp(1.5rem,3vw,2.25rem)] uppercase text-paper">
            {quoteCopy.coverageTitle}
          </h3>
        </Reveal>
        <Reveal delay={80} className="max-w-md">
          <p className="text-sm leading-relaxed text-paper/62">
            {quoteCopy.coverageBody}
          </p>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-2">
        {matrixRows.map((zone, index) => {
          const tone = rowTone[index] ?? rowTone[1];

          return (
            <Reveal
              as="article"
              key={zone.id}
              delay={index * 50}
              className={tone.shell}
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 sm:px-6">
                  <span className="min-w-0 flex-1">
                    <span className="t-heading block text-[clamp(1rem,1.8vw,1.25rem)] uppercase">
                      {zone.name}
                    </span>
                    <span className={`mt-1 block text-xs leading-snug ${tone.note}`}>
                      {zone.note}
                    </span>
                  </span>
                  <span className={`shrink-0 px-3 py-2 text-xs font-semibold ${tone.badge}`}>
                    {zone.surchargeLabel}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`hidden shrink-0 text-sm sm:inline ${tone.note} transition-transform duration-200 group-open:rotate-45`}
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 sm:px-6">
                  <p className={`mb-3 text-xs ${tone.note}`}>
                    {quoteCopy.coverageToggle}
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {zone.municipalities.map((place) => (
                      <li
                        key={place.name}
                        className={`border px-3 py-2 ${tone.chip}`}
                      >
                        <span className="block font-sans text-xs font-semibold uppercase tracking-wide">
                          {place.name}
                        </span>
                        {"note" in place && place.note ? (
                          <span
                            className={`mt-1 block text-[0.7rem] leading-snug ${tone.note}`}
                          >
                            {place.note}
                          </span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
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
