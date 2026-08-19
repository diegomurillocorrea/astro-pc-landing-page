import { ContactDetails } from "@/components/landing/contact-details";
import { BrandLockup } from "@/components/landing/logo";
import { ArrowUpRight } from "@/components/landing/marks";
import { brand, contact, footer, hero, navLinks } from "@/lib/landing-content";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const serviceLinks = [
  { label: "Mantenimiento PS5", href: "#servicios" },
  { label: "Mantenimiento PC Gamer", href: "#servicios" },
  { label: "Palancas magnéticas DualSense", href: "#dualsense" },
  { label: "Ver cuánto te cobramos", href: "#cotizar" },
  { label: "Dónde sí llegamos", href: "#cobertura" },
];

type FooterColumnProps = {
  title: string;
  links: readonly { label: string; href: string }[];
  isExternal?: boolean;
};

function FooterColumn({ title, links, isExternal = false }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-paper/62">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : null)}
              className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-paper/80 transition-colors hover:text-mint"
            >
              {link.label}
              <ArrowUpRight className="size-3 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink pt-20">
      <div className="shell relative">
        <div className="grid gap-12 border-b border-paper/12 pb-14 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,0.9fr))]">
          <div>
            <BrandLockup showTagline size="md" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/62">
              En {brand.location}. {hero.coverage}{" "}
              <a
                href="#cotizar"
                className="font-semibold text-mint transition-colors hover:text-paper"
              >
                {hero.coverageCta}
              </a>
              .
            </p>
          </div>

          <FooterColumn title="Navegación" links={navLinks} />
          <FooterColumn title="Servicios" links={serviceLinks} />
          <div>
            <h3 className="text-sm font-semibold text-paper/62">Contacto</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={getWhatsAppUrl("schedule")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-paper/80 transition-colors hover:text-mint"
                >
                  {contact.whatsappLabel}
                  <ArrowUpRight className="size-3 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <ContactDetails variant="stack" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="t-meta text-paper/62">
              © {year} {brand.name}. {footer.colophon}
            </p>
            <p className="t-meta text-paper/62">
              {footer.creditPrefix}{" "}
              <a
                href={footer.creditUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-semibold text-paper/80 transition-colors hover:text-mint"
              >
                {footer.creditBrand}
              </a>
            </p>
          </div>
          <p className="flex items-center gap-2 text-sm text-paper/62">
            <span className="pulse-dot size-1.5 rounded-full bg-mint" />
            {hero.status} · {contact.hoursShort}
          </p>
        </div>
      </div>

      <div aria-hidden="true" className="relative h-[11vw] overflow-hidden">
        <p className="absolute inset-x-0 -bottom-[0.22em] select-none text-center font-display text-[18vw] font-bold uppercase leading-none tracking-[-0.06em] text-paper/[0.055]">
          {brand.name}
        </p>
      </div>
    </footer>
  );
}
