"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, MapPin, Sparkles } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/lib/data";
import { useSmoothScroll } from "@/lib/hooks";

const roles = [
    "Backend & AI Systems Engineer",
    "API-First Builder",
    "Infrastructure Tinkerer",
    "Security-Aware Developer",
];

function SplineScene() {
    return (
        <div className="absolute inset-0 opacity-60">
            {/* Animated gradient orbs as 3D-like background */}
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[120px] animate-float" />
            <div
                className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[100px] animate-float"
                style={{ animationDelay: "2s" }}
            />
            <div
                className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-cyan-500/15 blur-[80px] animate-float"
                style={{ animationDelay: "4s" }}
            />
            {/* 3D Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [perspective:500px] [transform:rotateX(60deg)] origin-center opacity-40" />
        </div>
    );
}

function FloatingParticles() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-violet-400/30 rounded-full"
                    initial={{
                        x: `${Math.random() * 100}%`,
                        y: `${Math.random() * 100}%`,
                        scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                        y: [null, `${Math.random() * 100}%`],
                        opacity: [0, 0.6, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}

function TypeWriter({ words }: { words: string[] }) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    setDisplayText(currentWord.slice(0, displayText.length + 1));
                    if (displayText === currentWord) {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                } else {
                    setDisplayText(currentWord.slice(0, displayText.length - 1));
                    if (displayText === "") {
                        setIsDeleting(false);
                        setCurrentWordIndex((prev) => (prev + 1) % words.length);
                    }
                }
            },
            isDeleting ? 50 : 100
        );
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentWordIndex, words]);

    return (
        <span className="gradient-text">
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="text-violet-400"
            >
                |
            </motion.span>
        </span>
    );
}

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
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <SplineScene />
            <FloatingParticles />

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-5xl mx-auto px-6 text-center"
            >
                {/* Status badge */}
                <motion.div variants={itemVariants} className="mb-8">
                    <Badge
                        variant="glow"
                        className="gap-2 px-4 py-2 text-sm backdrop-blur-lg"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                        Available for backend / AI engineering internships (Summer 2026)
                    </Badge>
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={itemVariants}
                    className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                >
                    Hi, I&apos;m{" "}
                    <span className="relative">
                        <span className="gradient-text text-glow">Sarathi</span>
                        <motion.span
                            className="absolute -top-2 -right-6"
                            animate={{ rotate: [0, 20, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Sparkles className="w-6 h-6 text-yellow-400" />
                        </motion.span>
                    </span>
                </motion.h1>

                {/* Typewriter role */}
                <motion.div
                    variants={itemVariants}
                    className="text-2xl sm:text-3xl md:text-4xl font-display font-medium mb-8 h-12"
                >
                    <TypeWriter words={roles} />
                </motion.div>

                {/* Bio */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    {personalInfo.tagline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap items-center justify-center gap-4 mb-12"
                >
                    <Button
                        variant="glow"
                        size="xl"
                        onClick={() => scrollTo("projects")}
                        className="group gap-2"
                    >
                        View My Work
                        <motion.span
                            className="inline-block"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </Button>
                    <Button variant="outline" size="xl" asChild>
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-2"
                        >
                            <Github className="w-5 h-5" />
                            GitHub Profile
                        </a>
                    </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
                >
                    {[
                        { value: "11", label: "Systems Built" },
                        { value: "6", label: "Languages Used in Projects" },
                        { value: "5", label: "AI Pipelines" },
                        { value: "3", label: "Security Impls" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-2xl sm:text-3xl font-display font-bold gradient-text">
                                {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Location */}
                <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-center gap-2 mt-8 text-muted-foreground"
                >
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{personalInfo.location}</span>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.button
                    onClick={() => scrollTo("about")}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-white transition-colors"
                >
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <ArrowDown className="w-4 h-4" />
                </motion.button>
            </motion.div>
        </section>
    );
}
