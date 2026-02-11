export interface ArticleBlock {
  type: 'text' | 'image';
  value: string;
  alt?: string;
}

export interface Story {
  title: string;
  text: string;
  images: string[];
}

export type PhotoLayout = 'grid' | 'article' | 'carousel' | 'stories';

export interface PhotoProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
  layout?: PhotoLayout;
  stories?: Story[];
  articleContent?: ArticleBlock[];
}

export const photos: PhotoProject[] = [
  {
    "id": "last-journey",
    "slug": "last-journey",
    "title": "LAST JOURNEY",
    "description": "In November '22, I accompanied my uncles Silas and Eldina on their final visit to the indigenous area which they have worked for almost four decades.",
    "layout": "article",
    "articleContent": [
      {
        type: "text",
        value: "In November '22, I accompanied my uncles Silas and Eldina on their final visit to the indigenous area which they have worked for almost four decades."
      },
      {
        type: "image",
        value: "/assets/PHOTOS/last-journey/last-journey-02.JPG",
        alt: "Silas and Eldina looking at the horizon"
      },
      {
        type: "text",
        value: "Silas and Eldna, missionaries in Brazil, dedicated over 40 years to assisting the Waiapi tribe in the Amazon. They faced numerous challenges, from constructing infrastructure to mastering the Waiapi language and earning the tribe's trust."
      },
      {
        type: "image",
        value: "/assets/PHOTOS/last-journey/last-journey-05.jpg",
        alt: "Waiapi tribe gathering"
      },
      {
        type: "text",
        value: "Their initiatives significantly improved healthcare and education for the Waiapi and involved translating the Bible into the tribe's language. Their work helped increase the tribe's population from 300 to 1,500."
      },
      {
        type: "image",
        value: "/assets/PHOTOS/last-journey/last-journey-08.jpg",
        alt: "Daily life in the village"
      },
      {
        type: "text",
        value: "During their last visit, they looked back on the lasting impact of their efforts and the brighter future they helped secure for the Waiapi."
      },
      {
        type: "image",
        value: "/assets/PHOTOS/last-journey/last-journey-12.jpg",
        alt: "Silas and Eldina waving goodbye"
      }
    ],
    "coverImage": "/assets/PHOTOS/last-journey/last-journey-01.JPG",
    "images": [
      "/assets/PHOTOS/last-journey/last-journey-01.JPG",
      "/assets/PHOTOS/last-journey/last-journey-02.JPG",
      "/assets/PHOTOS/last-journey/last-journey-03.jpg",
      "/assets/PHOTOS/last-journey/last-journey-04.jpg",
      "/assets/PHOTOS/last-journey/last-journey-05.jpg",
      "/assets/PHOTOS/last-journey/last-journey-06.jpg",
      "/assets/PHOTOS/last-journey/last-journey-07.jpg",
      "/assets/PHOTOS/last-journey/last-journey-08.jpg",
      "/assets/PHOTOS/last-journey/last-journey-09.jpg",
      "/assets/PHOTOS/last-journey/last-journey-10.jpg",
      "/assets/PHOTOS/last-journey/last-journey-11.jpg",
      "/assets/PHOTOS/last-journey/last-journey-12.jpg",
      "/assets/PHOTOS/last-journey/last-journey-13.jpg",
      "/assets/PHOTOS/last-journey/last-journey-14.jpg",
      "/assets/PHOTOS/last-journey/last-journey-15.jpg",
      "/assets/PHOTOS/last-journey/last-journey-16.jpg"
    ]
  },
  {
    "id": "asia",
    "slug": "asia",
    "title": "ASIA",
    "description": "Pictures taken during a trip across Asia",
    "layout": "carousel",
    "coverImage": "/assets/PHOTOS/asia/asia-01.jpg",
    "images": [
      "/assets/PHOTOS/asia/asia-01.jpg",
      "/assets/PHOTOS/asia/asia-02.jpg",
      "/assets/PHOTOS/asia/asia-03.jpg",
      "/assets/PHOTOS/asia/asia-04.jpg",
      "/assets/PHOTOS/asia/asia-05.jpg",
      "/assets/PHOTOS/asia/asia-06.jpg",
      "/assets/PHOTOS/asia/asia-07.jpg",
      "/assets/PHOTOS/asia/asia-08.jpg",
      "/assets/PHOTOS/asia/asia-09.jpg",
      "/assets/PHOTOS/asia/asia-10.jpg",
      "/assets/PHOTOS/asia/asia-11.jpg",
      "/assets/PHOTOS/asia/asia-12.jpg",
      "/assets/PHOTOS/asia/asia-13.jpg",
      "/assets/PHOTOS/asia/asia-14.jpg",
      "/assets/PHOTOS/asia/asia-15.jpg",
      "/assets/PHOTOS/asia/asia-16.jpg",
      "/assets/PHOTOS/asia/asia-17.jpg",
      "/assets/PHOTOS/asia/asia-18.jpg",
      "/assets/PHOTOS/asia/asia-19.jpg",
      "/assets/PHOTOS/asia/asia-20.jpg",
      "/assets/PHOTOS/asia/asia-21.jpg",
      "/assets/PHOTOS/asia/asia-22.jpg"
    ]
  },
  {
    "id": "life-on-train",
    "slug": "life-on-train",
    "title": "LIFE ON TRAIN",
    "description": "Traveling nearly 9000km by train between Beijing and Moscow requires you to settle in and live a life on the train.\nThese are some images I took on this route in 2016.",
    "layout": "grid",
    "coverImage": "/assets/PHOTOS/life-on-train/life-on-train-01.jpg",
    "images": [
      "/assets/PHOTOS/life-on-train/life-on-train-01.jpg",
      "/assets/PHOTOS/life-on-train/life-on-train-02.jpg",
      "/assets/PHOTOS/life-on-train/life-on-train-03.jpg",
      "/assets/PHOTOS/life-on-train/life-on-train-04.jpg",
      "/assets/PHOTOS/life-on-train/life-on-train-05.jpg",
      "/assets/PHOTOS/life-on-train/life-on-train-06.jpg",
      "/assets/PHOTOS/life-on-train/life-on-train-07.jpg"
    ]
  },
  {
    "id": "world-refugee-day",
    "slug": "world-refugee-day",
    "title": "WORLD REFUGEE DAY",
    "description": "Every June 20th is celebrated the World Refugee Day and because of this day I went to meet 3 families of refugees currently living in Jundiaí (São paulo), my hometown, to hear their stories.",
    "layout": "stories",
    "stories": [
      {
        "title": "Jonel Fleurmond and Magdala Maxi",
        "text": "Jonel and Magdala in the patio of the village their live along other families.\n\nJonel Fleurmond's journey to Jundiaí, Brazil was a long and difficult one. After leaving Quito, Ecuador, he encountered many obstacles, including hours on a bus, uncertainty, and fear.\n\nBut, he pushed through, and now, five years later, he has settled in Jardim Tulipas and found a steady job at Japi, where he works alongside other Haitian immigrants. Alongside his wife Magdala Maxi, 29, the couple is eagerly awaiting the arrival of their first child in September.\n\nDespite the challenges of being away from home, they try to keep their culture alive by cooking traditional Haitian dishes such as pumpkin soup, plantains, and lalo. Jonel aspires to work hard and pursue further education to improve his living conditions, but ultimately, he trust in God's plan for his life.",
        "images": [
          "/assets/PHOTOS/world-refugee-day/world-refugee-day-01.jpg",
          "/assets/PHOTOS/world-refugee-day/world-refugee-day-02.jpg",
          "/assets/PHOTOS/world-refugee-day/world-refugee-day-03.jpg"
        ]
      },
      {
        "title": "Wilson Donatien",
        "text": "Before the devastating 2010 earthquake, Haiti was already grappling with political and economic turmoil. Wilson Donatien, 33, had a grocery store in Gonaives and was determined to improve his circumstances.\n\nWhen the earthquake struck, he set his sights on Brazil, hoping to secure work on infrastructure projects for the 2014 World Cup. But upon arriving in Jundiaí in 2012, those opportunities never materialized. Nevertheless, Wilson persevered. He took advantage of courses offered by the Scalabrinian Center for the Promotion of Migrants and received formal training as a forklift operator.\n\nNow, a resident of Jardim Pacaembú, Wilson has built a small business that provides basic goods, copying services, and assistance with sending money to Haiti.\n\nDespite facing discrimination based on his appearance, Wilson remains determined to secure Brazilian citizenship and the right to vote. He yearns to visit his grandmother, Mantifrèr Donatien, back home and looks forward to January to visit her.",
        "images": [
          "/assets/PHOTOS/world-refugee-day/world-refugee-day-04.jpg",
          "/assets/PHOTOS/world-refugee-day/world-refugee-day-05.jpg",
          "/assets/PHOTOS/world-refugee-day/world-refugee-day-06.jpg"
        ]
      },
      {
        "title": "Gallardo Family",
        "text": "The Gallardo family, like many others, were forced to leave Venezuela due to the ongoing political and economic crisis.\n\nMarco Antonio, 53, and his wife Rita, 40, along with their son Luis Xavier, 15, were among the more than 4.5 million Venezuelans who have left their homeland in search of better opportunities.\n\nAfter a year at the Fraternidade Sem Fronteiras Reception Center in Boa Vista, the family was resettled in Jundiaí, one of the few official Venezuelan refugee communities in Brazil.\nDespite the challenges of adjusting to a new country, the Gallardos have found Jundiaí to be a welcoming and supportive community. They are grateful for the help and kindness they have received from the local residents, but their hearts remain with their family and friends back home.\nThey hope to one day be able to return to Venezuela and rebuild their lives there.",
        "images": [
          "/assets/PHOTOS/world-refugee-day/world-refugee-day-07.jpg",
          "/assets/PHOTOS/world-refugee-day/world-refugee-day-08.jpg",
          "/assets/PHOTOS/world-refugee-day/world-refugee-day-09.jpg",
          "/assets/PHOTOS/world-refugee-day/world-refugee-day-10.jpg",
          "/assets/PHOTOS/world-refugee-day/world-refugee-day-11.jpg"
        ]
      }
    ],
    "coverImage": "/assets/PHOTOS/world-refugee-day/world-refugee-day-01.jpg",
    "images": [
      "/assets/PHOTOS/world-refugee-day/world-refugee-day-01.jpg",
      "/assets/PHOTOS/world-refugee-day/world-refugee-day-02.jpg",
      "/assets/PHOTOS/world-refugee-day/world-refugee-day-03.jpg",
      "/assets/PHOTOS/world-refugee-day/world-refugee-day-04.jpg",
      "/assets/PHOTOS/world-refugee-day/world-refugee-day-05.jpg",
      "/assets/PHOTOS/world-refugee-day/world-refugee-day-06.jpg",
      "/assets/PHOTOS/world-refugee-day/world-refugee-day-07.jpg",
      "/assets/PHOTOS/world-refugee-day/world-refugee-day-08.jpg",
      "/assets/PHOTOS/world-refugee-day/world-refugee-day-09.jpg",
      "/assets/PHOTOS/world-refugee-day/world-refugee-day-10.jpg",
      "/assets/PHOTOS/world-refugee-day/world-refugee-day-11.jpg"
    ]
  },
  {
    "id": "scale",
    "slug": "scale",
    "title": "SCALE",
    "description": "Exploring scale, spaces and people",
    "layout": "grid",
    "coverImage": "/assets/PHOTOS/scale/scale-01.jpg",
    "images": [
      "/assets/PHOTOS/scale/scale-01.jpg",
      "/assets/PHOTOS/scale/scale-02.jpg",
      "/assets/PHOTOS/scale/scale-03.jpg",
      "/assets/PHOTOS/scale/scale-04.jpg",
      "/assets/PHOTOS/scale/scale-05.jpg",
      "/assets/PHOTOS/scale/scale-06.jpg",
      "/assets/PHOTOS/scale/scale-07.jpg",
      "/assets/PHOTOS/scale/scale-08.jpg",
      "/assets/PHOTOS/scale/scale-09.jpg",
      "/assets/PHOTOS/scale/scale-10.jpg",
      "/assets/PHOTOS/scale/scale-11.jpg",
      "/assets/PHOTOS/scale/scale-12.jpg",
      "/assets/PHOTOS/scale/scale-13.jpg"
    ]
  }
];
