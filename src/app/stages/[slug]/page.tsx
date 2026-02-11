import { stages } from "@/data/stages";
import { Section } from "@/components/Section";
import { Gallery } from "@/components/Gallery";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return stages.map((stage) => ({
        slug: stage.slug,
    }));
}

export default async function StagePage({ params }: PageProps) {
    const { slug } = await params;
    const project = stages.find((p) => p.slug === slug);

    if (!project) {
        return notFound();
    }

    // Format images for gallery
    const galleryItems = project.images.map((src, index) => ({
        id: `${project.id}-${index}`,
        src,
        alt: `${project.title} - Image ${index + 1}`,
    }));

    return (
        <div className="min-h-screen bg-stone-950 text-stone-100">
            {/* Hero */}
            <div className="pt-32 pb-12 md:pt-48 md:pb-24 px-6 max-w-screen-2xl mx-auto">
                <Link href="/stages" className="inline-flex items-center text-sm font-bold tracking-widest uppercase mb-8 hover:text-white/70 transition-colors">
                    ← Back to Stages
                </Link>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    <div className="lg:w-2/3">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter uppercase leading-none mb-6">
                            {project.title}
                        </h1>
                        {project.subtitle && (
                            <p className="text-xl md:text-2xl text-stone-400 font-light mb-8">{project.subtitle}</p>
                        )}

                        {project.description && (
                            <div className="prose prose-invert prose-lg text-stone-300 font-light max-w-none whitespace-pre-wrap">
                                {project.description}
                            </div>
                        )}
                    </div>

                    <div className="lg:w-1/3 space-y-8">
                        {project.credits && project.credits.map((credit, index) => (
                            <div key={index}>
                                <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-1 opacity-50">{credit.role}</h3>
                                <p className="text-lg">{credit.name}</p>
                            </div>
                        ))}
                        {!project.credits && (
                            <div className="text-stone-500 italic text-sm">Credits not listed.</div>
                        )}
                    </div>
                </div>
            </div>

            <Section>
                <Gallery items={galleryItems} defaultLayout="grid" />
            </Section>
        </div>
    );
}
