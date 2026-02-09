"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Code2 } from "@/components/icons";
import { projects, type Project } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI / ML" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools" },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const hasDetails = project.architecture || project.tradeoffs || project.challenges || project.nextImprovements || project.keyFiles || project.operationalNotes || project.whatFailed;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative"
        >
            <div className="relative overflow-hidden rounded-2xl glass border border-white/[0.06] hover:border-white/[0.12] transition-all duration-700 h-full flex flex-col">
                {/* Top gradient bar */}
                <div
                    className={`h-1 w-full bg-gradient-to-r ${project.gradient}`}
                />

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <motion.span
                                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center"
                                animate={isHovered ? { scale: 1.08, rotate: 6 } : { scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <project.icon className="w-5 h-5 text-white" />
                            </motion.span>
                            <div>
                                <h3 className="font-display font-semibold text-lg group-hover:text-white transition-colors">
                                    {project.title}
                                </h3>
                                <span className="text-xs text-muted-foreground">
                                    {project.language}
                                </span>
                            </div>
                        </div>
                        <motion.div
                            animate={isHovered ? { rotate: 45, scale: 1.1 } : { rotate: 0, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </motion.div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3 flex-1">
                        {project.description}
                    </p>

                    {/* Key metric badge */}
                    {project.metric && (
                        <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/[0.15] text-[11px] text-emerald-300 font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            {project.metric}
                        </div>
                    )}

                    {/* Architecture diagram */}
                    {project.architecture && (
                        <div className="mb-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">Architecture</div>
                            <div className="font-mono text-xs text-violet-300 leading-relaxed break-all">{project.architecture}</div>
                        </div>
                    )}

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.slice(0, 5).map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-white/[0.04] text-muted-foreground border border-white/[0.06]"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.tech.length > 5 && (
                            <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-white/[0.04] text-muted-foreground border border-white/[0.06]">
                                +{project.tech.length - 5}
                            </span>
                        )}
                    </div>

                    {/* Expandable engineering details */}
                    {hasDetails && (
                        <>
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="text-xs text-violet-400 hover:text-violet-300 transition-colors mb-3 text-left flex items-center gap-1"
                            >
                                <Code2 className="w-3 h-3" />
                                {expanded ? "Hide" : "Show"} Engineering Details
                            </button>
                            <AnimatePresence>
                                {expanded && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden mb-4 space-y-3"
                                    >
                                        {project.tradeoffs && project.tradeoffs.length > 0 && (
                                            <div>
                                                <div className="text-[10px] uppercase tracking-widest text-orange-400 mb-1.5">Engineering Tradeoffs</div>
                                                {project.tradeoffs.map((t, i) => (
                                                    <div key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground mb-1">
                                                        <span className="text-orange-400 shrink-0 mt-0.5">•</span>
                                                        {t}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {project.challenges && project.challenges.length > 0 && (
                                            <div>
                                                <div className="text-[10px] uppercase tracking-widest text-cyan-400 mb-1.5">Challenges Solved</div>
                                                {project.challenges.map((c, i) => (
                                                    <div key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground mb-1">
                                                        <span className="text-cyan-400 shrink-0 mt-0.5">•</span>
                                                        {c}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {project.whatFailed && project.whatFailed.length > 0 && (
                                            <div>
                                                <div className="text-[10px] uppercase tracking-widest text-red-400 mb-1.5">What Failed Initially</div>
                                                {project.whatFailed.map((f, i) => (
                                                    <div key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground mb-1">
                                                        <span className="text-red-400 shrink-0 mt-0.5">•</span>
                                                        {f}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {project.operationalNotes && project.operationalNotes.length > 0 && (
                                            <div>
                                                <div className="text-[10px] uppercase tracking-widest text-amber-400 mb-1.5">Operational Notes</div>
                                                {project.operationalNotes.map((n, i) => (
                                                    <div key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground mb-1">
                                                        <span className="text-amber-400 shrink-0 mt-0.5">•</span>
                                                        {n}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {project.nextImprovements && project.nextImprovements.length > 0 && (
                                            <div>
                                                <div className="text-[10px] uppercase tracking-widest text-emerald-400 mb-1.5">What I&apos;d Improve Next</div>
                                                {project.nextImprovements.map((n, i) => (
                                                    <div key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground mb-1">
                                                        <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                                                        {n}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {project.keyFiles && project.keyFiles.length > 0 && (
                                            <div>
                                                <div className="text-[10px] uppercase tracking-widest text-violet-400 mb-1.5">Read the Code</div>
                                                {project.keyFiles.map((f, i) => (
                                                    <a
                                                        key={i}
                                                        href={`${project.github}/blob/main/${f.path}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1.5 text-xs text-violet-300 hover:text-violet-200 transition-colors mb-1"
                                                    >
                                                        <Code2 className="w-3 h-3 shrink-0" />
                                                        <span className="font-mono">{f.label}</span>
                                                        <span className="text-muted-foreground">→ {f.path}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </>
                    )}

                    {/* Actions */}
                    <div className="flex items-center gap-2 mt-auto">
                        <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-3.5 h-3.5" />
                                Source
                            </a>
                        </Button>
                        {project.live && (
                            <Button
                                variant="glow"
                                size="sm"
                                className="flex-1 gap-2"
                                asChild
                            >
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                    Live Demo
                                </a>
                            </Button>
                        )}
                    </div>
                </div>

                {/* Hover glow */}
                <motion.div
                    className={`absolute -inset-px bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-[0.06] transition-opacity duration-700 -z-10 blur-xl`}
                />
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects =
        activeCategory === "all"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section id="projects" className="relative py-24 sm:py-32">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Badge variant="glow" className="mb-4">
                            Engineering Work
                        </Badge>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                    >
                        Systems I&apos;ve{" "}
                        <span className="gradient-text">Engineered</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Backend systems, AI pipelines, distributed architectures
                        — each with architecture decisions, tradeoffs, and what I&apos;d improve next
                    </motion.p>
                </div>

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                                ? "text-white"
                                : "text-muted-foreground hover:text-white"
                                }`}
                        >
                            {activeCategory === cat.id && (
                                <motion.div
                                    layoutId="activeFilter"
                                    className="absolute inset-0 bg-white/[0.08] rounded-xl border border-white/[0.1]"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{cat.label}</span>
                        </button>
                    ))}
                </motion.div>

                {/* Projects grid */}
                <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, i) => (
                            <ProjectCard key={project.id} project={project} index={i} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View all CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Button variant="outline" size="lg" asChild>
                        <a
                            href="https://github.com/sarathi-eng?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-2"
                        >
                            View All on GitHub
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
