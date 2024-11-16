import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Book = () => {
  const book = useGLTF("./viking_book/scene.gltf");

  return (
    // Menyusun skala dan posisi objek 3D untuk tampilan yang jelas
    <primitive object={book.scene} scale={0.1} position-y={0.2} rotation-y={0} />
  );
};

const ViewBook = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 50,
        near: 0.1,
        far: 100,
        position: [0, 0, 60], // Menjauhkan kamera untuk melihat keseluruhan model
      }}
    >
      {/* Tambahkan pencahayaan yang cukup untuk menampilkan tekstur */}
      <ambientLight intensity={3} />
      <directionalLight position={[5, 5, 5]} intensity={3} />
      <pointLight position={[-5, -5, -5]} intensity={3} />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        autoRotate
        autoRotateSpeed={5}
          enableZoom={false}       // Zoom dinonaktifkan
          enableRotate={true}      // Rotasi dinonaktifkan
        />
        <Book />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ViewBook;
