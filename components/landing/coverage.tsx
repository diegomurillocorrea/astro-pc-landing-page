import { Reveal } from "@/components/landing/reveal";
import {
  departmentHasCoverage,
  departments,
  formatSurchargeLabel,
} from "@/lib/el-salvador";
import { coverageNote, quoteCopy } from "@/lib/landing-content";

const coveredTone = {
  shell: "bg-mint text-navy",
  badge: "bg-navy text-mint",
  chip: "border-navy/20 text-navy",
  mutedChip: "border-navy/15 text-navy/55",
  note: "text-navy/70",
};

const uncoveredTone = {
  shell: "border-2 border-dashed border-paper/25 bg-ink text-paper",
  badge: "border border-paper/35 text-paper/70",
  chip: "border-paper/15 text-paper/80",
  mutedChip: "border-paper/15 text-paper/45 line-through decoration-paper/40",
  note: "text-paper/55",
};

export function Coverage() {
  return (
    <div id="cobertura" className="scroll-mt-24">
      <div className="border-b border-paper/12 pb-8">
        <Reveal>
          <h3 className="t-heading text-[clamp(1.5rem,3vw,2.25rem)] uppercase text-paper">
            {quoteCopy.coverageTitle}
          </h3>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-2">
        {departments.map((department, index) => {
          const covered = departmentHasCoverage(department);
          const tone = covered ? coveredTone : uncoveredTone;

          if (!covered) {
            return (
              <Reveal
                as="article"
                key={department.name}
                delay={index * 40}
                className={tone.shell}
              >
                <div className="flex items-center gap-4 px-5 py-4 sm:px-6">
                  <span className="t-heading min-w-0 flex-1 text-[clamp(1rem,1.8vw,1.25rem)] uppercase">
                    {department.name}
                  </span>
                  <span
                    className={`shrink-0 px-3 py-2 text-xs font-semibold ${tone.badge}`}
                  >
                    Sin servicio
                  </span>
                </div>
              </Reveal>
            );
          }

          return (
            <Reveal
              as="article"
              key={department.name}
              delay={index * 40}
              className={tone.shell}
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 sm:px-6">
                  <span className="min-w-0 flex-1">
                    <span className="t-heading block text-[clamp(1rem,1.8vw,1.25rem)] uppercase">
                      {department.name}
                    </span>
                    <span className={`mt-1 block text-xs leading-snug ${tone.note}`}>
                      {department.municipalities.length} municipios ·{" "}
                      {department.municipalities.reduce(
                        (total, municipality) =>
                          total + municipality.districts.length,
                        0,
                      )}{" "}
                      distritos
                    </span>
                  </span>
                  <span
                    className={`shrink-0 px-3 py-2 text-xs font-semibold ${tone.badge}`}
                  >
                    Hay visita
                  </span>
                  <span
                    aria-hidden="true"
                    className={`hidden shrink-0 text-sm sm:inline ${tone.note} transition-transform duration-200 group-open:rotate-45`}
                  >
                    +
                  </span>
                </summary>
                <div className="grid gap-5 px-5 pb-5 sm:px-6">
                  {department.municipalities.map((municipality) => (
                    <div key={municipality.name}>
                      <p className={`mb-2 text-xs font-semibold uppercase tracking-wide ${tone.note}`}>
                        {municipality.name}
                      </p>
                      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                        {municipality.districts.map((item) => {
                          const isCovered = item.surcharge !== null;

                          return (
                            <li
                              key={item.name}
                              className={`border px-3 py-2 ${
                                isCovered ? tone.chip : tone.mutedChip
                              }`}
                            >
                              <span className="block font-sans text-xs font-semibold uppercase tracking-wide">
                                {item.name}
                              </span>
                              <span
                                className={`mt-1 block text-[0.7rem] leading-snug ${tone.note}`}
                              >
                                {formatSurchargeLabel(item.surcharge)}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
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
