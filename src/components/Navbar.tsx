"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useActiveSection, useSmoothScroll, useScrollProgress } from "@/lib/hooks";
import { personalInfo } from "@/lib/data";

const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const activeSection = useActiveSection(navLinks.map((l) => l.id));
    const scrollTo = useSmoothScroll();
    const scrollProgress = useScrollProgress();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Scroll progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 z-[60] origin-left"
                style={{ scaleX: scrollProgress / 100 }}
            />

            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "py-3 glass border-b border-white/[0.06]"
                    : "py-6 bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <motion.button
                        onClick={() => scrollTo("home")}
                        className="flex items-center gap-3 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center font-display font-bold text-white text-lg shadow-lg shadow-violet-500/20">
                            S
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500" />
                        </div>
                        <span className="font-display font-semibold text-lg tracking-tight hidden sm:block">
                            Sarathi<span className="text-violet-400">.</span>
                        </span>
                    </motion.button>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                className="relative px-4 py-2 text-sm font-medium transition-colors duration-300"
                            >
                                <span
                                    className={
                                        activeSection === link.id
                                            ? "text-white"
                                            : "text-muted-foreground hover:text-white"
                                    }
                                >
                                    {link.label}
                                </span>
                                {activeSection === link.id && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-white/[0.06] rounded-lg border border-white/[0.08]"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button variant="outline" size="sm" asChild>
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="gap-2"
                            >
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                        </Button>
                        <Button
                            variant="glow"
                            size="sm"
                            onClick={() => scrollTo("contact")}
                        >
                            Get in Touch
                        </Button>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 pt-24 glass md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-2 p-6">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => {
                                        scrollTo(link.id);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full text-center py-4 text-lg font-medium rounded-xl transition-colors ${activeSection === link.id
                                        ? "text-white bg-white/5"
                                        : "text-muted-foreground"
                                        }`}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                            <div className="flex gap-3 mt-6 w-full">
                                <Button variant="outline" className="flex-1" asChild>
                                    <a
                                        href={personalInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="gap-2"
                                    >
                                        <Github className="w-4 h-4" />
                                        GitHub
                                    </a>
                                </Button>
                                <Button
                                    variant="glow"
                                    className="flex-1"
                                    onClick={() => {
                                        scrollTo("contact");
                                        setIsOpen(false);
                                    }}
                                >
                                    Contact
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
