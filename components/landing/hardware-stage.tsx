"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
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
    className: "w-[min(100%,8.25rem)] justify-self-start self-start text-paper",
    rotate: -16,
    delay: 0,
    Mark: Ps5Mark,
  },
  {
    id: "pc",
    label: "PC gamer",
    className:
      "mt-16 w-[min(100%,9rem)] justify-self-end self-start text-mint sm:mt-20",
    rotate: 13,
    delay: 0.4,
    Mark: PcMark,
  },
  {
    id: "dualsense",
    label: "DualSense PS5",
    className:
      "col-span-2 ml-[18%] w-[min(58%,13.75rem)] justify-self-start text-paper",
    rotate: -12,
    delay: 0.8,
    Mark: DualSenseMark,
  },
] as const;

export function HardwareStage() {
  const prefersReducedMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const node = stageRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "120px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const shouldAnimate = isInView && !prefersReducedMotion;

  return (
    <div
      ref={stageRef}
      className="relative grid w-full grid-cols-2 items-start gap-x-12 gap-y-16 overflow-visible sm:gap-x-16 sm:gap-y-20 lg:gap-x-20 lg:gap-y-24"
    >
      {pieces.map((piece) => (
        <div key={piece.id} className={piece.className}>
          <Magnet
            padding={16}
            magnetStrength={8}
            disabled={Boolean(prefersReducedMotion) || !isInView}
            wrapperClassName="block w-full"
          >
            <motion.div
              aria-hidden="true"
              initial={{ rotate: piece.rotate }}
              animate={
                shouldAnimate
                  ? {
                      y: [0, -10, 0],
                      rotate: [piece.rotate, piece.rotate + 1.8, piece.rotate],
                    }
                  : { y: 0, rotate: piece.rotate }
              }
              transition={{
                duration: 5.2,
                repeat: shouldAnimate ? Infinity : 0,
                delay: piece.delay,
                ease: "easeInOut",
              }}
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
