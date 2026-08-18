import { whatsappMessages } from "@/lib/landing-content";

export type WhatsAppMessageKey = keyof typeof whatsappMessages;

const FALLBACK_WHATSAPP_NUMBER = "50300000000";

/**
 * Arma la URL de wa.me con un mensaje precargado.
 * Define NEXT_PUBLIC_WHATSAPP_NUMBER con el número en formato internacional (sin + ni espacios).
 */
export function getWhatsAppUrl(messageKey: WhatsAppMessageKey): string {
  const number =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ||
    FALLBACK_WHATSAPP_NUMBER;
  const text = encodeURIComponent(whatsappMessages[messageKey]);

  return `https://wa.me/${number}?text=${text}`;
}
