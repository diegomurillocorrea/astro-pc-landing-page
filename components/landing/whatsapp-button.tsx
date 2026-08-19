import { ArrowUpRight } from "@/components/landing/marks";
import { WhatsAppIcon } from "@/components/landing/whatsapp-icon";
import { getWhatsAppUrl, type WhatsAppMessageKey } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  children: React.ReactNode;
  /**
   * `primary` cápsula de alto contraste · `outline` bloque cuadrado sobre fondo
   * oscuro · `ink` bloque sólido para secciones claras · `compact` para la barra.
   */
  variant?: "primary" | "outline" | "ink" | "compact";
  className?: string;
  /** Mensaje precargado del catálogo. Ignorado si pasas `href`. */
  messageKey?: WhatsAppMessageKey;
  /** URL ya armada (cotizador u otro texto libre). */
  href?: string;
};

const base =
  "group/btn inline-flex items-center justify-center gap-3 font-display font-bold uppercase tracking-[0.06em] transition-[background-color,color,border-color,transform] duration-200 active:translate-y-px";

const variantClass = {
  primary:
    "h-14 rounded-full bg-mint pl-3 pr-6 text-[0.9375rem] text-navy shadow-[0_18px_48px_-24px_color-mix(in_srgb,var(--mint)_85%,transparent)] hover:bg-paper",
  outline:
    "h-13 border-2 border-mint/45 px-5 text-[0.8125rem] text-mint hover:border-mint hover:bg-mint hover:text-navy",
  ink: "h-14 rounded-full bg-ink pl-3 pr-6 text-[0.9375rem] text-mint hover:bg-navy-mid",
  compact:
    "h-10 rounded-full bg-mint pl-1.5 pr-4 text-xs text-navy hover:bg-paper",
} as const;

const iconWrapClass = {
  primary: "grid size-8 shrink-0 place-items-center rounded-full bg-navy text-mint",
  outline: "",
  ink: "grid size-8 shrink-0 place-items-center rounded-full bg-mint text-ink",
  compact: "grid size-7 shrink-0 place-items-center rounded-full bg-navy text-mint",
} as const;

export function WhatsAppButton({
  messageKey = "schedule",
  href,
  children,
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  const isOutline = variant === "outline";
  const url = href ?? getWhatsAppUrl(messageKey);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variantClass[variant]} ${className}`}
    >
      {isOutline ? (
        <WhatsAppIcon className="size-4 shrink-0" />
      ) : (
        <span className={iconWrapClass[variant]}>
          <WhatsAppIcon className={variant === "compact" ? "size-3.5" : "size-4"} />
        </span>
      )}
      <span className="text-left">{children}</span>
      <ArrowUpRight className="size-3.5 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
    </a>
  );
}
