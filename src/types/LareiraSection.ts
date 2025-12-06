export interface LareiraImage {
  id: number;
  src: string;
  alt: string;
}

export interface LareiraSectionData {
  logoImage: string;
  name: string;
  ctaLink: string;
  images: LareiraImage[];
}

export interface LareiraSectionProps {
  data: LareiraSectionData;
  autoRotateInterval?: number;
}
