"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

function SkillOrb({
    skill,
    index,
    total,
}: {
    skill: string;
    index: number;
    total: number;
}) {
    const angle = (index / total) * 360;
    const delay = index * 0.05;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay,
                type: "spring",
                stiffness: 200,
            }}
            whileHover={{ scale: 1.15, zIndex: 10 }}
            className="px-4 py-2 rounded-xl glass border border-white/[0.06] hover:border-white/[0.15] text-sm font-medium text-muted-foreground hover:text-white transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-violet-500/5"
        >
            {skill}
        </motion.div>
    );
}

function SkillCategoryCard({
    category,
    index,
}: {
    category: (typeof skillCategories)[0];
    index: number;
}) {
    const Icon = category.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
        >
            <div className="relative glass rounded-2xl p-6 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 h-full">
                {/* Icon */}
                <div className="flex items-center gap-3 mb-5">
                    <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                    >
                        <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display font-semibold text-lg">
                        {category.title}
                    </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                        <SkillOrb
                            key={skill}
                            skill={skill}
                            index={i}
                            total={category.skills.length}
                        />
                    ))}
                </div>

                {/* Hover gradient */}
                <div
                    className={`absolute -inset-px bg-gradient-to-r ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700 -z-10 blur-xl`}
                />
            </div>
        </motion.div>
    );
}

function TechMarquee() {
    const allSkills = [
        "Async APIs",
        "RAG Pipelines",
        "Vector Search",
        "JWT Auth",
        "AES-256",
        "Microservices",
        "Docker",
        "Kafka",
        "Redis",
        "PostgreSQL",
        "FastAPI",
        "Spring Boot",
        "Rust Gateway",
        "RBAC",
        "LLM Orchestration",
        "Embedding Cache",
        "K8s Deploy",
        "Error Handling",
        "CI/CD",
        "Tracing",
    ];

    return (
        <div className="relative overflow-hidden py-6 mt-12">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <motion.div
                animate={{ x: [0, -1920] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex gap-4 whitespace-nowrap"
            >
                {[...allSkills, ...allSkills, ...allSkills].map((skill, i) => (
                    <div
                        key={`${skill}-${i}`}
                        className="px-5 py-2.5 rounded-full glass border border-white/[0.06] text-sm font-medium text-muted-foreground shrink-0"
                    >
                        {skill}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="relative py-24 sm:py-32">
            {/* Background */}
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px]" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Badge variant="glow" className="mb-4">
                            Engineering Capabilities
                        </Badge>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                    >
                        What I <span className="gradient-text">Ship With</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Capabilities across backend engineering, AI pipelines,
                        infrastructure, and security
                    </motion.p>
                </div>

                {/* Skill categories grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((cat, i) => (
                        <SkillCategoryCard key={cat.title} category={cat} index={i} />
                    ))}
                </div>

                {/* Marquee */}
                <TechMarquee />

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
                >
                    {[
                        { value: "6", label: "Production Languages", gradient: "from-violet-500 to-purple-500" },
                        { value: "5", label: "AI/RAG Pipelines", gradient: "from-blue-500 to-cyan-500" },
                        { value: "3", label: "Security Implementations", gradient: "from-pink-500 to-rose-500" },
                        { value: "11", label: "Systems Shipped", gradient: "from-orange-500 to-amber-500" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center glass rounded-2xl p-6 border border-white/[0.06]"
                        >
                            <div
                                className={`text-3xl sm:text-4xl font-display font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                            >
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
