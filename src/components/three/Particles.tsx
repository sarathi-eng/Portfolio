import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Sparkles } from "@react-three/drei";

export default function Particles() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Very slow, subtle orbital motion
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.02;
            groupRef.current.rotation.z = state.clock.elapsedTime * 0.01;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Sparse, layered depth particles */}
            <Sparkles
                count={100}
                scale={6}
                size={2}
                speed={0.2}
                opacity={0.3}
                color="#06B6D4" // Cyan Blue
                noise={1}
            />
            <Sparkles
                count={50}
                scale={8}
                size={4}
                speed={0.1}
                opacity={0.15}
                color="#E5F0FF" // Soft White
                noise={2}
            />
        </group>
    );
}
