"use client";

import { Canvas, type ThreeEvent, useThree } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Group } from "three";
import { RocketModel } from "@/components/3d/RocketModel";

type PointerCaptureTarget = {
  setPointerCapture: (pointerId: number) => void;
  releasePointerCapture: (pointerId: number) => void;
};

function DragRocket({ invalidate }: { invalidate: () => void }) {
  const rocket = useRef<Group>(null);
  const dragging = useRef(false);
  const previousX = useRef(0);
  const previousY = useRef(0);
  const renderRequested = useRef(false);

  const requestRender = () => {
    if (renderRequested.current) return;

    renderRequested.current = true;

    requestAnimationFrame(() => {
      renderRequested.current = false;
      invalidate();
    });
  };

  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    dragging.current = true;
    previousX.current = event.clientX;
    previousY.current = event.clientY;

    event.stopPropagation();

    (event.target as unknown as PointerCaptureTarget).setPointerCapture(
      event.pointerId,
    );

    requestRender();
  };

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (!dragging.current || !rocket.current) return;

    const deltaX = event.clientX - previousX.current;
    const deltaY = event.clientY - previousY.current;

    previousX.current = event.clientX;
    previousY.current = event.clientY;

    rocket.current.rotation.y += deltaX * 0.012;
    rocket.current.rotation.x += deltaY * 0.009;

    requestRender();
  };

  const stopDragging = (event: ThreeEvent<PointerEvent>) => {
    dragging.current = false;

    (event.target as unknown as PointerCaptureTarget).releasePointerCapture(
      event.pointerId,
    );
  };

  return (
    <RocketModel
      ref={rocket}
      rotation-y={0.22}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
    />
  );
}

function HeroScene() {
  const invalidate = useThree((state) => state.invalidate);
  return (
    <>
      <ambientLight intensity={1.7} />
      <directionalLight position={[4, 6, 5]} intensity={2.1} />
      <directionalLight position={[-4, 1, 3]} intensity={0.6} />
      <Suspense fallback={null}>
        <DragRocket invalidate={invalidate} />
      </Suspense>
    </>
  );
}

export function Hero3D() {
  return (
    <div
      className="hero-arch hero-canvas"
      aria-label="Drag to rotate the 3D rocket"
    >
      <Canvas
        frameloop="demand"
        camera={{ fov: 34, position: [0, 0.2, 8.5] }}
        dpr={[1, 1]}
        gl={{ antialias: true, alpha: true }}
      >
        <HeroScene />
      </Canvas>
    </div>
  );
}
