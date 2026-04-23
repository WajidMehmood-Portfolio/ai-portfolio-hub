// src/components/3d/FloatingPhone.tsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, RoundedBox, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingPhone: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.1);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, (state.mouse.y * Math.PI) / 10, 0.1);
    meshRef.current.position.y = Math.sin(t) * 0.1;
  });

  return (
    <group>
      {/* Phone Body */}
      <RoundedBox
        ref={meshRef}
        args={[1.8, 3.8, 0.2]}
        radius={0.15}
        smoothness={4}
      >
        <meshStandardMaterial color="#1E1E2E" roughness={0.2} metalness={0.8} />
      </RoundedBox>

      {/* Screen area (simplified as a separate mesh slightly in front) */}
      <mesh position={[0, 0, 0.11]}>
        <planeGeometry args={[1.65, 3.65]} />
        <meshStandardMaterial color="#0A0A0F" emissive="#7C3AED" emissiveIntensity={0.2} />
      </mesh>
      
      {/* Visual Accents */}
      <mesh position={[0, 1.8, 0.12]}>
        <capsuleGeometry args={[0.05, 0.3, 4, 8]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
};
