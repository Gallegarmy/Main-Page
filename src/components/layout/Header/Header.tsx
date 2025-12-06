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
      <LanguageSelector />
    </div>
  );
};

export default Header;
