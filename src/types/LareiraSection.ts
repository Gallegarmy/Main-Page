export interface LareiraImage {
  id: number;
  src: string;
  alt: string;
}

export interface LareiraSectionData {
  logoImage: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  images: LareiraImage[];
}

export interface LareiraSectionProps {
  data: LareiraSectionData;
  autoRotateInterval?: number;
}
