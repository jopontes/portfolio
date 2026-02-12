"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface SliderItem {
    id: string;
    src: string;
    alt: string;
    title: string;
    description: string;
    href: string;
}

interface ProjectSliderProps {
    items: SliderItem[];
}

export function ProjectSlider({ items }: ProjectSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = useCallback((newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = items.length - 1;
            if (nextIndex >= items.length) nextIndex = 0;
            return nextIndex;
        });
    }, [items.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                paginate(-1);
            } else if (e.key === "ArrowRight") {
                paginate(1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [paginate, items.length]);

    const currentItem = items[currentIndex];

    // Auto-advance optional, not implementing to keep it interactive only per request "slide com setinha"

    return (
        <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center bg-stone-50 overflow-hidden">

            {/* Arrows */}
            <div className="absolute inset-0 flex items-center justify-between px-4 md:px-12 pointer-events-none z-50">
                <button
                    className="pointer-events-auto p-4 rounded-full bg-white/80 hover:bg-white text-stone-900 transition-all shadow-sm hover:shadow-md backdrop-blur-sm group"
                    onClick={() => paginate(-1)}
                    aria-label="Previous Project"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                <button
                    className="pointer-events-auto p-4 rounded-full bg-white/80 hover:bg-white text-stone-900 transition-all shadow-sm hover:shadow-md backdrop-blur-sm group"
                    onClick={() => paginate(1)}
                    aria-label="Next Project"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>

            {/* Content Container */}
            <div className="relative w-full h-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-12 md:px-24">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-8 md:p-12 gap-8"
                    >
                        {/* Image Left (or Top) */}
                        <Link href={currentItem.href} className="relative w-full md:w-3/5 h-[40vh] md:h-full block shadow-none group flex items-center justify-center">
                            <Image
                                src={currentItem.src}
                                alt={currentItem.alt}
                                fill
                                className="object-contain"
                                priority
                                sizes="(max-width: 768px) 100vw, 60vw"
                            />
                        </Link>

                        {/* Text Right (or Bottom) */}
                        <div className="w-full md:w-2/5 flex flex-col items-start justify-center h-full z-10 text-left pl-4 md:pl-8 border-l border-stone-200">
                            <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase mb-4 block">
                                0{currentIndex + 1} / 0{items.length}
                            </span>
                            <Link href={currentItem.href} className="group-hover:text-stone-600 transition-colors block">
                                <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter uppercase leading-[0.85] text-stone-900 mb-6 break-words">
                                    {currentItem.title}
                                </h2>
                            </Link>

                            <p className="text-stone-500 text-sm md:text-base leading-relaxed mb-8 max-w-sm line-clamp-4">
                                {currentItem.description}
                            </p>

                            <Link
                                href={currentItem.href}
                                className="inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-stone-900 border-b-2 border-transparent hover:border-stone-900 pb-1 transition-all group"
                            >
                                View Project
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
