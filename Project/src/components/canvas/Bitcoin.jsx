import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Bitcoin = () => {
  const bitcoin = useGLTF("./bitcoin/scene.gltf");

  return (
    <primitive object={bitcoin.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const ViewBitcoin = () => {
  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 8],
      }}
    >

         {/* Tambahkan beberapa sumber cahaya untuk pencahayaan lebih baik */}
         <ambientLight intensity={2} /> {/* Cahaya menyeluruh */}
      <directionalLight position={[7, 7, 7]} intensity={4} /> {/* Cahaya dari arah tertentu */}
      <pointLight position={[-5, -5, -5]} intensity={100} /> {/* Cahaya tambahan untuk dimensi lebih */}


      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
       autoRotate
      autoRotateSpeed={6} // Sesuaikan kecepatan rotasi
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      />

        <Bitcoin />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ViewBitcoin;
