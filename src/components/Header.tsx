"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "FILMS", href: "/films" },
    { name: "STAGES", href: "/stages" },
    { name: "PHOTOS", href: "/photos" },
    { name: "BIO", href: "/bio" },
];

export function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-6 left-0 w-full z-50 pointer-events-none">
            <div className="max-w-screen-2xl mx-auto px-6 flex justify-between items-start">
                {/* Logo */}
                <Link href="/" className="pointer-events-auto">
                    <span className="font-display font-bold text-xl tracking-tighter uppercase text-stone-900 hover:opacity-60 transition-opacity">
                        Jonatas Pontes
                    </span>
                </Link>

                {/* Navigation Text Only */}
                <nav className="pointer-events-auto flex gap-6">
                    {navItems.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-xs font-bold tracking-widest transition-colors uppercase",
                                    isActive
                                        ? "text-stone-900"
                                        : "text-stone-400 hover:text-stone-900"
                                )}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}
