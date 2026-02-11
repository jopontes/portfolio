import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-12 px-6 border-t border-stone-200 mt-auto bg-[#E5E5E5]">
            <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="flex flex-col gap-2">
                    <Link href="/" className="font-display font-bold text-lg tracking-tighter uppercase text-stone-900">
                        Jonatas Pontes
                    </Link>
                    <p className="text-stone-500 text-sm">Creative Director</p>
                </div>

                <div className="flex flex-col md:items-end gap-2 text-sm text-stone-600">
                    <a href="mailto:contact@jonataspontes.com" className="hover:text-stone-900 transition-colors">contact@jonataspontes.com</a>
                    <a href="tel:+5511943302223" className="hover:text-stone-900 transition-colors">+55 (11) 94330-2223</a>

                    <div className="flex gap-4 mt-2">
                        <a href="https://www.instagram.com/jo_pontes" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors">Instagram</a>
                        <a href="https://www.linkedin.com/in/jonatas-pontes/" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors">LinkedIn</a>
                        <a href="https://www.imdb.com/name/nm5366599/?ref_=fn_t_1" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 transition-colors">IMDb</a>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-2xl mx-auto mt-12 text-xs text-stone-400 uppercase tracking-widest">
                © {currentYear} Jonatas Pontes. All rights reserved.
            </div>
        </footer>
    );
}
