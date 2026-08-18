import type { CSSProperties } from "react";
import { Sparkle } from "@/components/landing/marks";

type MarqueeProps = {
  items: readonly string[];
  /** Duración de un ciclo completo en segundos. */
  duration?: number;
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
  markClassName?: string;
};

/**
 * Cinta infinita puramente CSS. Es decorativa: el contenido que transporta
 * siempre está disponible en texto real dentro de las secciones.
 */
export function Marquee({
  items,
  duration = 42,
  reverse = false,
  className = "",
  itemClassName = "",
  markClassName = "",
}: MarqueeProps) {
  return (
    <div aria-hidden="true" className={`overflow-hidden ${className}`}>
      <div
        className="marquee-track"
        data-direction={reverse ? "reverse" : undefined}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <li key={item} className={`flex items-center ${itemClassName}`}>
                <span>{item}</span>
                <Sparkle className={markClassName} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
