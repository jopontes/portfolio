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
    "id": "life-on-train",
    "slug": "life-on-train",
    "title": "LIFE ON TRAIN",
    "description": "Traveling nearly 9000km by train between Beijing and Moscow requires you to settle in and live a life on the train.\nThese are some images I took on this route in 2016.",
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
    "id": "last-journey",
    "slug": "last-journey",
    "title": "LAST JOURNEY",
    "description": "In November '22, I accompanied my uncles Silas and Eldina on their final visit to the indigenous area which they have worked for almost four decades.",
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
    "id": "scale",
    "slug": "scale",
    "title": "SCALE",
    "description": "Exploring scale, spaces and people",
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
  },
  {
    "id": "asia",
    "slug": "asia",
    "title": "ASIA",
    "description": "Pictures taken during a trip across Asia",
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
  }
];
