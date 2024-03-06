import React, { forwardRef } from "react";
import { useSphere } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export const CustomBall = forwardRef((props, ref) => {
  const [sphereRef, api] = useSphere(() => ({
    args: [0.75],
    mass: 1,
    ...props,
  }));
  React.useImperativeHandle(ref, () => ({
    ...api,
  }));
  const texture = useLoader(TextureLoader, "/ball_texture.jpeg"); // Replace with your image path

  const throwBall = (event) => {
    const { normal } = event.intersections[0];

    const xVelocity = normal.x * -8;
    const zVelocity = normal.z * -8;

    api.velocity.set(xVelocity, 8, zVelocity);
  };

  return (
    <mesh ref={sphereRef} castShadow onPointerDown={throwBall}>
      <sphereGeometry args={[0.75]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
});
