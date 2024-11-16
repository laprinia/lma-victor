import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const { scene } = useGLTF("/models/victor-head.glb");
  const modelRef = useRef();

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.roughness = 1.0;
      }
    });
  }, [scene]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const rotationSpeed = 0.15;
    modelRef.current.rotation.y = time * rotationSpeed;
  });

  return <primitive object={scene} ref={modelRef} {...props} />;
}
