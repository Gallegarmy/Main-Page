'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { HeroSliderProps } from '../../types/HeroSlider';

export function HeroSlider({ slides, autoRotateInterval = 5000, logo }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoRotateInterval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!slides.length) return null;

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-80" />
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        {logo && (
          <div className="mb-8">
            <Image src={logo} alt="Community Logo" className="w-52 h-auto" width={300} height={300} />
          </div>
        )}

        <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          {currentSlideData.title}
        </h1>

        <p className="mb-8 max-w-2xl text-lg md:text-xl lg:text-2xl">{currentSlideData.description}</p>

        <Link
          href={currentSlideData.ctaLink}
          className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
        >
          {currentSlideData.ctaText}
        </Link>
      </div>

      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
