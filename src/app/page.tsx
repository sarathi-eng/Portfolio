"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import CustomLoader from "@/components/Loader";
import ParallaxDivider from "@/components/ParallaxDivider";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && <CustomLoader key="loader" />}
            </AnimatePresence>

            {!loading && (
                <>
                    <CursorGlow />
                    <Navbar />
                    <main className="relative">
                        <Hero />
                        <ParallaxDivider gradient="from-violet-500/10 via-transparent to-blue-500/10" />
                        <About />
                        <ParallaxDivider gradient="from-blue-500/10 via-transparent to-cyan-500/10" />
                        <Projects />
                        <ParallaxDivider gradient="from-cyan-500/10 via-transparent to-violet-500/10" />
                        <Skills />
                        <ParallaxDivider gradient="from-violet-500/10 via-transparent to-pink-500/10" />
                        <Contact />
                    </main>
                    <Footer />
                </>
            )}
        </>
    );
}
