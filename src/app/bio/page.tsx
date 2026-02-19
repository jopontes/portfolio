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
                            Jonathas Pontes is a creative director and production designer with more than 16 years of experience. He is currently based in Europe and works across film, photography, stage design, and large scale visual projects.
                        </p>
                        <p className="mb-6">
                            With a background in architecture and urban planning, his work sits between creativity and structure. He focuses on visual storytelling that connects space, light, and narrative in a clear and meaningful way.
                        </p>
                        <p className="mb-6">
                            Alongside his creative work, Jonatas has extensive experience as a production and content manager in the non profit sector. He has led teams, managed complex productions, and delivered visual content for global audiences, always balancing creative vision with practical execution.
                        </p>
                        <p>
                            He is available for freelance and collaborative projects worldwide.
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
