import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  EffectComposer,
  BrightnessContrast,
  Scanline,
} from "@react-three/postprocessing";
import Model from "@/components/Model";
import RotatingPlane from "@/components/RotatingPlane";

const RotatingCameraScene = () => {
  return (
    <Canvas>
      <Model scale={1.8} position={[0, 0, 0]} />
      <RotatingPlane position={[-4, -0.5, 0]} texturePath="/evil-victor.webp" />
      <RotatingPlane position={[4, -0.5, 0]} texturePath="/evil-victor.webp" />
      <ambientLight intensity={0.65} />
      <directionalLight position={[0, 1, -5]} />
      <OrbitControls />
      <EffectComposer multisampling={0}>
        <Scanline density={4} />
        <BrightnessContrast brightness={0.1} contrast={0.0} />
      </EffectComposer>
    </Canvas>
  );
};

export default RotatingCameraScene;
