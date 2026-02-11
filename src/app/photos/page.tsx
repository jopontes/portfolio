import { photos } from "@/data/photos";
import { Gallery } from "@/components/Gallery";
import { Section } from "@/components/Section";

export default function PhotosPage() {
    const galleryItems = photos.map((photo) => ({
        id: photo.id,
        src: photo.coverImage,
        alt: photo.title,
        title: photo.title,
        subtitle: "Photography Series",
        href: `/photos/${photo.slug}`,
    }));

    return (
        <Section>
            <div className="flex flex-col gap-8">
                <div className="max-w-4xl">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 tracking-tighter uppercase leading-none text-stone-900">
                        Photos
                    </h1>
                    <p className="text-stone-400 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                        A collection of visual experiments and photographic exercises I've been exploring over the last few years.
                    </p>
                </div>

                <Gallery items={galleryItems} defaultLayout="grid" />
            </div>
        </Section>
    );
}
