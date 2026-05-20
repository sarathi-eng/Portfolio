"use client";

import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { DRACOLoader } from "three-stdlib";
import { useGLTF } from "@react-three/drei";

import CoreOrb from "./CoreOrb";
import Particles from "./Particles";
import CameraRig from "./CameraRig";
import Lights from "./Lights";

// Infrastructure preparation: Configure loaders globally for future GLTF use
// We won't use them yet, but the pipeline is ready.
if (typeof window !== "undefined") {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
    useGLTF.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
}

export default function Scene() {
    // Adaptive pixel ratio: limit high dpr on mobile to save battery and boost fps
    const dpr: [number, number] = typeof window !== "undefined" && window.innerWidth < 768 ? [1, 1.5] : [1, 1.8];

    return (
        <div className="w-full h-full absolute inset-0 -z-10">
            <Canvas
                dpr={dpr}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
                camera={{
                    position: [0, 0, 5],
                    fov: 45,
                }}
            >
                <Suspense fallback={null}>
                    <Lights />
                    <CoreOrb />
                    <Particles />
                    <CameraRig />
                </Suspense>
            </Canvas>
        </div>
    );
}
