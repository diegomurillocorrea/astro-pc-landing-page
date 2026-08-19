"use client";

import {
  useEffect,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type MagnetProps = {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Sigue el cursor sin pasar por React: el transform va al DOM.
 * El listener de window se apaga cuando el imán sale del viewport.
 */
export default function Magnet({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.5s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}: MagnetProps) {
  const magnetRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const isActiveRef = useRef(false);

  useEffect(() => {
    const wrap = magnetRef.current;
    const inner = innerRef.current;

    if (!wrap || !inner) {
      return;
    }

    const reset = () => {
      isActiveRef.current = false;
      inner.style.transition = inactiveTransition;
      inner.style.transform = "translate3d(0, 0, 0)";
    };

    if (disabled) {
      reset();
      inner.style.willChange = "auto";
      return;
    }

    inner.style.willChange = "transform";

    const handleMouseMove = (event: MouseEvent) => {
      const { left, top, width, height } = wrap.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const inRange =
        Math.abs(centerX - event.clientX) < width / 2 + padding &&
        Math.abs(centerY - event.clientY) < height / 2 + padding;

      if (inRange) {
        const x = (event.clientX - centerX) / magnetStrength;
        const y = (event.clientY - centerY) / magnetStrength;

        if (!isActiveRef.current) {
          isActiveRef.current = true;
          inner.style.transition = activeTransition;
        }

        inner.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        return;
      }

      if (!isActiveRef.current) {
        return;
      }

      reset();
    };

    let isListening = false;

    const attach = () => {
      if (isListening) {
        return;
      }

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      isListening = true;
    };

    const detach = () => {
      if (!isListening) {
        return;
      }

      window.removeEventListener("mousemove", handleMouseMove);
      isListening = false;
      reset();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          attach();
          return;
        }

        detach();
      },
      { rootMargin: "80px" },
    );

    observer.observe(wrap);

    return () => {
      observer.disconnect();
      detach();
    };
  }, [
    activeTransition,
    disabled,
    inactiveTransition,
    magnetStrength,
    padding,
  ]);

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: "relative", display: "inline-block" }}
      {...props}
    >
      <div ref={innerRef} className={innerClassName}>
        {children}
      </div>
    </div>
  );
}
