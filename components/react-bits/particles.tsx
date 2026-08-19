"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";
import { Camera, Geometry, Mesh, Program, Renderer } from "ogl";
import "./particles.css";

const defaultColors = ["#ffffff", "#ffffff", "#ffffff"];
const MAX_PIXELS = 1920 * 1080;

function hexToRgb(hex: string): [number, number, number] {
  let value = hex.replace(/^#/, "");
  if (value.length === 3) {
    value = value
      .split("")
      .map((channel) => channel + channel)
      .join("");
  }
  const int = Number.parseInt(value.slice(0, 6), 16);
  const r = ((int >> 16) & 255) / 255;
  const g = ((int >> 8) & 255) / 255;
  const b = (int & 255) / 255;
  return [r, g, b];
}

const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;

  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;
  uniform float uAttenuate;
  uniform float uMaxPointSize;

  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vRandom = random;
    vColor = color;

    vec3 pos = position * uSpread;
    pos.z *= 10.0;

    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);

    vec4 mvPos = viewMatrix * mPos;

    float size = uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5));
    float dist = uAttenuate > 0.5
      ? length(mvPos.xyz)
      : max(abs(mvPos.z), 16.0);
    gl_PointSize = min(size / dist, uMaxPointSize);

    gl_Position = projectionMatrix * mvPos;
  }
`;

const fragment = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform float uAlphaParticles;
  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));

    if(uAlphaParticles < 0.5) {
      if(d > 0.5) {
        discard;
      }
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
    } else {
      float circle = smoothstep(0.5, 0.4, d) * 0.8;
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
    }
  }
`;

type ParticlesProps = {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string[];
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
  disableRotation?: boolean;
  pixelRatio?: number;
  /** Spread particles through the full container instead of a centered sphere. */
  fillPage?: boolean;
} & HTMLAttributes<HTMLDivElement>;

function createParticleBuffers(
  count: number,
  swatches: string[],
  fillPage: boolean,
  aspectY: number,
  pages: number,
) {
  const positions = new Float32Array(count * 3);
  const randoms = new Float32Array(count * 4);
  const colors = new Float32Array(count * 3);
  const slices = Math.max(1, Math.round(pages));

  for (let i = 0; i < count; i++) {
    if (fillPage) {
      const slice = i % slices;
      const sliceSize = (2 * aspectY) / slices;
      const y = -aspectY + slice * sliceSize + Math.random() * sliceSize;
      const z = -0.14 - Math.pow(Math.random(), 0.55) * 0.16;
      positions.set([Math.random() * 2 - 1, y, z], i * 3);
    } else {
      let x: number;
      let y: number;
      let z: number;
      let len: number;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        len = x * x + y * y + z * z;
      } while (len > 1 || len === 0);
      const r = Math.cbrt(Math.random());
      positions.set([x * r, y * r, z * r], i * 3);
    }

    randoms.set(
      [Math.random(), Math.random(), Math.random(), Math.random()],
      i * 4,
    );
    const col = hexToRgb(
      swatches[Math.floor(Math.random() * swatches.length)] ?? "#ffffff",
    );
    colors.set(col, i * 3);
  }

  return { positions, randoms, colors };
}

export default function Particles({
  particleCount = 200,
  particleSpread = 10,
  speed = 0.1,
  particleColors,
  moveParticlesOnHover = false,
  particleHoverFactor = 1,
  alphaParticles = false,
  particleBaseSize = 100,
  sizeRandomness = 1,
  cameraDistance = 20,
  disableRotation = false,
  pixelRatio = 1,
  fillPage = false,
  className,
  ...rest
}: ParticlesProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const paletteKey = (particleColors ?? defaultColors).join(",");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      dpr: pixelRatio,
      depth: false,
      alpha: true,
    });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const camera = new Camera(gl, { fov: 15 });
    camera.position.set(0, 0, cameraDistance);

    const palette = paletteKey.split(",").filter(Boolean);
    const swatches = palette.length > 0 ? palette : defaultColors;

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: particleSpread },
        uBaseSize: { value: particleBaseSize * pixelRatio },
        uSizeRandomness: { value: sizeRandomness },
        uAttenuate: { value: fillPage ? 0 : 1 },
        uMaxPointSize: { value: 8 },
        uAlphaParticles: { value: alphaParticles ? 1 : 0 },
      },
      transparent: true,
      depthTest: false,
    });

    let particles: Mesh | null = null;
    let builtKey = "";

    const buildCloud = (width: number, height: number) => {
      const aspectY = height / Math.max(width, 1);
      const pages = Math.max(1, height / Math.max(window.innerHeight, 1));
      const count = fillPage
        ? Math.min(1000, Math.round(particleCount * pages))
        : particleCount;
      const { positions, randoms, colors } = createParticleBuffers(
        count,
        swatches,
        fillPage,
        aspectY,
        pages,
      );
      const geometry = new Geometry(gl, {
        position: { size: 3, data: positions },
        random: { size: 4, data: randoms },
        color: { size: 3, data: colors },
      });
      particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });
    };

    const resize = () => {
      const width = Math.max(container.clientWidth || window.innerWidth, 1);
      const height = Math.max(
        fillPage
          ? container.clientHeight || window.innerHeight
          : Math.min(container.clientHeight || window.innerHeight, window.innerHeight),
        1,
      );

      const area = width * height;
      const dpr =
        area * pixelRatio * pixelRatio > MAX_PIXELS
          ? Math.sqrt(MAX_PIXELS / area)
          : pixelRatio;
      renderer.dpr = dpr;
      renderer.setSize(width, height);

      if (fillPage) {
        const aspectY = height / width;
        const pad = 1.12;
        camera.orthographic({
          left: -particleSpread * pad,
          right: particleSpread * pad,
          top: particleSpread * aspectY * pad,
          bottom: -particleSpread * aspectY * pad,
          near: 0.1,
          far: 400,
        });
      } else {
        camera.perspective({
          fov: 15,
          aspect: gl.canvas.width / gl.canvas.height,
        });
      }

      program.uniforms.uBaseSize.value =
        particleBaseSize * (gl.canvas.width / width);
      program.uniforms.uMaxPointSize.value = 7 * (gl.canvas.width / width);

      const key = fillPage
        ? `${Math.round(width / 48)}:${Math.round(height / 80)}`
        : "sphere";
      if (key !== builtKey) {
        buildCloud(width, height);
        builtKey = key;
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current = { x, y };
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    window.addEventListener("resize", resize, false);
    resize();
    requestAnimationFrame(() => {
      resize();
    });

    if (moveParticlesOnHover) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    let isVisible = true;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? false;
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(container);

    let animationFrameId = 0;
    let lastTime = performance.now();
    let elapsed = 0;

    const update = (t: number) => {
      animationFrameId = requestAnimationFrame(update);
      if (!particles || !isVisible || document.hidden) {
        lastTime = t;
        return;
      }

      const delta = t - lastTime;
      lastTime = t;
      elapsed += delta * speed;

      program.uniforms.uTime.value = elapsed * 0.001;

      if (moveParticlesOnHover) {
        particles.position.x = -mouseRef.current.x * particleHoverFactor;
        particles.position.y = -mouseRef.current.y * particleHoverFactor;
      } else {
        particles.position.x = 0;
        particles.position.y = 0;
      }

      if (!disableRotation) {
        particles.rotation.x = Math.sin(elapsed * 0.0002) * 0.1;
        particles.rotation.y = Math.cos(elapsed * 0.0005) * 0.15;
        particles.rotation.z += 0.01 * speed;
      }

      renderer.render({ scene: particles, camera });
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("resize", resize);
      if (moveParticlesOnHover) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    particleCount,
    particleSpread,
    speed,
    paletteKey,
    moveParticlesOnHover,
    particleHoverFactor,
    alphaParticles,
    particleBaseSize,
    sizeRandomness,
    cameraDistance,
    disableRotation,
    pixelRatio,
    fillPage,
  ]);

  return (
    <div
      ref={containerRef}
      className={["particles-container", className].filter(Boolean).join(" ")}
      {...rest}
    />
  );
}
