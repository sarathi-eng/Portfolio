uniform float uTime;
uniform vec3 uColorPrimary;
uniform vec3 uColorSecondary;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;

void main() {
    // Fresnel effect for rim lighting
    vec3 viewDirection = normalize(-vPosition);
    float fresnelTerm = dot(viewDirection, vNormal);
    fresnelTerm = clamp(1.0 - fresnelTerm, 0.0, 1.0);
    fresnelTerm = pow(fresnelTerm, 3.0); // Sharpen the rim

    // Inner glow
    float innerGlow = 1.0 - pow(dot(viewDirection, vNormal), 0.5);

    // Mix colors based on fresnel and subtle animation
    float pulse = sin(uTime * 0.5) * 0.5 + 0.5;
    vec3 mixedColor = mix(uColorPrimary, uColorSecondary, fresnelTerm + pulse * 0.2);

    // Final color with glowing edges
    vec3 finalColor = mixedColor + (uColorSecondary * fresnelTerm * 1.5) + (uColorPrimary * innerGlow * 0.5);

    // Soft opacity
    float alpha = clamp(fresnelTerm * 2.0 + 0.5, 0.0, 1.0);

    gl_FragColor = vec4(finalColor, alpha * 0.9);
}
