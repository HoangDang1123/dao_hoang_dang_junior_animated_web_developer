"use client";

import { Canvas } from "@react-three/fiber";
import {
  Suspense,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Group } from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RocketModel } from "@/components/3d/RocketModel";

gsap.registerPlugin(ScrollTrigger);

function FeatureRocket({ onReady }: { onReady: (group: Group) => void }) {
  const group = useRef<Group>(null);

  useLayoutEffect(() => {
    if (group.current) onReady(group.current);
  }, [onReady]);

  return (
    <group ref={group} rotation={[-0.08, 0.18, 0]}>
      <RocketModel />
    </group>
  );
}

export function Feature3D() {
  const container = useRef<HTMLDivElement>(null);
  const invalidate = useRef<(() => void) | null>(null);
  const [rocket, setRocket] = useState<Group | null>(null);
  const onReady = useCallback((group: Group) => setRocket(group), []);

  useLayoutEffect(() => {
    if (!container.current || !rocket) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: container.current,
          start: "top 82%",
          end: "bottom 22%",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
        onUpdate: () => invalidate.current?.(),
      });

      timeline
        .to(rocket.rotation, {
          x: 0.16,
          y: Math.PI * 0.82,
          z: -0.08,
          duration: 1,
        })
        .to(rocket.position, { x: -0.28, y: 0.08, duration: 1 }, "<")
        .to(rocket.rotation, {
          x: -0.2,
          y: Math.PI * 1.58,
          z: 0.12,
          duration: 1,
        })
        .to(rocket.position, { x: 0.24, y: -0.06, duration: 1 }, "<")
        .to(rocket.scale, { x: 1.07, y: 1.07, z: 1.07, duration: 1 }, "<");
    }, container);

    return () => context.revert();
  }, [rocket]);

  return (
    <div
      ref={container}
      className="feature-3d"
      aria-label="Rocket responds to feature section scrolling"
    >
      <Canvas
        frameloop="demand"
        camera={{ fov: 36, position: [0, 0.1, 8.8] }}
        dpr={[1, 1]}
        gl={{ antialias: true, alpha: true }}
        onCreated={(state) => {
          invalidate.current = state.invalidate;
        }}
      >
        <ambientLight intensity={1.65} />
        <directionalLight position={[4, 6, 5]} intensity={2} />
        <Suspense fallback={null}>
          <FeatureRocket onReady={onReady} />
        </Suspense>
      </Canvas>
    </div>
  );
}
