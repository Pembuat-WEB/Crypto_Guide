import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Bitcoin3 = () => {
  const bitcoin3 = useGLTF("./bitcoin2Copy/scene.gltf");

  return (
    // Adjust the position-y to move the coin down
    <primitive object={bitcoin3.scene} scale={2.5} position-y={-2}  rotation-y={0} />
  );
};

const ViewBitcoin3 = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 9],
      }}
    >
      {/* Additional lighting for better rendering */}
      <ambientLight intensity={2} />
      <directionalLight position={[7, 7, 7]} intensity={4} />
      <pointLight position={[-5, -5, -5]} intensity={100} />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={8} // Adjust rotation speed
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Bitcoin3 />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ViewBitcoin3;
