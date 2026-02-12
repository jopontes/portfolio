import { photos } from "@/data/photos";
import { Gallery } from "@/components/Gallery";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return photos.map((photo) => ({
        slug: photo.slug,
    }));
}

export default async function PhotoPage({ params }: PageProps) {
    const { slug } = await params;
    const project = photos.find((p) => p.slug === slug);

    if (!project) {
        return notFound();
    }

    // Default Layout Items
    const galleryItems = project.images.map((src, index) => ({
        id: `${project.id}-${index}`,
        src,
        alt: `${project.title} - Image ${index + 1}`,
    }));

    return (
        <div className="min-h-screen bg-stone-950 text-stone-100">
            <div className="pt-32 pb-8 md:pt-48 md:pb-12 px-6 max-w-screen-2xl mx-auto">
                <Link href="/photos" className="inline-flex items-center text-sm font-bold tracking-widest uppercase mb-8 hover:text-white/70 transition-colors">
                    ← Back to Photos
                </Link>

                <div className="flex flex-col gap-6 mb-12">
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold tracking-tighter uppercase leading-none text-center md:text-left">
                        {project.title}
                    </h1>

                    {project.description && (
                        <div className="max-w-3xl prose prose-invert prose-lg text-stone-300 font-light whitespace-pre-wrap">
                            {project.description}
                        </div>
                    )}
                </div>
            </div>

            <div className="pl-6 md:pl-[max(1.5rem,calc((100vw-1536px)/2+1.5rem))]">
                <Gallery items={galleryItems} defaultLayout="horizontal" />
            </div>
        </div>
    );
}
