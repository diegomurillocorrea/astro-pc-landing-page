"use client";

import { useEffect, useState } from "react";
import Magnet from "@/components/react-bits/magnet";
import StaggeredMenu from "@/components/react-bits/staggered-menu";
import { BrandLockup } from "@/components/landing/logo";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";
import { brand, contact, navLinks } from "@/lib/landing-content";
import { scrollPageToTop } from "@/lib/scroll-to-top";
import { getDisplayPhone, getTelHref, getWhatsAppUrl } from "@/lib/whatsapp";

const NAVY_MID = "#123a5c";
const MINT = "#c3ffdc";
const PAPER = "#ffffff";
const LOGO_SRC = "/astro-logo.png";

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
  isActive: boolean;
};

function NavItem({ href, label, isActive }: Omit<NavItemProps, "index">) {
  return (
    <li>
      <a
        href={href}
        aria-current={isActive ? "true" : undefined}
        className="group flex items-baseline py-1.5"
      >
        <span className="relative block h-[1.15em] overflow-hidden font-sans text-sm font-semibold">
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
  const displayPhone = getDisplayPhone();
  const telHref = getTelHref();

  return (
    <>
      <header className="sticky top-0 z-50 hidden border-b border-paper/12 bg-navy/80 backdrop-blur-xl md:block">
        <div className="shell flex h-18 items-center justify-between gap-4 lg:gap-8">
          <a href="#inicio" className="min-w-0" onClick={scrollPageToTop}>
            <BrandLockup priority size="md" />
          </a>

          <nav aria-label="Principal">
            <ul className="flex items-center gap-4 lg:gap-7">
              {navLinks.map((link) => (
                <NavItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={activeHref === link.href}
                />
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3 lg:gap-5">
            <a
              href={telHref}
              aria-label={`Llamar a ${brand.name} al ${displayPhone}`}
              className="hidden text-right xl:block"
            >
              <span className="block font-sans text-sm font-semibold text-paper transition-colors hover:text-mint">
                {displayPhone}
              </span>
              <span className="mt-0.5 block text-[0.6875rem] leading-snug text-paper/62">
                {contact.hoursShort}
              </span>
            </a>
            <Magnet padding={40} magnetStrength={6} disabled={!allowsHoverMotion}>
              <WhatsAppButton messageKey="schedule" variant="compact">
                WhatsApp
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
          socialItems={[
            { label: contact.whatsappLabel, link: whatsappUrl },
            { label: `${contact.callLabel} ${displayPhone}`, link: telHref },
          ]}
          displaySocials
          displayItemNumbering={false}
          logoUrl={LOGO_SRC}
          logoAlt={brand.name}
          brandName={brand.name}
          onLogoClick={scrollPageToTop}
          colors={[NAVY_MID, MINT]}
          accentColor={MINT}
          menuButtonColor={PAPER}
          openMenuButtonColor={MINT}
          changeMenuColorOnOpen
          socialsTitle="Contacto"
          socialNote={`${contact.hours} ${contact.closed}`}
        />
      </div>
    </>
  );
}
