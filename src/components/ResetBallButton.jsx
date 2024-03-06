import React, { useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

export function ResetBallButton({ onClick, position }) {
  const [hover, setHover] = useState(false); // State to track hover status

  const textRef = React.useRef();

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={0.5}
      color={hover ? "red" : "black"} // Change color when hovered
      anchorX="center"
      anchorY="middle"
      onClick={onClick}
      onPointerOver={(e) => {
        e.stopPropagation(); // Prevent event bubbling
        setHover(true); // Change the hover state to true
      }}
      onPointerOut={(e) => {
        e.stopPropagation(); // Prevent event bubbling
        setHover(false); // Revert the hover state to false
      }}
    >
      Reset Ball
    </Text>
  );
}
