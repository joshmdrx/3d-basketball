import { useTrimesh } from "@react-three/cannon";
import React, { useMemo } from "react";
import { TorusGeometry } from "three";

export function CustomHoop({ args, ...props }) {
  const geometry = useMemo(() => new TorusGeometry(...args), [args]);
  const [ref] = useTrimesh(() => ({
    args: [geometry.attributes.position.array, geometry.index.array],
    material: "ring",
    ...props,
  }));

  return (
    <mesh ref={ref} castShadow>
      <torusGeometry args={args} />
      <meshStandardMaterial />
    </mesh>
  );
}
