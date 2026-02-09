"use client";

import { motion } from "framer-motion";
import { personalInfo, experiences, education, interests, currentlyDoing, certificates, engineeringHighlights, productionReadiness, engineeringPrinciples } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import {
    Brain,
    Rocket,
    Calendar,
    GraduationCap,
    Target,
    Zap,
    Lightbulb,
    FileText,
    Database,
    Shield,
    Cpu,
    Code2,
} from "@/components/icons";

function SectionHeading({
    badge,
    title,
    description,
}: {
    badge: string;
    title: string;
    description: string;
}) {
    return (
        <div className="text-center mb-16 sm:mb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Badge variant="glow" className="mb-4">
                    {badge}
                </Badge>
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight"
            >
                {title}
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
                {description}
            </motion.p>
        </div>
    );
}

function ThreeDCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ perspective: 1000, transformStyle: "preserve-3d" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function About() {
    const highlights = [
        {
            icon: Database,
            title: "Backend Systems",
            description: "Async APIs, microservices, auth flows, and database design",
            gradient: "from-violet-500 to-purple-500",
        },
        {
            icon: Brain,
            title: "AI Pipelines",
            description: "RAG, vector search, embedding caching, multi-LLM orchestration",
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            icon: Shield,
            title: "Security Engineering",
            description: "AES-256-GCM encryption, JWT auth, RBAC, input sanitization",
            gradient: "from-orange-500 to-red-500",
        },
        {
            icon: Cpu,
            title: "Infrastructure",
            description: "Docker, Kubernetes, Kafka event streaming, CI/CD pipelines",
            gradient: "from-emerald-500 to-teal-500",
        },
    ];

    return (
        <section id="about" className="relative py-24 sm:py-32">
            {/* Background decoration */}
            <div className="absolute inset-0 dot-pattern opacity-30" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px]" />

            <div className="relative max-w-7xl mx-auto px-6">
                <SectionHeading
                    badge="Engineering Profile"
                    title="What I Build & How"
                    description="Backend systems, AI pipelines, and deployable infrastructure — with auth, encryption, and observability built in"
                />

                {/* Trust anchor */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-12 -mt-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/[0.08] text-sm text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        Recently completed Deloitte Data Analytics simulation (Forage)
                    </div>
                </motion.div>

                {/* Bio section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Avatar + decoration */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center"
                    >
                        <ThreeDCard>
                            <div className="relative">
                                {/* Gradient ring */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 rounded-3xl blur-sm opacity-50" />
                                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden glass border-2 border-white/10">
                                    <img
                                        src={personalInfo.avatar}
                                        alt={personalInfo.name}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="text-white font-display font-bold text-lg">
                                            {personalInfo.name}
                                        </div>
                                        <div className="text-white/70 text-sm">
                                            @{personalInfo.username}
                                        </div>
                                    </div>
                                </div>
                                {/* Floating badges */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 text-sm font-medium border border-white/10"
                                >
                                    <div className="flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4 text-violet-300" />
                                        <span>IIIT Kottayam</span>
                                    </div>
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                    className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 text-sm font-medium border border-white/10"
                                >
                                    <div className="flex items-center gap-2">
                                        <Rocket className="w-4 h-4 text-blue-300" />
                                        <span>11 Systems Built</span>
                                    </div>
                                </motion.div>
                            </div>
                        </ThreeDCard>
                    </motion.div>

                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {personalInfo.bio}
                        </p>

                        {/* Experience */}
                        {experiences.map((exp, i) => (
                            <div
                                key={i}
                                className="glass rounded-2xl p-6 border border-white/[0.06]"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                                        <GraduationCap className="w-5 h-5 text-violet-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-semibold text-lg">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                            <span>{exp.type}</span>
                                            <span>•</span>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {exp.period}
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground text-sm mb-3">
                                            {exp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.highlights.map((h) => (
                                                <Badge key={h} variant="outline" className="text-xs">
                                                    {h}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Currently doing */}
                        <div className="glass rounded-2xl p-6 border border-white/[0.06]">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                                    <Target className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="font-display font-semibold text-lg mb-3">
                                        What I&apos;m Currently Doing
                                    </h3>
                                    <div className="space-y-2">
                                        {currentlyDoing.map((item) => (
                                            <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Certificates */}
                        <div className="glass rounded-2xl p-6 border border-white/[0.06]">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                    <FileText className="w-5 h-5 text-blue-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-display font-semibold text-lg mb-3">
                                        Certificates
                                    </h3>
                                    <div className="space-y-3">
                                        {certificates.map((cert) => (
                                            <a
                                                key={cert.id}
                                                href={cert.fileUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-start gap-3 rounded-xl border border-white/[0.06] px-4 py-3 hover:border-white/[0.12] hover:bg-white/[0.03] transition-all duration-300"
                                            >
                                                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                                                    <cert.icon className="w-4 h-4 text-white" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between gap-3">
                                                        <div className="text-sm font-medium text-white truncate">
                                                            {cert.title}
                                                        </div>
                                                        <span className="text-xs text-muted-foreground">
                                                            {cert.date}
                                                        </span>
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">
                                                        {cert.issuer}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground mt-1">
                                                        {cert.description}
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Highlight cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <ThreeDCard>
                                <div className="glass rounded-2xl p-6 border border-white/[0.06] group hover:border-white/10 transition-all duration-500 h-full">
                                    <div
                                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}
                                    >
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-display font-semibold text-lg mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </ThreeDCard>
                        </motion.div>
                    ))}
                </div>

                {/* Engineering Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20"
                >
                    <h3 className="font-display text-2xl font-bold mb-8 text-center">Engineering Highlights</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {engineeringHighlights.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass rounded-2xl p-6 border border-white/[0.06] text-center hover:border-violet-500/20 transition-all duration-500"
                            >
                                <div className="text-4xl font-display font-bold gradient-text mb-2">{item.metric}</div>
                                <div className="font-medium text-white mb-1">{item.label}</div>
                                <div className="text-xs text-muted-foreground">{item.detail}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Production Readiness */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20"
                >
                    <h3 className="font-display text-2xl font-bold mb-8 text-center">Production Readiness</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {Object.entries(productionReadiness).map(([category, items], i) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass rounded-2xl p-6 border border-white/[0.06]"
                            >
                                <h4 className="font-display font-semibold text-lg mb-4 capitalize gradient-text">{category}</h4>
                                <div className="space-y-3">
                                    {items.map((item: string) => (
                                        <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Engineering Principles */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20"
                >
                    <h3 className="font-display text-2xl font-bold mb-8 text-center">Engineering Principles</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {engineeringPrinciples.map((principle, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="glass rounded-2xl p-5 border border-white/[0.06] hover:border-violet-500/20 transition-all duration-500"
                            >
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl font-display font-bold gradient-text shrink-0">{String(i + 1).padStart(2, '0')}</span>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{principle}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
