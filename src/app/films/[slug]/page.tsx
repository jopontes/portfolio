import { films } from "@/data/films";
import { Section } from "@/components/Section";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { VideoEmbed } from "@/components/VideoEmbed";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return films.map((film) => ({
        slug: film.slug,
    }));
}

export default async function FilmPage({ params }: PageProps) {
    const { slug } = await params;
    const project = films.find((p) => p.slug === slug);

    if (!project) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-stone-950 text-stone-100">
            {/* Hero Section */}
            <div className="relative h-[70vh] w-full flex items-end p-6 md:p-12">
                {/* Background Image/Video Placeholder */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover opacity-40 mix-blend-overlay"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>

                <div className="relative z-10 w-full max-w-screen-2xl mx-auto">
                    <Link href="/films" className="inline-flex items-center text-sm font-bold tracking-widest uppercase mb-8 hover:text-white/70 transition-colors">
                        ← Back to Films
                    </Link>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter uppercase leading-none mb-4">
                        {project.title}
                    </h1>
                </div>
            </div>

            <Section className="py-12 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Project Details & Credits */}
                    <div className="lg:col-span-4 space-y-8 text-stone-300">
                        <div>
                            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-1 opacity-50">Role</h3>
                            <p className="text-lg md:text-xl">{project.role}</p>
                        </div>

                        {project.director && (
                            <div>
                                <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-1 opacity-50">Director</h3>
                                <p className="text-lg md:text-xl">{project.director}</p>
                            </div>
                        )}

                        {project.productionDesigner && (
                            <div>
                                <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-1 opacity-50">Production Designer</h3>
                                <p className="text-lg md:text-xl">{project.productionDesigner}</p>
                            </div>
                        )}

                        {project.production && (
                            <div>
                                <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-1 opacity-50">Production Company</h3>
                                <p className="text-lg md:text-xl">{project.production}</p>
                            </div>
                        )}

                        {project.client && (
                            <div>
                                <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-1 opacity-50">Client</h3>
                                <p className="text-lg md:text-xl">{project.client}</p>
                            </div>
                        )}

                        {project.year && (
                            <div>
                                <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-1 opacity-50">Year</h3>
                                <p className="text-lg md:text-xl">{project.year}</p>
                            </div>
                        )}
                    </div>

                    {/* Main Content / Video */}
                    <div className="lg:col-span-8 space-y-12">
                        {project.videoUrl && (
                            <div className="aspect-video w-full bg-black rounded-sm overflow-hidden shadow-2xl">
                                <VideoEmbed url={project.videoUrl} title={project.title} />
                            </div>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    );
}
