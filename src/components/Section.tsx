interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
    return (
        <section id={id} className={`w-full py-16 md:py-24 px-6 max-w-screen-2xl mx-auto ${className}`}>
            {children}
        </section>
    );
}
