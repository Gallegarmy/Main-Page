import { merchData } from '@/data/MerchData';
import React from 'react';

import { ProductCard } from './MerchCard';
import { MerchFilters } from './MerchFilters';
import { MerchHero } from './MerchHero';

export const MerchSection = () => {
  return (
    <main className="container mx-auto my-0 mb-20 px-3 pt-3 pb-0">
      <MerchHero />

      <MerchFilters />

      <section className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 sm:justify-items-start sm:gap-4 md:grid-cols-3 lg:gap-5 xl:grid-cols-5">
        {merchData.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </section>
    </main>
  );
};
