import { brand } from "@/lib/landing-content";
import { getE164Phone } from "@/lib/whatsapp";

/**
 * Datos de negocio local para buscadores: teléfono y horario.
 */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name,
    description: brand.tagline,
    telephone: getE164Phone(),
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Salvador",
      addressRegion: "San Salvador",
      addressCountry: "SV",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: brand.region,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
