"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxDividerProps {
    gradient?: string;
}

export default function ParallaxDivider({
    gradient = "from-violet-500/10 via-transparent to-blue-500/10",
}: ParallaxDividerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    return (
        <div ref={ref} className="relative h-32 sm:h-48 overflow-hidden">
            <motion.div
                style={{ y, opacity, scale }}
                className={`absolute inset-0 bg-gradient-to-r ${gradient}`}
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    style={{ opacity }}
                    className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
            </div>
        </div>
    );
}
