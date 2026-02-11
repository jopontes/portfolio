"use client";

import Image from "next/image";
import { Story } from "@/data/photos";
import { cn } from "@/lib/utils";

interface FamilyLayoutProps {
    stories: Story[];
}

export function FamilyLayout({ stories }: FamilyLayoutProps) {
    return (
        <div className="space-y-32">
            {stories.map((story, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    <div className={cn("space-y-8", index % 2 === 1 && "lg:order-2")}>
                        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">
                            {story.title}
                        </h2>
                        <div className="prose prose-invert prose-lg text-stone-300 font-light leading-relaxed whitespace-pre-wrap">
                            {story.text}
                        </div>
                    </div>

                    <div className={cn("grid gap-4", index % 2 === 1 && "lg:order-1")}>
                        {story.images.map((img, imgIndex) => (
                            <div
                                key={imgIndex}
                                className={cn(
                                    "relative rounded-sm overflow-hidden",
                                    imgIndex === 0 ? "aspect-video w-full" : "aspect-square w-1/2 inline-block mr-4 last:mr-0"
                                )}
                            >
                                <Image
                                    src={img}
                                    alt={`${story.title} - Image ${imgIndex + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
