import { brand, contact } from "@/lib/landing-content";
import { getDisplayPhone, getTelHref } from "@/lib/whatsapp";

type ContactDetailsProps = {
  variant?: "inline" | "stack";
  tone?: "on-dark" | "on-light";
};

const toneClass = {
  "on-dark": {
    phone: "text-paper hover:text-mint",
    meta: "text-paper/62",
    rule: "text-paper/30",
  },
  "on-light": {
    phone: "text-navy hover:text-navy/70",
    meta: "text-navy/70",
    rule: "text-navy/25",
  },
} as const;

/**
 * Teléfono clicable, horario y tiempo de respuesta.
 * El número es el mismo de WhatsApp (`NEXT_PUBLIC_WHATSAPP_NUMBER`).
 */
export function ContactDetails({
  variant = "inline",
  tone = "on-dark",
}: ContactDetailsProps) {
  const phone = getDisplayPhone();
  const telHref = getTelHref();
  const colors = toneClass[tone];
  const callLabel = `Llamar a ${brand.name} al ${phone}`;

  if (variant === "inline") {
    return (
      <p className="flex max-w-xl flex-wrap items-baseline gap-x-2 gap-y-1 text-sm leading-relaxed">
        <a
          href={telHref}
          className={`font-sans font-semibold transition-colors ${colors.phone}`}
          aria-label={callLabel}
        >
          {phone}
        </a>
        <span aria-hidden="true" className={colors.rule}>
          ·
        </span>
        <span className={colors.meta}>{contact.hoursShort}</span>
        <span aria-hidden="true" className={colors.rule}>
          ·
        </span>
        <span className={colors.meta}>{contact.responseShort}</span>
      </p>
    );
  }

  return (
    <address className="not-italic">
      <p>
        <span className={`block text-xs font-semibold ${colors.meta}`}>
          {contact.phoneLabel}
        </span>
        <a
          href={telHref}
          className={`mt-1 inline-block font-sans text-sm font-semibold transition-colors ${colors.phone}`}
          aria-label={callLabel}
        >
          {phone}
        </a>
      </p>
      <p className="mt-4">
        <span className={`block text-xs font-semibold ${colors.meta}`}>
          {contact.hoursLabel}
        </span>
        <span className={`mt-1 block text-sm leading-relaxed ${colors.meta}`}>
          {contact.hours} {contact.closed}
        </span>
      </p>
      <p className={`mt-3 text-sm leading-relaxed ${colors.meta}`}>
        {contact.response}
      </p>
    </address>
  );
}
