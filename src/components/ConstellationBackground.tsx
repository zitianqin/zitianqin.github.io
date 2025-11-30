"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useState } from "react";
import * as THREE from "three";

type DriftPointsProps = {
  count?: number;
  minRadius?: number;
  maxRadius?: number;
  color?: string;
  size?: number;
  opacity?: number;
  speed?: number;
};

function DriftPoints({
  count = 2000,
  minRadius = 10,
  maxRadius = 26,
  color = "#bcd1ff",
  size = 0.03,
  opacity = 0.95,
  speed = 2.0,
}: DriftPointsProps) {
  // Build a cylindrical starfield with randomized initial depths and per-star speeds
  const { geometry, speeds, nearZ, span } = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const pts = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    const nearPlaneZ = 19; // when stars cross this, they recycle
    const totalSpan = nearPlaneZ + maxRadius + 60; // distance behind camera to recycle from
    for (let i = 0; i < count; i++) {
      const r = minRadius + Math.random() * (maxRadius - minRadius);
      const theta = Math.random() * Math.PI * 2;
      const x = Math.cos(theta) * r;
      const y = Math.sin(theta) * r;
      // Mixture: some stars spawn closer so they are immediately visible
      const spawnClose = Math.random() < 0.35;
      const closeZMin = nearPlaneZ - 16; // e.g., ~3 units in front of origin
      const closeZMax = nearPlaneZ - 4; // still before near plane
      const z = spawnClose
        ? closeZMin + Math.random() * (closeZMax - closeZMin)
        : -Math.random() * totalSpan; // distributed behind
      pts[i * 3] = x;
      pts[i * 3 + 1] = y;
      pts[i * 3 + 2] = z;
      // Per-star speed variance (0.7x..1.3x)
      spd[i] = speed * (0.7 + Math.random() * 0.6);
    }
    g.setAttribute("position", new THREE.BufferAttribute(pts, 3));
    return { geometry: g, speeds: spd, nearZ: nearPlaneZ, span: totalSpan };
  }, [count, minRadius, maxRadius, speed]);

  useFrame((_, delta) => {
    const pos = geometry.attributes.position as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    for (let i = 0; i < pos.count; i++) {
      const base = i * 3;
      arr[base + 2] += speeds[i] * delta;
      if (arr[base + 2] > nearZ) {
        // Recycle with a chance to appear closer for continuous presence
        const r = minRadius + Math.random() * (maxRadius - minRadius);
        const theta = Math.random() * Math.PI * 2;
        arr[base] = Math.cos(theta) * r;
        arr[base + 1] = Math.sin(theta) * r;
        const spawnClose = Math.random() < 0.35;
        const closeZMin = nearZ - 16;
        const closeZMax = nearZ - 4;
        arr[base + 2] = spawnClose
          ? closeZMin + Math.random() * (closeZMax - closeZMin)
          : -span - Math.random() * 40;
      }
    }
    pos.needsUpdate = true;
  });

  return (
    <points geometry={geometry}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation
        depthWrite={false}
        opacity={opacity}
      />
    </points>
  );
}

export default function ConstellationBackground() {
  const [enabled, setEnabled] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(!mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    // Fade in after first paint
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 2000ms ease" }}
    >
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 20], fov: 50 }}>
        <Suspense fallback={null}>
          <fog attach="fog" args={["#02040a", 60, 220]} />
          <ambientLight intensity={0.2} />
          <DriftPoints
            count={5200}
            minRadius={2}
            maxRadius={18}
            color="#dbe5ff"
            size={0.04}
            opacity={1}
            speed={0.35}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
