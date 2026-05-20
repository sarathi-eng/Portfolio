import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float } from "@react-three/drei";

export default function CoreOrb() {
    const materialRef = useRef<THREE.ShaderMaterial>(null);
    const meshRef = useRef<THREE.Mesh>(null);

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uColorPrimary: { value: new THREE.Color("#7C3AED") }, // Electric Violet
            uColorSecondary: { value: new THREE.Color("#06B6D4") }, // Cyan Blue
        }),
        []
    );

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
        }
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
            meshRef.current.rotation.z = state.clock.elapsedTime * 0.02;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1.2}>
            <mesh ref={meshRef} scale={1.5}>
                <icosahedronGeometry args={[1, 64]} />
                <shaderMaterial
                    ref={materialRef}
                    vertexShader={`
                        uniform float uTime;
                        varying vec3 vNormal;
                        varying vec3 vPosition;
                        varying vec2 vUv;

                        vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
                        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

                        float snoise(vec3 v){
                        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
                        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

                        vec3 i  = floor(v + dot(v, C.yyy) );
                        vec3 x0 = v - i + dot(i, C.xxx) ;

                        vec3 g = step(x0.yzx, x0.xyz);
                        vec3 l = 1.0 - g;
                        vec3 i1 = min( g.xyz, l.zxy );
                        vec3 i2 = max( g.xyz, l.zxy );

                        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
                        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
                        vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

                        i = mod(i, 289.0 );
                        vec4 p = permute( permute( permute(
                                    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                                + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                                + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

                        float n_ = 1.0/7.0;
                        vec3  ns = n_ * D.wyz - D.xzx;

                        vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

                        vec4 x_ = floor(j * ns.z);
                        vec4 y_ = floor(j - 7.0 * x_ );

                        vec4 x = x_ *ns.x + ns.yyyy;
                        vec4 y = y_ *ns.x + ns.yyyy;
                        vec4 h = 1.0 - abs(x) - abs(y);

                        vec4 b0 = vec4( x.xy, y.xy );
                        vec4 b1 = vec4( x.zw, y.zw );

                        vec4 s0 = floor(b0)*2.0 + 1.0;
                        vec4 s1 = floor(b1)*2.0 + 1.0;
                        vec4 sh = -step(h, vec4(0.0));

                        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
                        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

                        vec3 p0 = vec3(a0.xy,h.x);
                        vec3 p1 = vec3(a0.zw,h.y);
                        vec3 p2 = vec3(a1.xy,h.z);
                        vec3 p3 = vec3(a1.zw,h.w);

                        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
                        p0 *= norm.x;
                        p1 *= norm.y;
                        p2 *= norm.z;
                        p3 *= norm.w;

                        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
                        m = m * m;
                        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                                        dot(p2,x2), dot(p3,x3) ) );
                        }

                        void main() {
                            vUv = uv;
                            vNormal = normalize(normalMatrix * normal);

                            float noise = snoise(position * 1.5 + uTime * 0.2);
                            vec3 newPosition = position + normal * (noise * 0.1);

                            vPosition = (modelViewMatrix * vec4(newPosition, 1.0)).xyz;
                            gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
                        }
                    `}
                    fragmentShader={`
                        uniform float uTime;
                        uniform vec3 uColorPrimary;
                        uniform vec3 uColorSecondary;

                        varying vec3 vNormal;
                        varying vec3 vPosition;
                        varying vec2 vUv;

                        void main() {
                            vec3 viewDirection = normalize(-vPosition);
                            float fresnelTerm = dot(viewDirection, vNormal);
                            fresnelTerm = clamp(1.0 - fresnelTerm, 0.0, 1.0);
                            fresnelTerm = pow(fresnelTerm, 3.0);

                            float innerGlow = 1.0 - pow(dot(viewDirection, vNormal), 0.5);

                            float pulse = sin(uTime * 0.5) * 0.5 + 0.5;
                            vec3 mixedColor = mix(uColorPrimary, uColorSecondary, fresnelTerm + pulse * 0.2);

                            vec3 finalColor = mixedColor + (uColorSecondary * fresnelTerm * 1.5) + (uColorPrimary * innerGlow * 0.5);

                            float alpha = clamp(fresnelTerm * 2.0 + 0.5, 0.0, 1.0);

                            gl_FragColor = vec4(finalColor, alpha * 0.9);
                        }
                    `}
                    uniforms={uniforms}
                    transparent={true}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
        </Float>
    );
}
