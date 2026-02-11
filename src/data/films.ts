export interface FilmProject {
    id: string;
    slug: string;
    title: string;
    year?: string;
    role: string;
    director?: string;
    production?: string;
    client?: string;
    productionDesigner?: string;
    videoUrl: string; // Vimeo or YouTube link
    coverImage: string; // Path to cover image in public/assets
}

export const films: FilmProject[] = [
    {
        id: "onde-encontrar",
        slug: "onde-encontrar",
        title: "ONDE ENCONTRAR?",
        year: "2021",
        role: "Production Designer",
        director: "Wudd",
        videoUrl: "https://vimeo.com/588047549?fl=pl&fe=cm",
        coverImage: "/assets/FILMS/onde-encontrar/onde-encontrar-cover.jpg",
    },
    {
        id: "elis",
        slug: "elis",
        title: "ELIS",
        role: "Assistant Production Designer",
        director: "Hugo Prata",
        productionDesigner: "Fred Pinto",
        videoUrl: "https://youtu.be/GbgVYW8pZmg",
        coverImage: "/assets/FILMS/elis/elis-cover.jpg",
    },
    {
        id: "voce-vem-pra-festa",
        slug: "voce-vem-pra-festa",
        title: "VOCÊ VEM PRA FESTA?",
        role: "Production Manager",
        director: "Leonardo Grecco and Charles dos Santos",
        client: "yesHEis",
        videoUrl: "https://youtu.be/SolPGrL-FUs",
        coverImage: "/assets/FILMS/voce-vem-pra-festa/voce-vem-pra-festa-cover.png",
    },
    {
        id: "lost-sheep",
        slug: "lost-sheep",
        title: "LOST SHEEP",
        role: "Production Manager",
        director: "Leonardo Grecco and Charles dos Santos",
        videoUrl: "https://youtu.be/ocgySsABpN0",
        coverImage: "/assets/FILMS/lost-sheep/lost-sheep-cover.jpg",
    },
    {
        id: "pantene",
        slug: "pantene",
        title: "PANTENE",
        role: "Assistant Production Designer",
        productionDesigner: "Fred Pinto",
        videoUrl: "https://youtu.be/fLISu6z1hF4",
        coverImage: "/assets/FILMS/pantene/pantene-cover.jpg",
    },
    {
        id: "as-melhores-coisas-do-mundo",
        slug: "as-melhores-coisas-do-mundo",
        title: "AS MELHORES COISAS DO MUNDO",
        role: "Art Intern",
        director: "Lais Bodansky",
        productionDesigner: "Cassio Amarante",
        production: "Gullane",
        videoUrl: "https://youtu.be/Tc3JRaxYaww",
        coverImage: "/assets/FILMS/melhores-coisas-do-mundo/melhores-coisas-cover.jpg",
    },
    {
        id: "fdp-hbo",
        slug: "fdp-hbo",
        title: "(fdp)",
        role: "Assistant Production Designer",
        productionDesigner: "Fabio Goldfarb",
        production: "HBO",
        videoUrl: "https://www.youtube.com/watch?v=7jJdcRBrjl4",
        coverImage: "/assets/FILMS/fdp/fdp-cover.jpg",
    },
    {
        id: "inferno",
        slug: "inferno",
        title: "INFERNO",
        role: "Assistant Production Designer",
        director: "Yael Bartana",
        productionDesigner: "Fabio Goldfarb",
        videoUrl: "https://youtu.be/j424L5d8w9g",
        coverImage: "/assets/FILMS/inferno/inferno-cover.jpg",
    },
    {
        id: "olympikus-tube",
        slug: "olympikus-tube",
        title: "OLYMPIKUS",
        role: "Assistant Production Designer",
        director: "Carlão Busato",
        productionDesigner: "Fabio Goldfarb",
        videoUrl: "https://youtu.be/1wdtFMdbfdI",
        coverImage: "/assets/FILMS/olympikus-tube/olympikus-tube-cover.jpg",
    },
    {
        id: "e-alem-de-tudo",
        slug: "e-alem-de-tudo",
        title: "E ALÉM DE TUDO",
        role: "Assistant Production Designer",
        director: "Anna Muylaert",
        productionDesigner: "Fabio Goldfarb",
        production: "Globo Filmes",
        videoUrl: "https://youtu.be/_xavN9q8-_I",
        coverImage: "/assets/FILMS/alem-de-tudo/alem-de-tudo-cover.jpg",
    },
];
