import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, useContactMaterial } from "@react-three/cannon";
import { Environment, OrbitControls } from "@react-three/drei";

import { CustomBall } from "../components/CustomBall";
import { CourtFloor } from "../components/CourtFloor";
import { CustomHoop } from "../components/CustomHoop";
import { ResetBallButton } from "../components/ResetBallButton";

const BasketballGame = () => {
  const ballRef = useRef(null); // Ref for accessing the CustomBall component

  function ContactMaterials() {
    useContactMaterial("ground", "bouncy", {
      restitution: 0.5,
    });
    useContactMaterial("ring", "bouncy", {
      restitution: 0.45,
    });
  }
  const resetBall = () => {
    ballRef.current.position.set(3, -1, 0);
    ballRef.current.velocity.set(0, 0, 0);
  };

  return (
    <Canvas>
      <Physics gravity={[0, -10, 0]}>
        <ContactMaterials />

        <CourtFloor position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <CustomHoop
          args={[1, 0.1]}
          position={[0, 1, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <CustomBall
          ref={ballRef}
          scale={[0.5, 0.5, 0.5]}
          position={[3, -1, 0]}
        />
        <ResetBallButton onClick={resetBall} position={[0, 2, 2]} />
        <OrbitControls />
        <Environment preset="park" background />
      </Physics>
    </Canvas>
  );
};

export default BasketballGame;
