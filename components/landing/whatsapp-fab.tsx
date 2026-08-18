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
      className={`group fixed bottom-5 right-5 z-40 flex h-14 items-center rounded-full bg-mint pl-4 pr-4 text-navy shadow-[0_18px_44px_-18px_color-mix(in_srgb,var(--mint)_75%,transparent)] transition-[opacity,background-color] duration-200 hover:bg-paper ${
        isCtaVisible ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <WhatsAppIcon className="size-7 shrink-0" />
      <span
        aria-hidden="true"
        className="hidden max-w-0 overflow-hidden whitespace-nowrap font-display text-sm font-bold uppercase tracking-wide transition-[max-width,padding] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-w-40 group-hover:pl-3 sm:block"
      >
        Agendar visita
      </span>
    </a>
  );
}
