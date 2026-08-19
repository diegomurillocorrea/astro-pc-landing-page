"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useSyncExternalStore } from "react";

const PixelTrail = dynamic(() => import("@/components/react-bits/pixel-trail"), {
  ssr: false,
});

const MINT = "#c3ffdc";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";

function subscribeToPointerMotion(onChange: () => void) {
  const motion = window.matchMedia(REDUCED_MOTION_QUERY);
  const pointer = window.matchMedia(FINE_POINTER_QUERY);
  motion.addEventListener("change", onChange);
  pointer.addEventListener("change", onChange);
  return () => {
    motion.removeEventListener("change", onChange);
    pointer.removeEventListener("change", onChange);
  };
}

const getShouldEnableTrail = () =>
  !window.matchMedia(REDUCED_MOTION_QUERY).matches &&
  window.matchMedia(FINE_POINTER_QUERY).matches;

/** En el servidor no cargamos WebGL; el cliente decide tras hidratar. */
const getServerSnapshot = () => false;

/**
 * Rastro de píxeles a pantalla completa. Three.js se carga en el primer
 * movimiento del cursor y el canvas solo pinta mientras el rastro vive.
 */
export function LandingPixelTrail() {
  const [hasMovedPointer, setHasMovedPointer] = useState(false);
  const shouldEnableTrail = useSyncExternalStore(
    subscribeToPointerMotion,
    getShouldEnableTrail,
    getServerSnapshot,
  );

  useEffect(() => {
    if (!shouldEnableTrail || hasMovedPointer) return;

    const arm = () => setHasMovedPointer(true);
    window.addEventListener("pointermove", arm, { once: true, passive: true });
    return () => window.removeEventListener("pointermove", arm);
  }, [hasMovedPointer, shouldEnableTrail]);

  if (!shouldEnableTrail || !hasMovedPointer) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden contain-layout contain-paint"
    >
      <PixelTrail
        gridSize={110}
        trailSize={0.045}
        maxAge={220}
        interpolate={1}
        textureSize={256}
        color={MINT}
      />
    </div>
  );
}
