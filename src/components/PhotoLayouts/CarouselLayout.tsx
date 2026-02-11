"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CarouselLayoutProps {
    images: string[];
}

export function CarouselLayout({ images }: CarouselLayoutProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="w-full overflow-x-auto pb-8 scrollbar-hide" ref={containerRef}>
            <div className="flex gap-4 md:gap-8 px-6 md:px-12 w-max">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="relative h-[60vh] md:h-[80vh] shrink-0 rounded-sm overflow-hidden select-none"
                    >
                        <Image
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            width={0}
                            height={0}
                            sizes="100vh"
                            className="h-full w-auto object-contain"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8 gap-2">
                <p className="text-xs uppercase tracking-widest text-stone-500">Scroll to explore</p>
            </div>
        </div>
    );
}
