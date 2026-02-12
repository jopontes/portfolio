import { photos } from "@/data/photos";
import { ProjectSlider } from "@/components/ProjectSlider";

export default function PhotosPage() {
    const sliderItems = photos.map((photo) => ({
        id: photo.id,
        src: photo.coverImage,
        alt: photo.title,
        title: photo.title,
        description: photo.description,
        href: `/photos/${photo.slug}`,
    }));

    return (
        <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
            {/* Header / Nav Area Spacer if needed, or just padding */}
            <div className="pt-24 md:pt-32 pb-8 px-6 md:px-12 flex justify-between items-end container mx-auto">
                <div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase leading-none text-stone-900">
                        Photos
                    </h1>
                    <p className="text-stone-500 text-sm md:text-base mt-2 max-w-md font-light">
                        A collection of visual experiments and photographic exercises.
                    </p>
                </div>
            </div>

            {/* Slider Content - Fills remaining space */}
            <div className="flex-1 flex flex-col items-center justify-center pb-12">
                <ProjectSlider items={sliderItems} />
            </div>
        </div>
    );
}
