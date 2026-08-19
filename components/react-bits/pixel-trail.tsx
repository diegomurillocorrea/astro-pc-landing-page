"use client";

/* Three.js textures are configured in place; nearest sampling keeps the pixel grid sharp. */
/* eslint-disable react-hooks/immutability */
import { useCallback, useEffect, useMemo, useRef } from "react";
import { Canvas, useThree, type CanvasProps } from "@react-three/fiber";
import { shaderMaterial, useTrailTexture } from "@react-three/drei";
import * as THREE from "three";

import "./pixel-trail.css";

type GooeyFilterProps = {
  id?: string;
  strength?: number;
};

type SceneProps = {
  gridSize: number;
  trailSize: number;
  maxAge: number;
  interpolate: number;
  easingFunction: (x: number) => number;
  pixelColor: string;
  textureSize: number;
};

type PixelTrailProps = {
  gridSize?: number;
  trailSize?: number;
  maxAge?: number;
  interpolate?: number;
  easingFunction?: (x: number) => number;
  canvasProps?: Partial<CanvasProps>;
  glProps?: CanvasProps["gl"];
  gooeyFilter?: { id: string; strength: number };
  color?: string;
  className?: string;
  textureSize?: number;
};

const identityEase = (x: number) => x;

const DEFAULT_GL_PROPS: NonNullable<CanvasProps["gl"]> = {
  antialias: false,
  alpha: true,
  depth: false,
  stencil: false,
  powerPreference: "low-power",
};

function GooeyFilter({ id = "goo-filter", strength = 10 }: GooeyFilterProps) {
  return (
    <svg className="goo-filter-container" aria-hidden="true">
      <defs>
        <filter id={id}>
          <feGaussianBlur in="SourceGraphic" stdDeviation={strength} result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
}

const DotMaterial = shaderMaterial(
  {
    resolution: new THREE.Vector2(),
    mouseTrail: null,
    gridSize: 100,
    pixelColor: new THREE.Color("#ffffff"),
  },
  `
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  `
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      return clamp((uv - 0.5) * s + 0.5, 0.0, 1.0);
    }

    void main() {
      vec2 uv = coverUv(gl_FragCoord.xy / resolution);
      vec2 gridUvCenter = (floor(uv * gridSize) + 0.5) / gridSize;
      float trail = texture2D(mouseTrail, gridUvCenter).r;
      gl_FragColor = vec4(pixelColor, trail);
    }
  `,
  (material) => {
    if (!material) return;
    material.transparent = true;
    material.depthWrite = false;
    material.depthTest = false;
    material.toneMapped = false;
  },
);

function skipRaycast() {}

function Scene({
  gridSize,
  trailSize,
  maxAge,
  interpolate,
  easingFunction,
  pixelColor,
  textureSize,
}: SceneProps) {
  const size = useThree((s) => s.size);
  const viewport = useThree((s) => s.viewport);
  const gl = useThree((s) => s.gl);
  const invalidate = useThree((s) => s.invalidate);

  const dotMaterial = useMemo(() => new DotMaterial(), []);

  useEffect(() => {
    return () => {
      dotMaterial.dispose();
    };
  }, [dotMaterial]);

  const [trail, onMove] = useTrailTexture({
    size: textureSize,
    radius: trailSize,
    maxAge,
    interpolate: interpolate || 0.1,
    ease: easingFunction || identityEase,
  });

  if (trail && trail.minFilter !== THREE.NearestFilter) {
    trail.minFilter = THREE.NearestFilter;
    trail.magFilter = THREE.NearestFilter;
    trail.wrapS = THREE.ClampToEdgeWrapping;
    trail.wrapT = THREE.ClampToEdgeWrapping;
  }

  const onMoveRef = useRef(onMove);

  useEffect(() => {
    onMoveRef.current = onMove;
  }, [onMove]);

  const keepRendering = useCallback(() => {
    const canvas = gl.domElement;
    let aliveUntil = performance.now() + maxAge + 48;
    let frame = 0;

    const tick = () => {
      if (document.hidden) {
        frame = 0;
        return;
      }
      invalidate();
      if (performance.now() < aliveUntil) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
      }
    };

    const bump = () => {
      aliveUntil = performance.now() + maxAge + 48;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    let pendingX = 0;
    let pendingY = 0;
    let hasPending = false;
    let mergeFrame = 0;

    const flush = () => {
      mergeFrame = 0;
      if (!hasPending) return;
      hasPending = false;
      onMoveRef.current({ uv: { x: pendingX, y: pendingY } } as never);
      bump();
    };

    const handleMove = (event: PointerEvent) => {
      if (document.hidden) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      pendingX = (event.clientX - rect.left) / rect.width;
      pendingY = 1 - (event.clientY - rect.top) / rect.height;
      hasPending = true;
      if (!mergeFrame) mergeFrame = requestAnimationFrame(flush);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        if (frame) cancelAnimationFrame(frame);
        if (mergeFrame) cancelAnimationFrame(mergeFrame);
        frame = 0;
        mergeFrame = 0;
        return;
      }
      bump();
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (frame) cancelAnimationFrame(frame);
      if (mergeFrame) cancelAnimationFrame(mergeFrame);
    };
  }, [gl, invalidate, maxAge]);

  useEffect(keepRendering, [keepRendering]);

  const scale = Math.max(viewport.width, viewport.height) / 2;

  return (
    <mesh scale={[scale, scale, 1]} raycast={skipRaycast}>
      <planeGeometry args={[2, 2]} />
      <primitive
        object={dotMaterial}
        gridSize={gridSize}
        pixelColor={pixelColor}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        mouseTrail={trail}
      />
    </mesh>
  );
}

/**
 * Pixel trail from React Bits: a WebGL grid that lights up along the pointer.
 */
export default function PixelTrail({
  gridSize = 40,
  trailSize = 0.1,
  maxAge = 250,
  interpolate = 5,
  easingFunction = identityEase,
  canvasProps = {},
  glProps = DEFAULT_GL_PROPS,
  gooeyFilter,
  color = "#ffffff",
  className = "",
  textureSize = 256,
}: PixelTrailProps) {
  const { style: canvasStyle, ...restCanvasProps } = canvasProps;

  return (
    <>
      {gooeyFilter ? (
        <GooeyFilter id={gooeyFilter.id} strength={gooeyFilter.strength} />
      ) : null}
      <Canvas
        gl={glProps}
        flat
        dpr={1}
        frameloop="demand"
        {...restCanvasProps}
        className={`pixel-canvas ${className}`.trim()}
        style={{
          ...(gooeyFilter ? { filter: `url(#${gooeyFilter.id})` } : null),
          ...canvasStyle,
          pointerEvents: "none",
        }}
      >
        <Scene
          gridSize={gridSize}
          trailSize={trailSize}
          maxAge={maxAge}
          interpolate={interpolate}
          easingFunction={easingFunction}
          pixelColor={color}
          textureSize={textureSize}
        />
      </Canvas>
    </>
  );
}
