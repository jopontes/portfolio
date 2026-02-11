import Image from "next/image";
import { Section } from "@/components/Section";

export default function BioPage() {
    return (
        <Section>
            <div className="flex flex-col md:flex-row gap-12 items-start justify-center">
                <div className="w-full max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-display font-medium mb-8 text-black dark:text-black">BIO</h1>

                    <div className="prose prose-lg text-stone-900 font-normal leading-relaxed">
                        <p className="mb-6">
                            Jonatas Pontes is a production designer and art director based in São Paulo, Brazil.
                            With a background in architecture and a passion for visual storytelling, he creates
                            immersive environments for films, music videos, and large-scale events.
                        </p>
                        <p className="mb-6">
                            His work explores the relationship between space, light, and narrative, often
                            pushing the boundaries of conventional set design to create kinetic and memorable experiences.
                        </p>
                        <p>
                            Available for freelance projects worldwide.
                            <br />
                            <a href="mailto:contact@jonataspontes.com" className="text-black underline hover:no-underline mt-4 inline-block">
                                contact@jonataspontes.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
