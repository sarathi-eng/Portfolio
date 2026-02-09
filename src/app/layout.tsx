import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
    display: "swap",
});

export const metadata: Metadata = {
    icons: {
        icon: "/favicon.svg",
    },
    title: "Sarathi S | Full-Stack Developer & AI Engineer",
    description:
        "Portfolio of Sarathi S — Full-Stack Developer and AI Engineer building production-grade applications with React, Python, Java, Rust, and cutting-edge AI technologies.",
    keywords: [
        "Sarathi",
        "Full-Stack Developer",
        "AI Engineer",
        "React",
        "Python",
        "Java",
        "Rust",
        "Portfolio",
        "Web Developer",
        "Machine Learning",
    ],
    authors: [{ name: "Sarathi S", url: "https://github.com/sarathi-eng" }],
    openGraph: {
        title: "Sarathi S | Full-Stack Developer & AI Engineer",
        description:
            "Building the future with code, AI, and beautiful experiences. Explore my portfolio of AI-powered applications and production-grade systems.",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sarathi S | Full-Stack Developer & AI Engineer",
        description:
            "Building the future with code, AI, and beautiful experiences.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} font-sans antialiased noise-overlay`}
            >
                {children}
            </body>
        </html>
    );
}
