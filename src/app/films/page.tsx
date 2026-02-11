import { films } from "@/data/films";
import { Gallery } from "@/components/Gallery";
import { Section } from "@/components/Section";

export default function FilmsPage() {
    // Map films data to GalleryItem format
    const galleryItems = films.map((film) => ({
        id: film.id,
        src: film.coverImage,
        alt: film.title,
        title: film.title,
        subtitle: `${film.role}` + (film.year ? ` (${film.year})` : ""),
        href: `/films/${film.slug}`,
    }));

    return (
        <Section>
            <div className="flex flex-col gap-8">
                <div className="max-w-4xl">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 tracking-tighter uppercase leading-none text-stone-900">
                        Films
                    </h1>
                </div>

                <Gallery items={galleryItems} defaultLayout="list" />
            </div>
        </Section>
    );
}
