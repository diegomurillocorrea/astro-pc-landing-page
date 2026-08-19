"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/landing/whatsapp-icon";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFab() {
  const [isCtaVisible, setIsCtaVisible] = useState(false);

  useEffect(() => {
    const cta = document.getElementById("cierre");

    if (!cta) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCtaVisible(entry.isIntersecting);
      },
      { threshold: 0.28 },
    );

    observer.observe(cta);

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={getWhatsAppUrl("schedule")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar visita por WhatsApp"
      className={`fab-pulse group fixed z-40 inline-flex h-14 items-center rounded-full bg-mint pr-5 pl-3 text-navy shadow-[0_18px_44px_-18px_color-mix(in_srgb,var(--mint)_75%,transparent)] transition-[opacity,background-color,transform] duration-200 hover:bg-paper ${
        isCtaVisible
          ? "pointer-events-none translate-y-3 opacity-0"
          : "opacity-100"
      }`}
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom, 0px))",
        right: "max(1.25rem, env(safe-area-inset-right, 0px))",
      }}
    >
      <WhatsAppIcon className="size-7 shrink-0" />
      <span className="pl-3 font-display text-sm font-bold uppercase tracking-wide">
        Agendar
      </span>
    </a>
  );
}
