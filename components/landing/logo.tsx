import { brand } from "@/lib/landing-content";

type LogoProps = {
  className?: string;
  tone?: "on-dark" | "on-light";
};

/** Ícono del planeta. El nombre va en texto, no dentro de la imagen. */
export function Logo({
  className = "h-12 w-12",
  tone = "on-dark",
}: LogoProps) {
  const isOnDark = tone === "on-dark";

  return (
    <span
      aria-hidden="true"
      className={`logo-planet inline-block shrink-0 ${
        isOnDark ? "text-paper" : "text-navy"
      } ${className}`}
    />
  );
}

type BrandLockupProps = {
  priority?: boolean;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  tone?: "on-dark" | "on-light";
};

const iconSize = {
  sm: "h-11 w-11",
  md: "h-14 w-14",
  lg: "h-[4.5rem] w-[4.5rem] sm:h-24 sm:w-24",
} as const;

const nameSize = {
  sm: "text-lg",
  md: "text-xl sm:text-2xl",
  lg: "text-3xl sm:text-4xl",
} as const;

export function BrandLockup({
  showTagline = false,
  size = "md",
  tone = "on-dark",
}: BrandLockupProps) {
  const isOnDark = tone === "on-dark";

  return (
    <span className="flex min-w-0 items-center gap-3">
      <Logo tone={tone} className={iconSize[size]} />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`font-display font-bold uppercase tracking-[-0.03em] ${
            isOnDark ? "text-paper" : "text-navy"
          } ${nameSize[size]}`}
        >
          {brand.name}
        </span>
        {showTagline ? (
          <span
            className={`mt-1.5 text-[0.7rem] font-medium tracking-wide sm:text-xs ${
              isOnDark ? "text-mint" : "text-navy/70"
            }`}
          >
            {brand.tagline}
          </span>
        ) : null}
      </span>
    </span>
  );
}
