import { whatsappMessages } from "@/lib/landing-content";

export type WhatsAppMessageKey = keyof typeof whatsappMessages;

const FALLBACK_WHATSAPP_NUMBER = "50300000000";

function getContactDigits(): string {
  return (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ||
    FALLBACK_WHATSAPP_NUMBER
  );
}

/**
 * Número en E.164 (`+503…`) para `tel:` y datos estructurados.
 */
export function getE164Phone(): string {
  return `+${getContactDigits()}`;
}

export function getTelHref(): string {
  return `tel:${getE164Phone()}`;
}

/**
 * El Salvador: +503 y 8 dígitos, agrupados de 4 en 4.
 * Otros prefijos: el bloque internacional completo.
 */
export function getDisplayPhone(): string {
  const digits = getContactDigits();

  if (digits.startsWith("503") && digits.length === 11) {
    return `+503 ${digits.slice(3, 7)} ${digits.slice(7)}`;
  }

  return getE164Phone();
}

function buildWhatsAppUrl(text: string): string {
  return `https://wa.me/${getContactDigits()}?text=${encodeURIComponent(text)}`;
}

/**
 * Arma la URL de wa.me con un mensaje precargado.
 * Define NEXT_PUBLIC_WHATSAPP_NUMBER con el número en formato internacional (sin + ni espacios).
 */
export function getWhatsAppUrl(messageKey: WhatsAppMessageKey): string {
  return buildWhatsAppUrl(whatsappMessages[messageKey]);
}

/** URL de wa.me con un texto libre (cotizador, etc.). */
export function getWhatsAppTextUrl(text: string): string {
  return buildWhatsAppUrl(text);
}
