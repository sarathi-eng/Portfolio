"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Heart, ArrowUp } from "@/components/icons";
import { personalInfo } from "@/lib/data";
import { useSmoothScroll } from "@/lib/hooks";

export default function Footer() {
    const scrollTo = useSmoothScroll();

    return (
        <footer className="relative border-t border-white/[0.06]">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Left */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center font-display font-bold text-white text-sm">
                            S
                        </div>
                        <div>
                            <span className="font-display font-semibold text-sm">
                                {personalInfo.name}
                            </span>
                            <p className="text-xs text-muted-foreground">
                                Building with passion
                            </p>
                        </div>
                    </div>

                    {/* Center */}
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <span>Crafted with</span>
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
                        </motion.span>
                        <span>by Sarathi</span>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-4">
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg glass border border-white/[0.06] flex items-center justify-center hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg glass border border-white/[0.06] flex items-center justify-center hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <button
                            onClick={() => scrollTo("home")}
                            className="w-9 h-9 rounded-lg glass border border-white/[0.06] flex items-center justify-center hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300 group"
                        >
                            <ArrowUp className="w-4 h-4 group-hover:text-violet-400 transition-colors" />
                        </button>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} {personalInfo.name}. All rights
                        reserved. Built with Next.js, Tailwind CSS & Framer Motion.
                    </p>
                </div>
            </div>
        </footer>
    );
}
