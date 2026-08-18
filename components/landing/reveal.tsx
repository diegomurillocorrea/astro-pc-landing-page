"use client";

import {
  useEffect,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** Etiqueta a renderizar. Por defecto `div`. */
  as?: ElementType;
  /** Retraso en ms para escalonar grupos de elementos. */
  delay?: number;
  /** Desplazamiento inicial en el eje Y (por defecto 1.75rem). */
  distance?: string;
  className?: string;
  style?: CSSProperties;
};

/**
 * Revelado al entrar en viewport usando IntersectionObserver.
 * Sólo anima `opacity` y `transform`; el estado inicial vive en `globals.css`
 * y se anula con `prefers-reduced-motion` o sin JavaScript.
 */
export function Reveal({
  children,
  as,
  delay = 0,
  distance,
  className,
  style,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!node || isVisible) {
      return;
    }

    // Con motion reducido el CSS ya deja el contenido visible: no observamos.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node, isVisible]);

  return (
    <Tag
      ref={setNode}
      data-reveal={isVisible ? "in" : "out"}
      className={className}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          ...(distance ? { "--reveal-y": distance } : null),
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
