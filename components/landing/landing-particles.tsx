"use client";

import dynamic from "next/dynamic";

const Particles = dynamic(() => import("@/components/react-bits/particles"), {
  ssr: false,
});

const PARTICLE_COLORS = ["#ffffff"];

export function LandingParticles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-1 mix-blend-screen"
    >
      <Particles
        fillPage
        particleColors={PARTICLE_COLORS}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={80}
        sizeRandomness={0.55}
        cameraDistance={20}
        moveParticlesOnHover
        particleHoverFactor={0.35}
        alphaParticles
        disableRotation
        pixelRatio={1}
      />
    </div>
  );
}
