'use client';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { iconMap } from './Icons';
import { socialMedia } from './data';

export const Footer = () => {
  const { t } = useTranslation('common');

  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="white flex h-40 flex-col items-center justify-center border-t text-center">
      <div className="m-2 text-sm md:m-4 md:text-base">
        <Link href="/">Sysarmy {year}</Link> -{' '}
        <Link href="/code-of-conduct" className="text-white transition-colors duration-300 hover:text-gray-400">
          {t('footer.codeOfConduct')}
        </Link>{' '}
        -{' '}
        <a href="mailto:root@sysarmy.com" className="text-white">
          {t('footer.email')}
        </a>
      </div>
      <nav aria-label="Social media" className="mt-3">
        <ul className="flex flex-row items-center gap-4 md:gap-7">
          {socialMedia.map(({ id, name, url }) => {
            const icon: IconProp | undefined = iconMap[name.toLowerCase()];

            if (!icon) return null;

            return (
              <li key={id}>
                <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                  <FontAwesomeIcon
                    icon={icon}
                    className="w-4 transition-colors duration-300 hover:text-gray-400 md:w-5"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};
