import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import type { Group } from "three";

function Model() {
  const ref = useRef<Group>(null);
  const { scene } = useGLTF("/models/avatar.glb");

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    // Gentle idle float + subtle sway — no jumping
    ref.current.position.y = Math.sin(t * 0.9) * 0.04 - 0.1;
    ref.current.rotation.y = Math.sin(t * 0.4) * 0.15;
  });

  return (
    <group ref={ref} dispose={null}>
      <primitive object={scene} scale={1.6} position={[0, -1.4, 0]} />
    </group>
  );
}

useGLTF.preload("/models/avatar.glb");

export function Avatar3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 3.2], fov: 35 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      className="!h-full !w-full"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} />
      <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#7dd3fc" />
      <Suspense fallback={null}>
        <Model />
        <Environment preset="city" />
        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.4}
          scale={6}
          blur={2.6}
          far={3}
        />
      </Suspense>
    </Canvas>
  );
}
