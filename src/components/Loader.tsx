"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomLoader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setLoading(false), 300);
                    return 100;
                }
                return prev + Math.random() * 15 + 5;
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    if (!loading) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
        >
            {/* Animated logo */}
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center font-display font-bold text-white text-3xl shadow-2xl shadow-violet-500/30">
                    S
                    <motion.div
                        className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-violet-500 to-blue-500 opacity-20 blur-lg"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-violet-500 to-blue-500 rounded-full"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ duration: 0.2 }}
                />
            </div>

            {/* Loading text */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-sm text-muted-foreground font-mono"
            >
                Loading portfolio...
            </motion.p>
        </motion.div>
    );
}
