'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageSelector } from '../LanguageSelector';

export const Header = () => {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto my-0 flex items-center justify-between p-3">
      <Link href="/">
        <Image
          height={100}
          width={100}
          src="/assets/communities/sysarmy-galicia/sysarmy-galicia-logo.png"
          alt={t('header.logo')}
          className="w-16 md:w-24"
        />
      </Link>

      <div className="m-2 md:m-4 md:text-base">
        <Link
          href="/merch"
          className="text-md border px-2.5 py-1.5 text-white transition-colors duration-300 hover:text-gray-400 xl:px-4 xl:text-lg"
        >
          Merch
        </Link>
      </div>
      <LanguageSelector />
    </div>
  );
};

export default Header;
