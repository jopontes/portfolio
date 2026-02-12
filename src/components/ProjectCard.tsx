"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    subtitle?: string;
    imageSrc: string;
    href: string;
    layout?: "portrait" | "landscape" | "list";
    index?: number;
    className?: string;
}

export function ProjectCard({
    title,
    subtitle,
    imageSrc,
    href,
    layout = "portrait",
    index = 0,
    className,
}: ProjectCardProps) {
    if (layout === "list") {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={className}
            >
                <Link href={href} className="group block relative border-t border-stone-300 py-12 md:py-16 transition-colors hover:bg-stone-200/50">
                    <div className="flex flex-col md:flex-row items-baseline justify-between gap-2 relative z-20 px-4">
                        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 group-hover:translate-x-4 transition-transform duration-300">
                            <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium tracking-tighter uppercase drop-shadow-none text-stone-900 group-hover:text-black">
                                {title}
                            </h3>
                            {subtitle && (
                                <span className="text-lg md:text-xl font-light tracking-wide text-stone-500 uppercase">
                                    {subtitle}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Hover Image Reveal - Larger and Landscape */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] md:w-[600px] md:h-[360px] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-10 rotate-[-5deg] scale-90 group-hover:rotate-0 group-hover:scale-100 origin-center overflow-hidden rounded-md shadow-2xl">
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 500px, 600px"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={className}
        >
            {/* Changed default aspect ratio to video (landscape) as requested */}
            <Link href={href} className={cn("group block relative overflow-hidden bg-stone-900 w-full h-full", layout === "portrait" ? "aspect-[3/4]" : "aspect-video")}>
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Standard gradient for visibility, can be adjusted if user wants black text on image (unlikely good) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight uppercase mb-1 text-white drop-shadow-lg leading-none">{title}</h3>
                </div>
            </Link>
        </motion.div>
    );
}
