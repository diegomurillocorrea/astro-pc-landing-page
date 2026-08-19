"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const Lightfall = dynamic(() => import("@/components/react-bits/lightfall"), {
  ssr: false,
});

const STREAK_COLORS = ["#3d6d9a", "#052743", "#1a4f80", "#03182a"];
const MINT = "#c3ffdc";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(onChange: () => void) {
  const motion = window.matchMedia(REDUCED_MOTION_QUERY);
  motion.addEventListener("change", onChange);
  return () => motion.removeEventListener("change", onChange);
}

const getPrefersReducedMotion = () =>
  window.matchMedia(REDUCED_MOTION_QUERY).matches;

/** En el servidor no montamos WebGL. */
const getServerSnapshot = () => true;

/**
 * Meteoros azul-negro detrás del cierre. El canvas se crea al entrar en vista
 * y se congela al salir para no gastar GPU fuera de pantalla.
 */
export function LandingLightfall() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getPrefersReducedMotion,
    getServerSnapshot,
  );

  useEffect(() => {
    const host = hostRef.current;
    if (!host || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries[0]?.isIntersecting ?? false;
        setIsInView(visible);
        if (visible) setHasBeenInView(true);
      },
      { rootMargin: "120px", threshold: 0 },
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 opacity-55"
    >
      {hasBeenInView ? (
        <Lightfall
          colors={STREAK_COLORS}
          backgroundColor={MINT}
          speed={0.35}
          streakCount={4}
          streakWidth={0.7}
          streakLength={1.35}
          glow={0.95}
          density={0.42}
          twinkle={0.25}
          zoom={2.8}
          backgroundGlow={0}
          opacity={0.7}
          mouseInteraction={false}
          mixBlendMode="multiply"
          paused={!isInView}
        />
      ) : null}
    </div>
  );
}
