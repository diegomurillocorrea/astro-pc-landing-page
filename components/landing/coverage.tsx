import { Reveal } from "@/components/landing/reveal";
import { listCoveredDepartmentNames } from "@/lib/el-salvador";
import { coverageNote, quoteCopy } from "@/lib/landing-content";

const coveredDepartments = listCoveredDepartmentNames();

export function Coverage() {
  return (
    <div id="cobertura" className="scroll-mt-24 border-t border-paper/12 pt-10">
      <Reveal>
        <p className="text-sm font-semibold text-mint">
          {quoteCopy.coverageTitle}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {coveredDepartments.map((name) => (
            <li
              key={name}
              className="border border-paper/15 px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-wide text-paper/80"
            >
              {name}
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-paper/62">
          {coverageNote}
        </p>
      </Reveal>
    </div>
  );
}
