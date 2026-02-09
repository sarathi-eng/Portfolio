import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "outline" | "glow";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    const variants = {
        default:
            "bg-primary/15 text-primary border-primary/20 hover:bg-primary/25",
        secondary:
            "bg-secondary text-secondary-foreground border-secondary/50",
        outline:
            "bg-transparent border-white/10 text-muted-foreground hover:border-white/20",
        glow: "bg-primary/10 text-primary border-primary/30 shadow-sm shadow-primary/10",
    };

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                variants[variant],
                className
            )}
            {...props}
        />
    );
}

export { Badge };
