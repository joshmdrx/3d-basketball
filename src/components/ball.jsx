import React from "react";
import { useGLTF } from "@react-three/drei";

export function Ball(props) {
  const { nodes, materials } = useGLTF("/ball.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Basketball_0.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Basketball_1.geometry}
        material={materials["Material.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/ball.glb");
