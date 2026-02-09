"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Send,
    Mail,
    Github,
    Linkedin,
    MapPin,
    ArrowUpRight,
    Sparkles,
    CheckCircle2,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/lib/data";

function GlowingInput({
    label,
    type = "text",
    name,
    placeholder,
    required = false,
    isTextarea = false,
}: {
    label: string;
    type?: string;
    name: string;
    placeholder: string;
    required?: boolean;
    isTextarea?: boolean;
}) {
    const [focused, setFocused] = useState(false);

    const inputClasses = `w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all duration-300 text-sm ${focused ? "shadow-lg shadow-violet-500/5" : ""
        }`;

    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
                {label}
            </label>
            {isTextarea ? (
                <textarea
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    rows={5}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className={`${inputClasses} resize-none`}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className={inputClasses}
                />
            )}
        </div>
    );
}

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    const contactLinks = [
        {
            icon: Github,
            label: "GitHub",
            value: "@sarathi-eng",
            href: personalInfo.github,
            gradient: "from-gray-500 to-gray-600",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "sarathi-eng",
            href: personalInfo.linkedin,
            gradient: "from-blue-600 to-blue-500",
        },
        {
            icon: Mail,
            label: "Email",
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`,
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            icon: MapPin,
            label: "Location",
            value: personalInfo.location,
            href: "#",
            gradient: "from-emerald-500 to-teal-500",
        },
    ];

    return (
        <section id="contact" className="relative py-24 sm:py-32">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/5 rounded-full blur-[120px]" />
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
                            Get in Touch
                        </Badge>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                    >
                        Let&apos;s{" "}
                        <span className="gradient-text">Work Together</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Looking for backend or AI engineering internship opportunities?
                        I&apos;d like to hear about it. Available for Summer 2026.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="space-y-4">
                            {contactLinks.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 glass rounded-xl p-4 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group"
                                >
                                    <div
                                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}
                                    >
                                        <link.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs text-muted-foreground">
                                            {link.label}
                                        </div>
                                        <div className="text-sm font-medium truncate">
                                            {link.value}
                                        </div>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Fun CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl p-6 border border-white/[0.06]"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <Sparkles className="w-5 h-5 text-yellow-400" />
                                <span className="font-display font-semibold">Quick Response</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                I typically respond within 24 hours. Looking forward to
                                discussing your ideas and how we can collaborate!
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="glass rounded-2xl p-6 sm:p-8 border border-white/[0.06] space-y-5"
                        >
                            <div className="grid sm:grid-cols-2 gap-5">
                                <GlowingInput
                                    label="Name"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                />
                                <GlowingInput
                                    label="Email"
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                            <GlowingInput
                                label="Subject"
                                name="subject"
                                placeholder="What's this about?"
                                required
                            />
                            <GlowingInput
                                label="Message"
                                name="message"
                                placeholder="Tell me about your project or idea..."
                                required
                                isTextarea
                            />

                            <Button
                                type="submit"
                                variant="glow"
                                size="lg"
                                className="w-full gap-2"
                                disabled={submitted}
                            >
                                {submitted ? (
                                    <>
                                        <CheckCircle2 className="w-5 h-5" />
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
