export interface SlideDataStatic {
  id: number;
  image: string;
  ctaLink: string;
  slideKey: 'welcome' | 'events' | 'resources';
}

export interface HeroSliderProps {
  slides: SlideDataStatic[];
  autoRotateInterval?: number;
  logo?: string;
}
