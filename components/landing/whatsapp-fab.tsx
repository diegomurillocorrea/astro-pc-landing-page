"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/landing/whatsapp-icon";
import { getWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Flotante de WhatsApp: se oculta en el hero (ya hay CTA) y en el cierre
 * (CTA a todo lo ancho). Solo icono para no tapar el contenido.
 */
export function WhatsAppFab() {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const cta = document.getElementById("cierre");
    const targets = [hero, cta].filter((node): node is HTMLElement =>
      node instanceof HTMLElement,
    );

    if (targets.length === 0) {
      return;
    }

    const intersecting = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            intersecting.add(entry.target.id);
          } else {
            intersecting.delete(entry.target.id);
          }
        }

        setIsHidden(intersecting.size > 0);
      },
      { threshold: 0.28 },
    );

    targets.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={getWhatsAppUrl("schedule")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar visita por WhatsApp"
      className={`fab-pulse group fixed z-40 grid size-14 place-items-center rounded-full bg-mint text-navy transition-[opacity,background-color,transform] duration-200 hover:bg-paper ${
        isHidden
          ? "pointer-events-none translate-y-3 opacity-0"
          : "opacity-100"
      }`}
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom, 0px))",
        right: "max(1.25rem, env(safe-area-inset-right, 0px))",
      }}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
