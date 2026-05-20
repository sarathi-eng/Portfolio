import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "@/lib/gsap";

export default function CameraRig() {
    const { camera } = useThree();
    const targetRef = useRef(new THREE.Vector3(0, 0, 5));
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Normalize mouse coordinates to -1 to 1
            mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener("mousemove", handleMouseMove);

        // GSAP ScrollTrigger for subtle camera depth and drift on scroll
        const scrollAnim = gsap.to(targetRef.current, {
            z: 6, // Slightly pull back on scroll
            y: -0.5, // Slight pan down
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            scrollAnim.kill();
        };
    }, []);

    useFrame((state, delta) => {
        // Subtle mouse parallax
        const targetX = mouseRef.current.x * 0.5;
        const targetY = mouseRef.current.y * 0.5;

        // Smoothly interpolate camera position
        camera.position.x += (targetX - camera.position.x) * delta * 2;
        camera.position.y += (targetY - camera.position.y) * delta * 2;

        // Z position is driven by GSAP, but we still lerp to the target for smoothness
        camera.position.z += (targetRef.current.z - camera.position.z) * delta * 2;

        camera.lookAt(0, 0, 0);
    });

    return null;
}
