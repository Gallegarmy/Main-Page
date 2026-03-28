'use client';

import { Merch } from '@/types/Merch';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface ProductCardProps {
  product: Merch;
}

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useTranslation();

  return (
    <article className="max-w-72 overflow-hidden border">
      <div className="relative h-36 w-full">
        <Image src={product.image} alt={product.name} fill className="object-contain" />
      </div>
      <div className="flex flex-col gap-2 px-5 py-3">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-500">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold">{product.price}</span>
          <Link className="border px-4 py-1.5" href={product.link} target="_blank" rel="noopener noreferrer">
            {t('merch.buyNow')}
          </Link>
        </div>
      </div>
    </article>
  );
}
