export interface SubService {
  name: string;
  price: string;
  desc: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  startPrice: string;
  icon: string;
  highlights: string[];
  subServices: SubService[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  priceTableNote?: string;
  heroImage: string;
  metaTitle: string;
  metaDesc: string;
  aioSummary: string;
  warranty: string;
}

export interface AreaDetail {
  slug: string;
  name: string;
  shortName: string;
  state: "Kuala Lumpur" | "Selangor";
  lat: number;
  lng: number;
  population: string;
  landmarks: string[];
  description: string;
  metaTitle: string;
  metaDesc: string;
  faqs: { q: string; a: string }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  coverImage: string;
}
