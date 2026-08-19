"use client";

import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";
import Magnet from "@/components/react-bits/magnet";
import {
  DualSenseMark,
  PcMark,
  Ps5Mark,
} from "@/components/landing/hardware-art";

const pieces = [
  {
    id: "ps5",
    label: "PlayStation 5",
    className: "left-[6%] top-[14%] w-[30%] text-paper",
    delay: 0,
    Mark: Ps5Mark,
  },
  {
    id: "pc",
    label: "PC gamer",
    className: "right-[4%] top-[8%] w-[36%] text-mint",
    delay: 0.4,
    Mark: PcMark,
  },
  {
    id: "dualsense",
    label: "Mando DualSense",
    className: "bottom-[10%] left-[16%] w-[62%] text-paper",
    delay: 0.8,
    Mark: DualSenseMark,
  },
] as const;

export function HardwareStage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
      {pieces.map((piece) => (
        <div key={piece.id} className={`absolute z-10 ${piece.className}`}>
          <Magnet
            padding={28}
            magnetStrength={8}
            disabled={Boolean(prefersReducedMotion)}
            wrapperClassName="block w-full"
          >
            <motion.div
              aria-hidden="true"
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, -14, 0], rotate: [0, 1.4, 0] }
              }
              transition={{
                duration: 5.2,
                repeat: Infinity,
                delay: piece.delay,
                ease: "easeInOut",
              }}
              className="drop-shadow-[0_18px_40px_color-mix(in_srgb,var(--mint)_18%,transparent)]"
            >
              <piece.Mark />
            </motion.div>
            <span className="sr-only">{piece.label}</span>
          </Magnet>
        </div>
      ))}
    </div>
  );
}
