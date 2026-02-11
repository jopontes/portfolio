"use client";

interface VideoEmbedProps {
    url: string;
    title?: string;
}

export function VideoEmbed({ url, title }: VideoEmbedProps) {
    // Extract video ID from Vimeo URL if needed, or just use the URL if it's already properly formatted for iframe
    // The user provided standard vimeo links e.g. https://vimeo.com/216524172
    // We need to convert to embed URL: https://player.vimeo.com/video/216524172

    const getEmbedUrl = (vimeoUrl: string) => {
        const match = vimeoUrl.match(/vimeo\.com\/(\d+)/);
        if (match && match[1]) {
            return `https://player.vimeo.com/video/${match[1]}?title=0&byline=0&portrait=0&color=ffffff`;
        }
        return vimeoUrl; // Fallback or if already an embed link
    };

    const embedUrl = getEmbedUrl(url);

    return (
        <div className="w-full aspect-video bg-stone-900 rounded-lg overflow-hidden shadow-2xl">
            <iframe
                src={embedUrl}
                className="w-full h-full"
                title={title || "Video"}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
            />
        </div>
    );
}
