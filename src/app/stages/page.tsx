import { stages } from "@/data/stages";
import { Gallery } from "@/components/Gallery";
import { Section } from "@/components/Section";

export default function StagesPage() {
    const galleryItems = stages.map((stage) => ({
        id: stage.id,
        src: stage.coverImage,
        alt: stage.title,
        title: stage.title,
        subtitle: stage.subtitle, // Subtitle is already formatted nicely in data
        href: `/stages/${stage.slug}`,
    }));

    return (
        <Section>
            <div className="flex flex-col gap-8">
                <div className="max-w-4xl">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 tracking-tighter uppercase leading-none text-stone-900">
                        Stages
                    </h1>
                </div>

                <Gallery items={galleryItems} defaultLayout="list" />
            </div>
        </Section>
    );
}
