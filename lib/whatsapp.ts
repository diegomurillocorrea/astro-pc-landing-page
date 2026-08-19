import { whatsappMessages } from "@/lib/landing-content";

export type WhatsAppMessageKey = keyof typeof whatsappMessages;

const FALLBACK_WHATSAPP_NUMBER = "50300000000";

function getWhatsAppNumber(): string {
  return (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ||
    FALLBACK_WHATSAPP_NUMBER
  );
}

function buildWhatsAppUrl(text: string): string {
  return `https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(text)}`;
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
