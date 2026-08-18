"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const Threads = dynamic(() => import("@/components/react-bits/threads"), {
  ssr: false,
});

const MINT_RGB: [number, number, number] = [0.765, 1, 0.863];
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(onChange: () => void) {
  const motion = window.matchMedia(REDUCED_MOTION_QUERY);
  motion.addEventListener("change", onChange);
  return () => motion.removeEventListener("change", onChange);
}

const getPrefersReducedMotion = () =>
  window.matchMedia(REDUCED_MOTION_QUERY).matches;

/** En el servidor asumimos motion reducido y servimos la versión estática. */
const getServerSnapshot = () => true;

function StaticRings() {
  return (
    <>
      <div className="absolute -right-24 top-8 size-[28rem] rounded-full border border-mint/15" />
      <div className="absolute -right-8 top-24 size-72 rounded-full border border-mint/25" />
      <div className="absolute right-24 top-40 size-40 rounded-full border border-mint/40" />
    </>
  );
}

export function HeroThreads() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getPrefersReducedMotion,
    getServerSnapshot,
  );

  if (prefersReducedMotion) {
    return <StaticRings />;
  }

  return (
    <div
      className="absolute inset-y-0 right-0 hidden w-[58%] opacity-55 lg:block"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 32%)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 32%)",
      }}
    >
      <Threads
        color={MINT_RGB}
        amplitude={0.85}
        distance={0}
        enableMouseInteraction={false}
      />
    </div>
  );
}
