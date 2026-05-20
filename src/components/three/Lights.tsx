import { Environment } from "@react-three/drei";

export default function Lights() {
    return (
        <>
            <ambientLight intensity={0.5} color="#0B1020" />

            {/* Directional Rim Light - Cyan */}
            <directionalLight
                position={[5, 5, -5]}
                intensity={2}
                color="#06B6D4"
            />

            {/* Soft Point Light - Violet */}
            <pointLight
                position={[-5, -5, 5]}
                intensity={1.5}
                color="#7C3AED"
                distance={20}
                decay={2}
            />

            {/* Premium preset environment lighting */}
            <Environment preset="city" environmentIntensity={0.2} />

            {/* Ambient Fog matching deep navy */}
            <fog attach="fog" args={["#0B1020", 5, 15]} />
        </>
    );
}
