"use client";

import { useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";
import { forwardRef, useMemo } from "react";
import { Box3, Group, Mesh, Vector3 } from "three";

const MODEL_URL = "/models/stylized_low_poly_rocket_3d_model.glb";

type RocketModelProps = Omit<ThreeElements["group"], "ref">;

export const RocketModel = forwardRef<Group, RocketModelProps>(
  function RocketModel(props, ref) {
    const { scene } = useGLTF(MODEL_URL);

    const rocket = useMemo(() => {
      const model = scene.clone(true);

      const bounds = new Box3().setFromObject(model);
      const center = bounds.getCenter(new Vector3());
      const size = bounds.getSize(new Vector3());
      const scale = 4.05 / size.y;

      model.position.set(-center.x, -center.y, -center.z);
      model.scale.setScalar(scale);

      model.traverse((child) => {
        if (!(child instanceof Mesh)) return;

        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material];

        materials.forEach((material) => {
          const { r, g, b } = material.color;

          const isRed = r > 0.5 && r > g * 1.3 && r > b * 1.3;

          if (isRed) {
            material.color.set("#47ED76");
          }
        });
      });

      return model;
    }, [scene]);

    return (
      <group ref={ref} rotation-z={0.08} {...props}>
        <primitive object={rocket} />
      </group>
    );
  },
);

useGLTF.preload(MODEL_URL);