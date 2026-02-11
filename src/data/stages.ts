export interface StageProject {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  images: string[];
  description?: string;
  credits?: { role: string; name: string }[];
}

export const stages: StageProject[] = [
  {
    id: "luan-santana-acustico",
    slug: "luan-santana-acustico",
    title: "LUAN SANTANA",
    subtitle: "Acústico (2015)",
    coverImage: "/assets/STAGES/luan-santana-acustico/luan-santana-acustico-08.png",
    credits: [
      { role: "Position", name: "Assistant Art Director" },
      { role: "Direction", name: "Joana Mazzuchelli" },
      { role: "Art Director", name: "Ludmila Machado" },
      { role: "Production", name: "Polar Filmes" }
    ],
    images: [
      "/assets/STAGES/luan-santana-acustico/luan-santana-acustico-08.png",
      "/assets/STAGES/luan-santana-acustico/luan-santana-acustico-02.png",
      "/assets/STAGES/luan-santana-acustico/luan-santana-acustico-03.png",
      "/assets/STAGES/luan-santana-acustico/luan-santana-acustico-04.png",
      "/assets/STAGES/luan-santana-acustico/luan-santana-acustico-05.png",
      "/assets/STAGES/luan-santana-acustico/luan-santana-acustico-06.png",
      "/assets/STAGES/luan-santana-acustico/luan-santana-acustico-07.png",
      "/assets/STAGES/luan-santana-acustico/luan-santana-acustico-08.png",
      "/assets/STAGES/luan-santana-acustico/luan-santana-acustico-09.png",
      "/assets/STAGES/luan-santana-acustico/luan-santana-acustico-10.png",
      "/assets/STAGES/luan-santana-acustico/luan-santana-acustico-11.png",
      "/assets/STAGES/luan-santana-acustico/luan-santana-acustico-12.png",
      "/assets/STAGES/luan-santana-acustico/luan-santana-acustico-13.png",
      "/assets/STAGES/luan-santana-acustico/luan-santana-acustico-14.png",
      "/assets/STAGES/luan-santana-acustico/luan-santana-acustico-15.png",
      "/assets/STAGES/luan-santana-acustico/luan-santana-acustico-16.png",
      "/assets/STAGES/luan-santana-acustico/luan-santana-acustico-17.png",
      "/assets/STAGES/luan-santana-acustico/luan-santana-acustico-18.png"
    ]
  },
  {
    id: "fernando-e-sorocaba",
    slug: "fernando-e-sorocaba",
    title: "FERNANDO E SOROCABA",
    subtitle: "Sou do Interior (2017)",
    coverImage: "/assets/STAGES/fernando-e-sorocaba/fernando-e-sorocaba-01.png",
    credits: [
      { role: "Position", name: "Assistant Art Director" },
      { role: "Direction", name: "Catatau" },
      { role: "Art Director", name: "Ludmila Machado" }
    ],
    images: [
      "/assets/STAGES/fernando-e-sorocaba/fernando-e-sorocaba-01.png",
      "/assets/STAGES/fernando-e-sorocaba/fernando-e-sorocaba-02.png",
      "/assets/STAGES/fernando-e-sorocaba/fernando-e-sorocaba-03.png",
      "/assets/STAGES/fernando-e-sorocaba/fernando-e-sorocaba-04.png",
      "/assets/STAGES/fernando-e-sorocaba/fernando-e-sorocaba-05.png",
      "/assets/STAGES/fernando-e-sorocaba/fernando-e-sorocaba-06.png",
      "/assets/STAGES/fernando-e-sorocaba/fernando-e-sorocaba-07.png",
      "/assets/STAGES/fernando-e-sorocaba/fernando-e-sorocaba-08.png"
    ]
  },
  {
    id: "ivete-sangalo-20-anos",
    slug: "ivete-sangalo-20-anos",
    title: "IVETE SANGALO",
    subtitle: "20 Anos (2014)",
    coverImage: "/assets/STAGES/ivete-sangalo-20-anos/ivete-sangalo-20-anos-01.png",
    credits: [
      { role: "Position", name: "Assistant Art Director" },
      { role: "Art Director", name: "Ludmila Machado" },
      { role: "Production", name: "IS" }
    ],
    images: [
      "/assets/STAGES/ivete-sangalo-20-anos/ivete-sangalo-20-anos-01.png",
      "/assets/STAGES/ivete-sangalo-20-anos/ivete-sangalo-20-anos-02.png",
      "/assets/STAGES/ivete-sangalo-20-anos/ivete-sangalo-20-anos-03.png",
      "/assets/STAGES/ivete-sangalo-20-anos/ivete-sangalo-20-anos-04.png",
      "/assets/STAGES/ivete-sangalo-20-anos/ivete-sangalo-20-anos-05.png",
      "/assets/STAGES/ivete-sangalo-20-anos/ivete-sangalo-20-anos-06.png",
      "/assets/STAGES/ivete-sangalo-20-anos/ivete-sangalo-20-anos-07.png",
      "/assets/STAGES/ivete-sangalo-20-anos/ivete-sangalo-20-anos-08.png",
      "/assets/STAGES/ivete-sangalo-20-anos/ivete-sangalo-20-anos-09.png",
      "/assets/STAGES/ivete-sangalo-20-anos/ivete-sangalo-20-anos-10.png"
    ]
  },
  {
    id: "luan-santana-1977",
    slug: "luan-santana-1977",
    title: "LUAN SANTANA",
    subtitle: "1977 (2016)",
    coverImage: "/assets/STAGES/luan-santana-1977/luan-santana-1977-01.png",
    credits: [
      { role: "Position", name: "Assistant Art Director" },
      { role: "Direction", name: "Joana Mazzuchelli" },
      { role: "Art Director", name: "Ludmila Machado" },
      { role: "Production", name: "Polar Filmes" }
    ],
    images: [
      "/assets/STAGES/luan-santana-1977/luan-santana-1977-01.png",
      "/assets/STAGES/luan-santana-1977/luan-santana-1977-02.png",
      "/assets/STAGES/luan-santana-1977/luan-santana-1977-03.png",
      "/assets/STAGES/luan-santana-1977/luan-santana-1977-04.png",
      "/assets/STAGES/luan-santana-1977/luan-santana-1977-05.png"
    ]
  },
  {
    id: "sorriso-maroto",
    slug: "sorriso-maroto",
    title: "SORRISO MAROTO",
    subtitle: "Eu Gosto",
    coverImage: "/assets/STAGES/sorriso-maroto/sorriso-maroto-01.png",
    credits: [
      { role: "Position", name: "Assistant Art Director" },
      { role: "Art Director", name: "Ludmila Machado" }
    ],
    images: [
      "/assets/STAGES/sorriso-maroto/sorriso-maroto-01.png",
      "/assets/STAGES/sorriso-maroto/sorriso-maroto-02.png",
      "/assets/STAGES/sorriso-maroto/sorriso-maroto-03.png",
      "/assets/STAGES/sorriso-maroto/sorriso-maroto-04.png",
      "/assets/STAGES/sorriso-maroto/sorriso-maroto-05.png",
      "/assets/STAGES/sorriso-maroto/sorriso-maroto-06.png",
      "/assets/STAGES/sorriso-maroto/sorriso-maroto-07.png"
    ]
  },
  {
    id: "ivete-sangalo-acustico",
    slug: "ivete-sangalo-acustico",
    title: "IVETE SANGALO",
    subtitle: "Acústico (2016)",
    coverImage: "/assets/STAGES/ivete-sangalo-acustico/ivete-sangalo-acustico-05.png",
    credits: [
      { role: "Position", name: "Assistant Art Director" },
      { role: "Art Director", name: "Ludmila Machado" },
      { role: "Production", name: "IS" }
    ],
    images: [
      "/assets/STAGES/ivete-sangalo-acustico/ivete-sangalo-acustico-05.png",
      "/assets/STAGES/ivete-sangalo-acustico/ivete-sangalo-acustico-02.png",
      "/assets/STAGES/ivete-sangalo-acustico/ivete-sangalo-acustico-03.png",
      "/assets/STAGES/ivete-sangalo-acustico/ivete-sangalo-acustico-04.png",
      "/assets/STAGES/ivete-sangalo-acustico/ivete-sangalo-acustico-05.png",
      "/assets/STAGES/ivete-sangalo-acustico/ivete-sangalo-acustico-06.png",
      "/assets/STAGES/ivete-sangalo-acustico/ivete-sangalo-acustico-07.png",
      "/assets/STAGES/ivete-sangalo-acustico/ivete-sangalo-acustico-08.png",
      "/assets/STAGES/ivete-sangalo-acustico/ivete-sangalo-acustico-09.png",
      "/assets/STAGES/ivete-sangalo-acustico/ivete-sangalo-acustico-10.png",
      "/assets/STAGES/ivete-sangalo-acustico/ivete-sangalo-acustico-11.png",
      "/assets/STAGES/ivete-sangalo-acustico/ivete-sangalo-acustico-12.png"
    ]
  },
  {
    id: "jota-quest",
    slug: "jota-quest",
    title: "JOTA QUEST",
    subtitle: "Acústico",
    coverImage: "/assets/STAGES/jota-quest/jota-quest-01.png",
    credits: [
      { role: "Position", name: "Assistant Art Director" },
      { role: "Direction", name: "Joana Mazzuchelli" },
      { role: "Art Director", name: "Ludmila Machado" },
      { role: "Production", name: "Polar Filmes" }
    ],
    images: [
      "/assets/STAGES/jota-quest/jota-quest-01.png",
      "/assets/STAGES/jota-quest/jota-quest-02.png",
      "/assets/STAGES/jota-quest/jota-quest-03.png",
      "/assets/STAGES/jota-quest/jota-quest-04.png",
      "/assets/STAGES/jota-quest/jota-quest-05.png",
      "/assets/STAGES/jota-quest/jota-quest-06.png",
      "/assets/STAGES/jota-quest/jota-quest-07.png",
      "/assets/STAGES/jota-quest/jota-quest-08.png"
    ]
  },
  {
    id: "ivete-sangalo-rir",
    slug: "ivete-sangalo-rir",
    title: "IVETE SANGALO",
    subtitle: "Rock in Rio 2017",
    coverImage: "/assets/STAGES/ivete-sangalo-rir/ivete-sangalo-rir-01.png",
    credits: [
      { role: "Position", name: "Assistant Art Director" },
      { role: "Art Director", name: "Ludmila Machado" }
    ],
    images: [
      "/assets/STAGES/ivete-sangalo-rir/ivete-sangalo-rir-01.png",
      "/assets/STAGES/ivete-sangalo-rir/ivete-sangalo-rir-02.png",
      "/assets/STAGES/ivete-sangalo-rir/ivete-sangalo-rir-03.png",
      "/assets/STAGES/ivete-sangalo-rir/ivete-sangalo-rir-04.png",
      "/assets/STAGES/ivete-sangalo-rir/ivete-sangalo-rir-05.png"
    ]
  },
  {
    id: "avioes-pool-party",
    slug: "avioes-pool-party",
    title: "AVIÕES DO FORRÓ",
    subtitle: "Pool Party",
    coverImage: "/assets/STAGES/avioes-pool-party/avioes-pool-party-01.png",
    credits: [
      { role: "Position", name: "Assistant Art Director" },
      { role: "Direction", name: "Joana Mazzuchelli" },
      { role: "Art Director", name: "Ludmila Machado" },
      { role: "Production", name: "Polar Filmes" }
    ],
    images: [
      "/assets/STAGES/avioes-pool-party/avioes-pool-party-01.png",
      "/assets/STAGES/avioes-pool-party/avioes-pool-party-02.png",
      "/assets/STAGES/avioes-pool-party/avioes-pool-party-03.png",
      "/assets/STAGES/avioes-pool-party/avioes-pool-party-04.png",
      "/assets/STAGES/avioes-pool-party/avioes-pool-party-05.png",
      "/assets/STAGES/avioes-pool-party/avioes-pool-party-06.png",
      "/assets/STAGES/avioes-pool-party/avioes-pool-party-07.png",
      "/assets/STAGES/avioes-pool-party/avioes-pool-party-08.png",
      "/assets/STAGES/avioes-pool-party/avioes-pool-party-09.png",
      "/assets/STAGES/avioes-pool-party/avioes-pool-party-10.png"
    ]
  },
  {
    id: "bruninho-e-davi",
    slug: "bruninho-e-davi",
    title: "BRUNINHO E DAVI",
    subtitle: "Ao Vivo no Ibirapuera",
    coverImage: "/assets/STAGES/bruninho-e-davi/bruninho-e-davi-05.png",
    credits: [
      { role: "Position", name: "Assistant Art Director" },
      { role: "Direction", name: "Joana Mazzuchelli" },
      { role: "Art Director", name: "Ludmila Machado" },
      { role: "Production", name: "Polar Filmes" }
    ],
    images: [
      "/assets/STAGES/bruninho-e-davi/bruninho-e-davi-05.png",
      "/assets/STAGES/bruninho-e-davi/bruninho-e-davi-02.png",
      "/assets/STAGES/bruninho-e-davi/bruninho-e-davi-03.png",
      "/assets/STAGES/bruninho-e-davi/bruninho-e-davi-04.png",
      "/assets/STAGES/bruninho-e-davi/bruninho-e-davi-05.png"
    ]
  },
  {
    id: "meus-premios-nick-2017",
    slug: "meus-premios-nick-2017",
    title: "MEUS PRÊMIOS NICK",
    subtitle: "2017",
    coverImage: "/assets/STAGES/meus-premios-nick-2017/meus-premios-nick-2017-01.png",
    credits: [
      { role: "Position", name: "Assistant Art Director" },
      { role: "Art Director", name: "Ludmila Machado" }
    ],
    images: [
      "/assets/STAGES/meus-premios-nick-2017/meus-premios-nick-2017-01.png",
      "/assets/STAGES/meus-premios-nick-2017/meus-premios-nick-2017-02.png",
      "/assets/STAGES/meus-premios-nick-2017/meus-premios-nick-2017-03.png",
      "/assets/STAGES/meus-premios-nick-2017/meus-premios-nick-2017-04.png",
      "/assets/STAGES/meus-premios-nick-2017/meus-premios-nick-2017-05.png",
      "/assets/STAGES/meus-premios-nick-2017/meus-premios-nick-2017-06.png"
    ]
  },
  {
    id: "meus-premios-nick-2016",
    slug: "meus-premios-nick-2016",
    title: "MEUS PRÊMIOS NICK",
    subtitle: "2016",
    coverImage: "/assets/STAGES/meus-premios-nick-2016/meus-premios-nick-2016-01.png",
    credits: [
      { role: "Position", name: "Assistant Art Director" },
      { role: "Art Director", name: "Ludmila Machado" }
    ],
    images: [
      "/assets/STAGES/meus-premios-nick-2016/meus-premios-nick-2016-01.png",
      "/assets/STAGES/meus-premios-nick-2016/meus-premios-nick-2016-02.png",
      "/assets/STAGES/meus-premios-nick-2016/meus-premios-nick-2016-03.png",
      "/assets/STAGES/meus-premios-nick-2016/meus-premios-nick-2016-04.png",
      "/assets/STAGES/meus-premios-nick-2016/meus-premios-nick-2016-05.png"
    ]
  },
  {
    id: "meus-premios-nick-2015",
    slug: "meus-premios-nick-2015",
    title: "MEUS PRÊMIOS NICK",
    subtitle: "2015",
    coverImage: "/assets/STAGES/meus-premios-nick-2015/meus-premios-nick-2015-01.png",
    credits: [
      { role: "Position", name: "Assistant Art Director" },
      { role: "Art Director", name: "Ludmila Machado" }
    ],
    images: [
      "/assets/STAGES/meus-premios-nick-2015/meus-premios-nick-2015-01.png",
      "/assets/STAGES/meus-premios-nick-2015/meus-premios-nick-2015-02.png",
      "/assets/STAGES/meus-premios-nick-2015/meus-premios-nick-2015-03.png",
      "/assets/STAGES/meus-premios-nick-2015/meus-premios-nick-2015-04.png",
      "/assets/STAGES/meus-premios-nick-2015/meus-premios-nick-2015-05.png",
      "/assets/STAGES/meus-premios-nick-2015/meus-premios-nick-2015-06.png",
      "/assets/STAGES/meus-premios-nick-2015/meus-premios-nick-2015-07.png",
      "/assets/STAGES/meus-premios-nick-2015/meus-premios-nick-2015-08.png"
    ]
  },
  {
    id: "heineken-glassroom",
    slug: "heineken-glassroom",
    title: "HEINEKEN GLASSROOM",
    subtitle: "Installation (2015)",
    coverImage: "/assets/STAGES/heineken-glassroom/heineken-glassroom-01.jpeg",
    description: "Heineken Glass Room was a multi sensorial project that gathered art and music on the foreground of Oscar Niemeyer’s Museum in Curitiba, Brazil. During four weekends, the public could experience light and sound throughout 4 spaces that we designed.\n\nMulti Shadows was the entry of Glass Room and it was basically a corridor that displayed three different shadows of the passer-by via an arrangement of RGB light spots.\n\nColor Space was a big squared white box filled with changing lights that was cut out by a mirror installation portal on the middle of the space. It was a game of lights, colors and reflections.\n\n3D Lights was a lounge where the bar and seats were located. It was covered in a surface made out of white cubes with different depths. By displaying led light spots in different angles and playing with their colors, we were able to create a continuous movement in the space together with optical illusions.\n\nOutline Heat, the dance floor, in opposition to the rest of the project, had as its main characteristic the lack of light in order to bring a more immersive experience to the sound itself. The only light at the space was a subtle led tape marking the rectangled edge of the dance floor.\n\nApart from the ephemeral architecture design, we also worked on the identity of Heineken Glass Room 2015 together with graphic material and on and offline communication.",
    credits: [
      { role: "Team", name: "Solenn Robic, Hick Duarte, Marcelo Gerab, Jonatas Pontes, Gabriel Finotti" }
    ],
    images: [
      "/assets/STAGES/heineken-glassroom/heineken-glassroom-01.jpeg",
      "/assets/STAGES/heineken-glassroom/heineken-glassroom-02.jpeg",
      "/assets/STAGES/heineken-glassroom/heineken-glassroom-03.jpeg",
      "/assets/STAGES/heineken-glassroom/heineken-glassroom-04.jpeg",
      "/assets/STAGES/heineken-glassroom/heineken-glassroom-05.jpeg",
      "/assets/STAGES/heineken-glassroom/heineken-glassroom-06.jpeg",
      "/assets/STAGES/heineken-glassroom/heineken-glassroom-07.jpeg"
    ]
  }
];
