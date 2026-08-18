import { ArrowUpRight } from "@/components/landing/marks";
import { Logo } from "@/components/landing/logo";
import { brand, footer, hero, navLinks } from "@/lib/landing-content";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const serviceLinks = [
  { label: "Mantenimiento PS5", href: "#servicios" },
  { label: "Mantenimiento PC Gamer", href: "#servicios" },
  { label: "Palancas con efecto Hall", href: "#efecto-hall" },
];

type FooterColumnProps = {
  title: string;
  links: readonly { label: string; href: string }[];
  isExternal?: boolean;
};

function FooterColumn({ title, links, isExternal = false }: FooterColumnProps) {
  return (
    <div>
      <h3 className="t-label text-paper/62">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : null)}
              className="group inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-tight text-paper/80 transition-colors hover:text-mint"
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
            <div className="flex items-center gap-3">
              <Logo className="h-14 w-14" />
              <div>
                <p className="font-display text-xl font-extrabold uppercase tracking-[-0.02em] text-paper">
                  {brand.name}
                </p>
                <p className="t-label mt-1 text-mint/70">{brand.tagline}</p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/62">
              {brand.specialization} a domicilio en {brand.location}.
            </p>
            <p className="t-meta mt-5 text-paper/62">{brand.coords}</p>
          </div>

          <FooterColumn title="Navegación" links={navLinks} />
          <FooterColumn title="Servicios" links={serviceLinks} />
          <FooterColumn
            title="Contacto"
            isExternal
            links={[
              { label: "WhatsApp", href: getWhatsAppUrl("schedule") },
              { label: "Cotizar palancas", href: getWhatsAppUrl("joysticks") },
            ]}
          />
        </div>

        <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-meta text-paper/62">
            © {year} {brand.name}. {footer.colophon}
          </p>
          <p className="t-label flex items-center gap-2 text-paper/62">
            <span className="pulse-dot size-1.5 rounded-full bg-mint" />
            {hero.status} · {brand.region}
          </p>
        </div>
      </div>

      {/* Firma tipográfica recortada por el borde inferior. */}
      <div aria-hidden="true" className="relative h-[11vw] overflow-hidden">
        <p className="absolute inset-x-0 -bottom-[0.22em] select-none text-center font-display text-[18vw] font-extrabold uppercase leading-none tracking-[-0.06em] text-paper/[0.055]">
          {brand.name}
        </p>
      </div>
    </footer>
  );
}
