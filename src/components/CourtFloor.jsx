import { usePlane } from "@react-three/cannon";
import React from "react";

export function CourtFloor(props) {
  const [ref] = usePlane(() => ({ material: "ground", ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[25, 25]} />
      <meshStandardMaterial />
    </mesh>
  );
}
