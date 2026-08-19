"use client";

import TextLoop from "@/components/react-bits/text-loop";
import { marqueeItems } from "@/lib/landing-content";

const LOOP_TEXT = marqueeItems.join(" ✦ ");

/**
 * Cinta mint ondulada entre el hero y el manifiesto. El texto es decorativo:
 * las mismas ideas están en las secciones de abajo.
 */
export function LandingTextLoop() {
  return (
    <div aria-hidden="true" className="landing-text-loop-frame">
      <TextLoop
        text={LOOP_TEXT}
        shape="wave"
        speed={64}
        direction="forward"
        separator="✦"
        curviness={16}
        fontSize={26}
        fontWeight={700}
        letterSpacing={6}
        uppercase
        color="var(--ink)"
        ribbon
        ribbonColor="var(--mint)"
        ribbonWidth={44}
        pauseOnHover={false}
        className="landing-text-loop"
      />
    </div>
  );
}
