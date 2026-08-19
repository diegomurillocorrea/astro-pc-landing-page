"use client";

import { motion, useReducedMotion } from "motion/react";
import Magnet from "@/components/react-bits/magnet";
import { DualSenseMark } from "@/components/landing/hardware-art";

export function HallHardware() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <Magnet
        padding={36}
        magnetStrength={7}
        disabled={Boolean(prefersReducedMotion)}
        wrapperClassName="block w-full"
      >
        <motion.div
          aria-hidden="true"
          animate={
            prefersReducedMotion
              ? undefined
              : { y: [0, -10, 0], rotate: [0, -2, 0] }
          }
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-full text-paper drop-shadow-[0_22px_44px_color-mix(in_srgb,var(--navy)_28%,transparent)]"
        >
          <DualSenseMark />
        </motion.div>
      </Magnet>
    </div>
  );
}
