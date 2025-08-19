import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

import { iconMap } from './Icons';
import { socialMedia } from './data';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="border-t-2 white flex flex-col items-center justify-center h-40">
      <div className="text-base  m-2 md:m-4">
        <Link href="/">Sysarmy {year}</Link> -{' '}
        <a href="mailto:root@sysarmy.com" className="text-white">
          root@sysarmy.com
        </a>
      </div>
      <nav aria-label="Social media" className="mt-3">
        <ul className="flex flex-row gap-4 md:gap-7 items-center">
          {socialMedia.map(({ id, name, url }) => {
            const icon: IconProp | undefined = iconMap[name.toLowerCase()];

            if (!icon) return null;

            return (
              <li key={id}>
                <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                  <FontAwesomeIcon icon={icon} className="w-5 md:w-8" />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};
