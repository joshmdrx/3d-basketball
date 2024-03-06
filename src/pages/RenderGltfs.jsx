import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import { Hoop } from "../components/hoop";
import { Ball } from "../components/ball";

const RenderGltfs = () => {
  return (
    <Canvas>
      <Hoop />
      <Ball scale={[0.5, 0.5, 0.5]} position={[2, -1, 0]} />
      <OrbitControls />
      <Environment preset="park" background />
    </Canvas>
  );
};

export default RenderGltfs;
