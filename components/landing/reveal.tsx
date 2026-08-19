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
 * El primer pintado deja el contenido visible; sólo se oculta lo que está
 * bajo el pliegue, para animarlo al entrar.
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
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!node) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries.some((entry) => entry.isIntersecting);

        if (isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
          return;
        }

        setIsVisible(false);
      },
      { rootMargin: "0px 0px 0px 0px", threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);

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
