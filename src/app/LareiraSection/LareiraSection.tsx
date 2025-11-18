'use client';

import { LareiraSectionProps } from '@/types/LareiraSection';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function LareiraSection({ data, autoRotateInterval = 4000 }: LareiraSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (data.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % data.images.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [data.images.length, autoRotateInterval]);

  return (
    <section className="relative min-h-[40vh] w-full overflow-hidden" aria-label="LaReira Conference Section">
      <div className="absolute inset-0">
        {data.images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
              quality={85}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black opacity-80" />
      </div>

      <div className="relative z-10 flex h-full min-h-[30vh] flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-7 flex h-full justify-center">
            <Image
              src={data.logoImage}
              alt={data.title}
              width={300}
              height={50}
              className="object-cover"
              quality={85}
            />
          </div>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed md:text-lg lg:text-xl">{data.description}</p>
          <Link
            href={data.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-white bg-black px-4 py-2 font-semibold md:px-8 md:py-4 md:text-lg"
          >
            {data.ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
