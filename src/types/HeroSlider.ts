export interface SlideDataStatic {
  id: number;
  image: string;
  ctaLink: string;
  slideKey: 'slide1' | 'slide2' | 'slide3';
}

export interface HeroSliderProps {
  slides: SlideDataStatic[];
  autoRotateInterval?: number;
  logo?: string;
}
