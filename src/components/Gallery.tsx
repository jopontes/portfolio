"use client";

import { useState } from "react";
import Image from "next/image";
import { ProjectCard } from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface GalleryItem {
    id: string;
    src: string;
    alt: string;
    title?: string; // Optional title for tracking
    subtitle?: string; // Optional subtitle
    href?: string; // Optional link
}

interface GalleryProps {
    items: GalleryItem[];
    defaultLayout?: "grid" | "list";
}

export function Gallery({ items, defaultLayout = "grid" }: GalleryProps) {
    const [layout, setLayout] = useState<"grid" | "list">(defaultLayout);

    return (
        <div className="space-y-8">
            {/* View Toggle */}
            <div className="flex justify-end gap-2 sticky top-24 z-40 mix-blend-difference">
                <button
                    onClick={() => setLayout("list")}
                    className={cn("text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border transition-all", layout === "list" ? "bg-white text-black border-white" : "text-white border-transparent hover:border-white/50")}
                >
                    List
                </button>
                <button
                    onClick={() => setLayout("grid")}
                    className={cn("text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border transition-all", layout === "grid" ? "bg-white text-black border-white" : "text-white border-transparent hover:border-white/50")}
                >
                    Grid
                </button>
            </div>

            <motion.div
                layout
                className={cn(
                    "min-h-screen",
                    layout === "grid"
                        ? "columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
                        : "flex flex-col gap-0"
                )}
            >
                <AnimatePresence mode="popLayout">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={cn(layout === "grid" && "break-inside-avoid")}
                        >
                            {/* If item has href and title, use ProjectCard, else use simple Image */}
                            {item.href && item.title ? (
                                <ProjectCard
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    imageSrc={item.src}
                                    href={item.href}
                                    layout={layout === "list" ? "list" : "landscape"}
                                    index={index}
                                />
                            ) : (
                                <div className="relative aspect-video bg-stone-900 overflow-hidden rounded-sm">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
