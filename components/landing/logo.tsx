import Image from "next/image";
import { brand } from "@/lib/landing-content";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-16 w-16", priority = false }: LogoProps) {
  return (
    <Image
      src="/astro-pc-logo.png"
      alt={`${brand.name} — ${brand.tagline}`}
      width={2000}
      height={2000}
      priority={priority}
      className={`object-contain mix-blend-screen ${className}`}
    />
  );
}
