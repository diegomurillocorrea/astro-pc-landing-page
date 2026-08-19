import type { CSSProperties } from "react";
import SplitText from "@/components/react-bits/split-text";
import {
  DualSenseMark,
  PcMark,
  Ps5Mark,
} from "@/components/landing/hardware-art";
import { HomeVisitPoints } from "@/components/landing/benefits";
import { LandingTextLoop } from "@/components/landing/landing-text-loop";
import { ArrowUpRight } from "@/components/landing/marks";
import { Reveal } from "@/components/landing/reveal";
import { specialization } from "@/lib/landing-content";
import { fitLineSize } from "@/lib/typography";

const supportedMarks = [Ps5Mark, DualSenseMark, PcMark] as const;

const HEADLINE_SIZE = fitLineSize(
  specialization.headline,
  "clamp(1.875rem, 7vw, 5.75rem)",
);

export function Statement() {
  return (
    <section aria-label={specialization.headline} className="relative overflow-x-clip bg-ink">
      <LandingTextLoop />

      <div className="shell relative py-20 sm:py-28">
        <div
          className="@container min-w-0"
          style={{ "--display-size": HEADLINE_SIZE } as CSSProperties}
        >
          <SplitText
            tag="h2"
            text={specialization.headline}
            className="t-display w-full text-left text-nowrap text-paper"
            textAlign="left"
            splitType="words"
            delay={40}
            whiteSpace="nowrap"
          />
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <div className="lg:order-2">
            <Reveal delay={80}>
              <p className="max-w-md text-base leading-relaxed text-paper/70">
                {specialization.body}
              </p>
            </Reveal>

            <Reveal delay={140} className="mt-10 border-t border-paper/12 pt-6">
              <p className="text-sm font-semibold text-paper">
                {specialization.excludedTitle}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {specialization.excluded.map((item) => (
                  <li
                    key={item}
                    className="border border-paper/12 px-3 py-1.5 text-sm text-paper/62 line-through decoration-paper/50 decoration-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-paper/62">
                {specialization.excludedNote}
              </p>
            </Reveal>
          </div>

          <div className="lg:order-1">
            <Reveal as="ul" className="border-t border-paper/12">
              {specialization.supported.map((item, index) => {
                const Mark = supportedMarks[index] ?? Ps5Mark;

                return (
                  <li key={item.label} className="border-b border-paper/12">
                    <a
                      href={item.href}
                      className="group flex items-center gap-5 py-6 sm:gap-8"
                    >
                      <Mark className="h-12 w-12 shrink-0 text-mint sm:h-14 sm:w-14" />
                      <span className="min-w-0 flex-1">
                        <span className="t-heading block text-[clamp(1.5rem,3.4vw,2.75rem)] uppercase text-paper transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 group-hover:text-mint">
                          {item.label}
                        </span>
                        <span className="mt-1.5 block text-sm text-paper/62">
                          {item.note}
                        </span>
                      </span>
                      <ArrowUpRight className="size-5 shrink-0 text-paper/25 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-mint" />
                    </a>
                  </li>
                );
              })}
            </Reveal>
          </div>
        </div>

        <HomeVisitPoints />
      </div>
    </section>
  );
}
