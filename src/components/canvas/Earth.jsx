import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("../planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={0.055} position-y={0.1} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [4, 10, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={1.3} color="#ffffff" />
        <directionalLight
          position={[-4, 2, 4]}
          rotation={[-0.8, -0.3, -0.4]}
          angle={0.3}
          intensity={8}
          castShadow
          color="#ffffff"
        />
        <directionalLight
          position={[5, 10, 5]}
          rotation={[0.1, 0.5, 0.2]}
          angle={0.2}
          intensity={1.5}
          color="#ffffff"
        />
        <pointLight
          position={[3, 2, 10]}
          intensity={2.7}
          color="#ffffff"
        />
        <spotLight
          position={[15, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={2.8}
          color="#00aeef"
          castShadow
        />
        <spotLight
          position={[-5, -10, -5]}
          angle={0.4}
          penumbra={1}
          intensity={2.6}
          color="#00aeef"
          castShadow
        />
        <hemisphereLight
          skyColor="#ffff00"
          groundColor="#000000"
          intensity={2.4}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
