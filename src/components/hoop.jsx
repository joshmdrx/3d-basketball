import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Hoop(props) {
  const { nodes, materials } = useGLTF("/hoop.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.defaultMaterial.geometry}
        material={materials.DefaultMaterial}
        scale={1.792}
      />
    </group>
  );
}

useGLTF.preload("/hoop.glb");
