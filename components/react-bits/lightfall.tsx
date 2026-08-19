"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { Mesh, Program, Renderer, Triangle } from "ogl";
import "./lightfall.css";

const MAX_COLORS = 8;
const DEFAULT_COLORS = ["#A6C8FF", "#5227FF", "#FF9FFC"];
const MAX_RENDER_DIM = 1920;

type Rgb = [number, number, number];

export type LightfallProps = {
  colors?: string[];
  backgroundColor?: string;
  speed?: number;
  streakCount?: number;
  streakWidth?: number;
  streakLength?: number;
  glow?: number;
  density?: number;
  twinkle?: number;
  zoom?: number;
  backgroundGlow?: number;
  opacity?: number;
  mouseInteraction?: boolean;
  mouseStrength?: number;
  mouseRadius?: number;
  mouseDampening?: number;
  mixBlendMode?: CSSProperties["mixBlendMode"];
  paused?: boolean;
  dpr?: number;
  className?: string;
};

const hexToRgb = (hex: string): Rgb => {
  const value = hex.replace("#", "").padEnd(6, "0");
  const r = Number.parseInt(value.slice(0, 2), 16) / 255;
  const g = Number.parseInt(value.slice(2, 4), 16) / 255;
  const b = Number.parseInt(value.slice(4, 6), 16) / 255;
  return [r, g, b];
};

const prepColors = (input: string[] | undefined) => {
  const base = (input && input.length > 0 ? input : DEFAULT_COLORS).slice(
    0,
    MAX_COLORS,
  );
  const count = base.length;
  const arr: Rgb[] = [];
  for (let i = 0; i < MAX_COLORS; i += 1) {
    arr.push(hexToRgb(base[Math.min(i, base.length - 1)] ?? DEFAULT_COLORS[0]));
  }
  const avg: Rgb = [0, 0, 0];
  for (let i = 0; i < count; i += 1) {
    avg[0] += arr[i][0];
    avg[1] += arr[i][1];
    avg[2] += arr[i][2];
  }
  avg[0] /= count;
  avg[1] /= count;
  avg[2] /= count;
  return { arr, count, avg };
};

const vertex = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `
precision highp float;

uniform vec3  iResolution;
uniform vec2  iMouse;
uniform float iTime;

uniform vec3  uColor0;
uniform vec3  uColor1;
uniform vec3  uColor2;
uniform vec3  uColor3;
uniform vec3  uColor4;
uniform vec3  uColor5;
uniform vec3  uColor6;
uniform vec3  uColor7;
uniform int   uColorCount;

uniform vec3  uBgColor;
uniform vec3  uMouseColor;
uniform float uSpeed;
uniform int   uStreakCount;
uniform float uStreakWidth;
uniform float uStreakLength;
uniform float uGlow;
uniform float uDensity;
uniform float uTwinkle;
uniform float uZoom;
uniform float uBgGlow;
uniform float uOpacity;
uniform float uMouseEnabled;
uniform float uMouseStrength;
uniform float uMouseRadius;

varying vec2 vUv;

vec3 palette(float h) {
  int count = uColorCount;
  if (count < 1) count = 1;
  int idx = int(floor(clamp(h, 0.0, 0.999999) * float(count)));
  if (idx <= 0) return uColor0;
  if (idx == 1) return uColor1;
  if (idx == 2) return uColor2;
  if (idx == 3) return uColor3;
  if (idx == 4) return uColor4;
  if (idx == 5) return uColor5;
  if (idx == 6) return uColor6;
  return uColor7;
}

vec3 tanhv(vec3 x) {
  vec3 e = exp(-2.0 * x);
  return (1.0 - e) / (1.0 + e);
}

vec2 sceneC(vec2 frag, vec2 r) {
  vec2 P = (frag + frag - r) / r.x;
  float z = 0.0;
  float d = 1e3;
  vec4 O = vec4(0.0);
  for (int k = 0; k < 39; k++) {
    if (d <= 1e-4) break;
    O = z * normalize(vec4(P, uZoom, 0.0)) - vec4(0.0, 4.0, 1.0, 0.0) / 4.5;
    d = 1.0 - sqrt(length(O * O));
    z += d;
  }
  return vec2(O.x, atan(O.z, O.y));
}

void mainImage(out vec4 o, vec2 C) {
  vec2 r = iResolution.xy;
  vec2 uv0 = (C + C - r) / r.x;
  float T = 0.1 * iTime * uSpeed + 9.0;
  float angRings = max(1.0, floor(6.28318530718 * max(uDensity, 0.05) + 0.5));
  vec2 Y = vec2(5e-3, 6.28318530718 / angRings);

  vec2 c0 = sceneC(C, r);
  vec2 cdx = sceneC(C + vec2(1.0, 0.0), r);
  vec2 cdy = sceneC(C + vec2(0.0, 1.0), r);
  vec2 dCx = cdx - c0;
  vec2 dCy = cdy - c0;
  dCx.y -= 6.28318530718 * floor(dCx.y / 6.28318530718 + 0.5);
  dCy.y -= 6.28318530718 * floor(dCy.y / 6.28318530718 + 0.5);
  vec2 fw = abs(dCx) + abs(dCy);
  C = c0;

  vec2 P = vec2(2.0, 1.0) * uv0 - (r / r.x) * vec2(0.0, 1.0);
  vec4 O = vec4(uBgColor * 90.0 * uBgGlow / (1e3 * dot(P, P) + 6.0), 0.0);

  float mGlow = 0.0;
  if (uMouseEnabled > 0.5) {
    vec2 mN = (iMouse + iMouse - r) / r.x;
    float md = length(uv0 - mN);
    mGlow = exp(-md * md / max(uMouseRadius * uMouseRadius, 1e-4)) * uMouseStrength;
    O.rgb += uMouseColor * mGlow * 0.25;
  }

  float zr = 5e-4 * uStreakWidth;
  vec2 rr = vec2(max(length(fw), 1e-5));
  float tail = 19.0 / max(uStreakLength, 0.05);

  for (int m = 0; m < 16; m++) {
    if (m >= uStreakCount) break;
    float jf = float(m) + 1.0;
    float ic = fract(sin(dot(vec2(jf, floor(C.x / Y.x + 0.5)), vec2(7.0, 11.0)) * 73.0));
    vec2 Pp = C - (T + T * ic) * vec2(0.0, 1.0);
    Pp -= floor(Pp / Y + 0.5) * Y;
    float h = fract(8663.0 * ic);
    vec3 col = palette(h);
    float weight = mix(1.5, 1.0 + sin(T + 7.0 * h + 4.0), uTwinkle);
    weight *= (1.0 + mGlow * 2.0);
    vec2 inner = vec2(length(max(Pp, vec2(-1.0, 0.0))), length(Pp) - zr) - zr;
    vec2 sm = vec2(1.0) - smoothstep(-rr, rr, inner);
    O.rgb += dot(sm, vec2(exp(tail * Pp.y), 3.0)) * col * weight;
    C.x += Y.x / 8.0;
  }

  vec3 colr = sqrt(tanhv(max(O.rgb * uGlow - vec3(0.04, 0.08, 0.02), 0.0)));
  float luma = clamp(dot(colr, vec3(0.2126, 0.7152, 0.0722)) * 3.2, 0.0, 1.0);
  o = vec4(colr, uOpacity * luma);
}

void main() {
  vec4 color;
  mainImage(color, vUv * iResolution.xy);
  gl_FragColor = color;
}
`;

/**
 * Fondo WebGL de meteoros (React Bits Lightfall) sobre un canvas OGL.
 */
export default function Lightfall({
  className,
  dpr,
  paused = false,
  colors = DEFAULT_COLORS,
  backgroundColor = "#0A29FF",
  speed = 0.5,
  streakCount = 2,
  streakWidth = 1,
  streakLength = 1,
  glow = 1,
  density = 0.6,
  twinkle = 1,
  zoom = 3,
  backgroundGlow = 0.5,
  opacity = 1,
  mouseInteraction = true,
  mouseStrength = 0.5,
  mouseRadius = 1,
  mouseDampening = 0.15,
  mixBlendMode,
}: LightfallProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef(0);
  const mouseTargetRef = useRef<[number, number]>([0, 0]);
  const lastTimeRef = useRef(0);
  const propsRef = useRef({
    dpr,
    paused,
    colors,
    backgroundColor,
    speed,
    streakCount,
    streakWidth,
    streakLength,
    glow,
    density,
    twinkle,
    zoom,
    backgroundGlow,
    opacity,
    mouseInteraction,
    mouseStrength,
    mouseRadius,
    mouseDampening,
  });
  propsRef.current = {
    dpr,
    paused,
    colors,
    backgroundColor,
    speed,
    streakCount,
    streakWidth,
    streakLength,
    glow,
    density,
    twinkle,
    zoom,
    backgroundGlow,
    opacity,
    mouseInteraction,
    mouseStrength,
    mouseRadius,
    mouseDampening,
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const initialDpr =
      propsRef.current.dpr ??
      (typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1);

    const renderer = new Renderer({
      dpr: initialDpr,
      alpha: true,
      antialias: true,
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    const canvas = gl.canvas as HTMLCanvasElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);

    const { arr, count, avg } = prepColors(propsRef.current.colors);
    const uniforms = {
      iResolution: { value: [gl.drawingBufferWidth, gl.drawingBufferHeight, 1] },
      iMouse: { value: [0, 0] as [number, number] },
      iTime: { value: 0 },
      uColor0: { value: arr[0] },
      uColor1: { value: arr[1] },
      uColor2: { value: arr[2] },
      uColor3: { value: arr[3] },
      uColor4: { value: arr[4] },
      uColor5: { value: arr[5] },
      uColor6: { value: arr[6] },
      uColor7: { value: arr[7] },
      uColorCount: { value: count },
      uBgColor: { value: hexToRgb(propsRef.current.backgroundColor) },
      uMouseColor: { value: avg },
      uSpeed: { value: propsRef.current.speed },
      uStreakCount: {
        value: Math.max(1, Math.min(16, Math.round(propsRef.current.streakCount))),
      },
      uStreakWidth: { value: propsRef.current.streakWidth },
      uStreakLength: { value: propsRef.current.streakLength },
      uGlow: { value: propsRef.current.glow },
      uDensity: { value: propsRef.current.density },
      uTwinkle: { value: propsRef.current.twinkle },
      uZoom: { value: propsRef.current.zoom },
      uBgGlow: { value: propsRef.current.backgroundGlow },
      uOpacity: { value: propsRef.current.opacity },
      uMouseEnabled: { value: propsRef.current.mouseInteraction ? 1 : 0 },
      uMouseStrength: { value: propsRef.current.mouseStrength },
      uMouseRadius: { value: propsRef.current.mouseRadius },
    };

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms,
      transparent: true,
      depthTest: false,
    });
    const geometry = new Triangle(gl);
    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      const latest = propsRef.current;
      const baseDpr = Math.min(
        latest.dpr ?? (typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1),
        2,
      );
      const longestSide = Math.max(clientWidth, clientHeight) * baseDpr;
      renderer.dpr =
        longestSide > MAX_RENDER_DIM
          ? (baseDpr * MAX_RENDER_DIM) / longestSide
          : baseDpr;
      renderer.setSize(clientWidth, clientHeight);
      uniforms.iResolution.value = [
        gl.drawingBufferWidth,
        gl.drawingBufferHeight,
        1,
      ];
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scale = renderer.dpr || 1;
      const x = (event.clientX - rect.left) * scale;
      const y = (rect.height - (event.clientY - rect.top)) * scale;
      mouseTargetRef.current = [x, y];
      if (propsRef.current.mouseDampening <= 0) {
        uniforms.iMouse.value = [x, y];
      }
    };

    if (propsRef.current.mouseInteraction) {
      canvas.addEventListener("pointermove", onPointerMove);
    }

    const applyProps = () => {
      const latest = propsRef.current;
      const prepared = prepColors(latest.colors);
      uniforms.uColor0.value = prepared.arr[0];
      uniforms.uColor1.value = prepared.arr[1];
      uniforms.uColor2.value = prepared.arr[2];
      uniforms.uColor3.value = prepared.arr[3];
      uniforms.uColor4.value = prepared.arr[4];
      uniforms.uColor5.value = prepared.arr[5];
      uniforms.uColor6.value = prepared.arr[6];
      uniforms.uColor7.value = prepared.arr[7];
      uniforms.uColorCount.value = prepared.count;
      uniforms.uBgColor.value = hexToRgb(latest.backgroundColor);
      uniforms.uMouseColor.value = prepared.avg;
      uniforms.uSpeed.value = latest.speed;
      uniforms.uStreakCount.value = Math.max(
        1,
        Math.min(16, Math.round(latest.streakCount)),
      );
      uniforms.uStreakWidth.value = latest.streakWidth;
      uniforms.uStreakLength.value = latest.streakLength;
      uniforms.uGlow.value = latest.glow;
      uniforms.uDensity.value = latest.density;
      uniforms.uTwinkle.value = latest.twinkle;
      uniforms.uZoom.value = latest.zoom;
      uniforms.uBgGlow.value = latest.backgroundGlow;
      uniforms.uOpacity.value = latest.opacity;
      uniforms.uMouseEnabled.value = latest.mouseInteraction ? 1 : 0;
      uniforms.uMouseStrength.value = latest.mouseStrength;
      uniforms.uMouseRadius.value = latest.mouseRadius;
    };

    const loop = (time: number) => {
      rafRef.current = requestAnimationFrame(loop);
      const latest = propsRef.current;
      uniforms.iTime.value = time * 0.001;

      if (latest.mouseDampening > 0) {
        if (!lastTimeRef.current) lastTimeRef.current = time;
        const dt = (time - lastTimeRef.current) / 1000;
        lastTimeRef.current = time;
        const tau = Math.max(1e-4, latest.mouseDampening);
        let factor = 1 - Math.exp(-dt / tau);
        if (factor > 1) factor = 1;
        const target = mouseTargetRef.current;
        const current = uniforms.iMouse.value;
        current[0] += (target[0] - current[0]) * factor;
        current[1] += (target[1] - current[1]) * factor;
      } else {
        lastTimeRef.current = time;
      }

      if (latest.paused || document.hidden) return;

      applyProps();
      try {
        renderer.render({ scene: mesh });
      } catch (error) {
        console.error(error);
      }
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      if (canvas.parentElement === container) {
        container.removeChild(canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`lightfall-container ${className ?? ""}`}
      style={mixBlendMode ? { mixBlendMode } : undefined}
    />
  );
}
