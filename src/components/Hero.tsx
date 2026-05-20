"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ArrowDown } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { useSmoothScroll } from "@/lib/hooks";
import { Scene } from "@/components/three";

export default function Hero() {
    const scrollTo = useSmoothScroll();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
        },
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Split Layout Container */}
            <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[45%_55%] h-full relative z-10">

                {/* LEFT: 45% - Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col justify-center h-full pt-20 lg:pt-0"
                >
                    <motion.div variants={itemVariants} className="mb-6">
                        <Badge
                            variant="glow"
                            className="inline-flex gap-2 px-3 py-1.5 text-xs font-medium backdrop-blur-lg border-violet-500/20 bg-violet-500/10 text-violet-300"
                        >
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
                            </span>
                            Available for Summer 2026 Internships
                        </Badge>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white"
                    >
                        Engineering
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                            Intelligent Systems
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-slate-400 max-w-md mb-8 leading-relaxed font-light"
                    >
                        Hi, I&apos;m Sarathi. I build production-grade applications bridging the gap between sophisticated AI models and scalable backend infrastructure.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <Button
                            variant="glow"
                            size="lg"
                            onClick={() => scrollTo("projects")}
                            className="group gap-2 bg-white text-black hover:bg-slate-200"
                        >
                            Selected Work
                            <motion.span
                                className="inline-block"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            asChild
                            className="border-slate-800 hover:bg-slate-800/50 text-slate-300"
                        >
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="gap-2"
                            >
                                <Github className="w-4 h-4" />
                                Github
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* RIGHT: 55% - 3D Scene */}
                <div className="relative h-[60vh] lg:h-full w-full">
                    {/* The Scene component is absolutely positioned inside its own container to fill the parent */}
                    <Scene />
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-6 lg:left-12"
            >
                <motion.button
                    onClick={() => scrollTo("about")}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors"
                >
                    <ArrowDown className="w-4 h-4" />
                </motion.button>
            </motion.div>
        </section>
    );
}
