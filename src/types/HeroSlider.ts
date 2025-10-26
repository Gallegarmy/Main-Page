export interface SlideData {
  id: number;
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface HeroSliderProps {
  slides: SlideData[];
  autoRotateInterval?: number;
  logo?: string;
}
