"use client";

import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";

type CardData = {
  title: string;
  description: string;
  link: string;
};

function Card({
  position,
  rotation,
  data,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  data: CardData;
}) {
  const group = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, dt) => {
    if (!group.current) return;
    const targetScale = hovered ? 1.06 : 1.0;
    group.current.scale.x += (targetScale - group.current.scale.x) * 8 * dt;
    group.current.scale.y = group.current.scale.x;
    group.current.scale.z = group.current.scale.x;
    group.current.rotation.y += dt * 0.1;
  });

  const handleClick = () => {
    window.open(data.link, "_blank", "noopener,noreferrer");
  };

  return (
    <group
      ref={group}
      position={position}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.4, 1.5, 0.08]} />
        <meshStandardMaterial
          color={hovered ? "#8ab4ff" : "#9aa5b1"}
          metalness={0.1}
          roughness={0.6}
        />
      </mesh>
      {/* Title billboard */}
      <group position={[0, 0, 0.06]}>
        <mesh>
          <planeGeometry args={[2.2, 1.3]} />
          <meshBasicMaterial color={"#0b1220"} />
        </mesh>
        {/* Simple text via canvas texture for portability */}
        <BillboardText title={data.title} description={data.description} />
      </group>
    </group>
  );
}

function BillboardText({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#0b1220";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#e6eeff";
    ctx.font = "bold 64px Inter, Arial, sans-serif";
    ctx.fillText(title, 48, 120);
    ctx.font = "32px Inter, Arial, sans-serif";
    const lines = wrapText(ctx, description, 48, 200, 928, 44);
    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 4;
    tex.needsUpdate = true;
    return tex;
  }, [title, description]);

  return (
    <mesh position={[0, 0, 0.01]}>
      <planeGeometry args={[2.1, 1.2]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  const words = text.split(" ");
  let line = "";
  const lines: string[] = [];
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      lines.push(line.trim());
      line = words[n] + " ";
    } else {
      line = testLine;
    }
  }
  lines.push(line.trim());
  ctx.fillStyle = "#b7c5ff";
  for (let i = 0; i < Math.min(lines.length, 3); i++) {
    ctx.fillText(lines[i], x, y + i * lineHeight);
  }
  return lines;
}

function FloatingRig({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ mouse }) => {
    if (!ref.current) return;
    const targetX = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      mouse.x * 0.2,
      0.05
    );
    const targetY = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      -mouse.y * 0.15,
      0.05
    );
    ref.current.rotation.set(targetY, targetX, 0);
  });
  return <group ref={ref}>{children}</group>;
}

export default function ProjectCards3D({ data }: { data: CardData[] }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  if (reducedMotion) return null;

  const positions: [number, number, number][] = useMemo(() => {
    const arr: [number, number, number][] = [];
    const radius = 4;
    const spread = Math.max(3, Math.min(6, data.length));
    for (let i = 0; i < data.length; i++) {
      const angle = (i / spread) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = (i % 2 === 0 ? 1 : -1) * (1 + (i % 3) * 0.3);
      const z = Math.sin(angle) * (radius - 0.5);
      arr.push([x, y, z]);
    }
    return arr;
  }, [data.length]);

  return (
    <div className="relative h-[520px] rounded-xl overflow-hidden border">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
        <FloatingRig>
          {data.map((d, i) => (
            <Card
              key={d.title}
              position={positions[i]}
              rotation={[0, (i / data.length) * Math.PI * 2, 0]}
              data={d}
            />
          ))}
        </FloatingRig>
      </Canvas>
    </div>
  );
}
