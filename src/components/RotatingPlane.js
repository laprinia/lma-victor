import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { TextureLoader } from "three";

const RotatingPlane = ({ position, texturePath, size = [2, 2, 0.05] }) => {
  const boxRef = useRef();
  const texture = useLoader(TextureLoader, texturePath);
  const [axis, setAxis] = useState("x");
  const cycleDuration = 10;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const rotationAmount = (Math.PI * 4 * elapsedTime) / cycleDuration;

    if (elapsedTime % (2 * cycleDuration) < cycleDuration) {
      setAxis("x");
    } else {
      setAxis("y");
    }

    if (boxRef.current) {
      if (axis === "x") {
        boxRef.current.rotation.set(rotationAmount, 0, 0);
      } else {
        boxRef.current.rotation.set(0, rotationAmount, 0);
      }
    }
  });

  return (
    <mesh ref={boxRef} position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
};

export default RotatingPlane;
