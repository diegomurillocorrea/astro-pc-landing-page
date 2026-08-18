"use client";

import { useEffect, useState } from "react";
import Magnet from "@/components/react-bits/magnet";
import StaggeredMenu from "@/components/react-bits/staggered-menu";
import { Logo } from "@/components/landing/logo";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";
import { brand, hero, navLinks } from "@/lib/landing-content";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const NAVY_MID = "#123a5c";
const MINT = "#c3ffdc";
const PAPER = "#ffffff";
const LOGO_SRC = "/astro-pc-logo.png";

const menuItems = navLinks.map((link) => ({
  label: link.label,
  ariaLabel: `Ir a ${link.label}`,
  link: link.href,
}));

const navHrefs = navLinks.map((link) => link.href);

function useActiveNavHref(hrefs: readonly string[]) {
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const sections = hrefs
      .map((href) => document.querySelector(href))
      .filter((node): node is Element => node instanceof Element);

    if (sections.length === 0) {
      return;
    }

    const intersecting = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            intersecting.set(entry.target.id, entry.intersectionRatio);
          } else {
            intersecting.delete(entry.target.id);
          }
        }

        const top = [...intersecting.entries()].sort((a, b) => b[1] - a[1])[0];
        setActiveHref(top ? `#${top[0]}` : "");
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.12, 0.3, 0.55] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [hrefs]);

  return activeHref;
}

function useAllowsHoverMotion() {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    const update = () => {
      setIsEnabled(!motion.matches && pointer.matches);
    };

    update();
    motion.addEventListener("change", update);
    pointer.addEventListener("change", update);

    return () => {
      motion.removeEventListener("change", update);
      pointer.removeEventListener("change", update);
    };
  }, []);

  return isEnabled;
}

type NavItemProps = {
  href: string;
  label: string;
  index: number;
  isActive: boolean;
};

function NavItem({ href, label, index, isActive }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
        aria-current={isActive ? "true" : undefined}
        className="group flex items-baseline gap-2 py-2"
      >
        <span
          className={`t-label transition-colors ${
            isActive ? "text-mint" : "text-paper/62 group-hover:text-mint"
          }`}
        >
          0{index + 1}
        </span>
        <span className="relative block h-[1.15em] overflow-hidden font-display text-sm font-bold uppercase tracking-[0.01em]">
          <span
            className={`block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full ${
              isActive ? "text-mint" : "text-paper"
            }`}
          >
            {label}
          </span>
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 block translate-y-full text-mint transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"
          >
            {label}
          </span>
        </span>
      </a>
    </li>
  );
}

export function Header() {
  const activeHref = useActiveNavHref(navHrefs);
  const allowsHoverMotion = useAllowsHoverMotion();
  const whatsappUrl = getWhatsAppUrl("schedule");

  return (
    <>
      <header className="sticky top-0 z-50 hidden border-b border-paper/12 bg-navy/80 backdrop-blur-xl md:block">
        <div className="shell flex h-20 items-center justify-between gap-8">
          <a href="#inicio" className="group flex min-w-0 items-center gap-3">
            <Logo priority className="h-11 w-11 transition-transform duration-300 group-hover:rotate-[8deg]" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-extrabold uppercase tracking-[-0.02em] text-paper">
                {brand.name}
              </span>
              <span className="t-label mt-1 text-mint/70">{brand.region}</span>
            </span>
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {navLinks.map((link, index) => (
                <NavItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  index={index}
                  isActive={activeHref === link.href}
                />
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-2 border border-mint/25 px-3 py-1.5 xl:inline-flex">
              <span className="pulse-dot size-1.5 rounded-full bg-mint" />
              <span className="t-label text-mint">{hero.status}</span>
            </span>
            <Magnet padding={40} magnetStrength={6} disabled={!allowsHoverMotion}>
              <WhatsAppButton messageKey="schedule" variant="compact">
                Agendar
              </WhatsAppButton>
            </Magnet>
          </div>
        </div>
        <div className="scroll-progress h-px w-full bg-mint" />
      </header>

      <div className="sticky top-0 z-50 h-16 border-b border-paper/12 bg-navy/80 backdrop-blur-xl md:hidden" />
      <div className="md:hidden">
        <StaggeredMenu
          isFixed
          position="right"
          items={menuItems}
          socialItems={[{ label: "Agendar por WhatsApp", link: whatsappUrl }]}
          displaySocials
          displayItemNumbering
          logoUrl={LOGO_SRC}
          logoAlt={`${brand.name} — ${brand.tagline}`}
          brandName={brand.name}
          colors={[NAVY_MID, MINT]}
          accentColor={MINT}
          menuButtonColor={PAPER}
          openMenuButtonColor={MINT}
          changeMenuColorOnOpen
          socialsTitle="WhatsApp"
        />
      </div>
    </>
  );
}
