"use client";

import Image from "next/image";
import { ArticleBlock } from "@/data/photos";
import { cn } from "@/lib/utils";

interface ArticleLayoutProps {
    content: ArticleBlock[];
}

export function ArticleLayout({ content }: ArticleLayoutProps) {
    return (
        <div className="max-w-3xl mx-auto space-y-12 md:space-y-16 py-12">
            {content.map((block, index) => {
                if (block.type === "text") {
                    return (
                        <p key={index} className="text-lg md:text-xl font-serif leading-relaxed text-stone-200">
                            {block.value}
                        </p>
                    );
                }

                if (block.type === "image") {
                    return (
                        <div key={index} className="relative w-full aspect-[3/2] my-8 rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src={block.value}
                                alt={block.alt || "Article Image"}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 800px"
                            />
                        </div>
                    );
                }

                return null;
            })}
        </div>
    );
}
