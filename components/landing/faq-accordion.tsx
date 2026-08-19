"use client";

import { memo, useCallback, useId, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Plus } from "@/components/landing/marks";
import { faqs } from "@/lib/landing-content";

const EASE = [0.16, 1, 0.3, 1] as const;

type FaqItemProps = {
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
  panelId: string;
  prefersReducedMotion: boolean;
  question: string;
};

const FaqItem = memo(function FaqItem({
  answer,
  index,
  isOpen,
  onToggle,
  panelId,
  prefersReducedMotion,
  question,
}: FaqItemProps) {
  const code = String(index + 1).padStart(2, "0");
  const duration = prefersReducedMotion ? 0 : 0.48;

  return (
    <article className="relative border-b border-paper/12">
      <motion.span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-0.5 origin-top bg-mint"
        initial={false}
        animate={{ scaleY: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration, ease: EASE }}
      />

      <h3>
        <button
          type="button"
          aria-controls={panelId}
          aria-expanded={isOpen}
          onClick={() => onToggle(index)}
          className="group flex w-full cursor-pointer items-start gap-4 px-4 py-6 text-left sm:gap-6 sm:px-5 sm:py-7"
        >
          <span
            className={`mt-1 w-7 shrink-0 font-mono text-xs font-semibold tabular-nums tracking-wide transition-colors duration-300 sm:text-sm ${
              isOpen ? "text-mint" : "text-mint/45 group-hover:text-mint"
            }`}
          >
            {code}
          </span>
          <span
            className={`t-heading min-w-0 flex-1 text-[clamp(1.0625rem,1.9vw,1.5rem)] transition-[color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 ${
              isOpen ? "text-mint" : "text-paper group-hover:text-mint"
            }`}
          >
            {question}
          </span>
          <motion.span
            aria-hidden="true"
            initial={false}
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 420, damping: 28 }
            }
            className={`mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border transition-[background-color,border-color,color] duration-300 ${
              isOpen
                ? "border-mint bg-mint text-navy"
                : "border-paper/25 text-mint group-hover:border-mint"
            }`}
          >
            <Plus className="size-3.5" />
          </motion.span>
        </button>
      </h3>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p
            id={panelId}
            role="region"
            aria-hidden={!isOpen}
            className={`px-4 pb-7 pl-15 pr-16 text-sm leading-relaxed text-paper/65 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] sm:pl-18 sm:pr-20 ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-1 opacity-0"
            }`}
          >
            {answer}
          </p>
        </div>
      </div>
    </article>
  );
});

export function FaqAccordion() {
  const baseId = useId();
  const prefersReducedMotion = Boolean(useReducedMotion());
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = useCallback((index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  }, []);

  return (
    <div className="border-t border-paper/12">
      {faqs.map((item, index) => (
        <FaqItem
          key={item.question}
          answer={item.answer}
          index={index}
          isOpen={openIndex === index}
          onToggle={toggleItem}
          panelId={`${baseId}-panel-${index}`}
          prefersReducedMotion={prefersReducedMotion}
          question={item.question}
        />
      ))}
    </div>
  );
}
