import { ArrowRight } from "@/components/landing/marks";

type QuoteLinkProps = {
  children: React.ReactNode;
  variant?: "outline" | "ink";
  className?: string;
};

const base =
  "group/btn inline-flex items-center justify-center gap-3 font-sans font-semibold uppercase tracking-[0.06em] transition-[background-color,color,border-color,transform] duration-200 active:translate-y-px";

const variantClass = {
  outline:
    "h-13 border-2 border-mint/45 px-5 text-[0.8125rem] text-mint hover:border-mint hover:bg-mint hover:text-navy",
  ink: "h-14 rounded-full bg-ink px-6 text-[0.9375rem] text-mint hover:bg-navy-mid",
} as const;

/**
 * CTA interno hacia el cotizador. Evita abrir WhatsApp antes de elegir zona.
 */
export function QuoteLink({
  children,
  variant = "outline",
  className = "",
}: QuoteLinkProps) {
  return (
    <a href="#cotizar" className={`${base} ${variantClass[variant]} ${className}`}>
      <span className="text-left">{children}</span>
      <ArrowRight className="size-4 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-1" />
    </a>
  );
}
