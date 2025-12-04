'use client';

import { friendCommunitiesData } from '@/data/FriendCommunitiesData';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const FriendCommunities = () => {
  const { t } = useTranslation('common');

  return (
    <section className="flex flex-col justify-center bg-black px-4 py-16">
      <h2 className="mb-12 text-center text-3xl font-bold text-white">{t('home.communities.title')}</h2>
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6">
        {friendCommunitiesData.map((community) => {
          const isExternalLink = community.websiteUrl.startsWith('http');

          return (
            <article key={community.id} className="w-full sm:w-80 lg:w-64">
              <a
                href={community.websiteUrl}
                target={isExternalLink ? '_blank' : '_self'}
                rel={isExternalLink ? 'noopener noreferrer' : undefined}
                className="block h-full overflow-hidden rounded-lg bg-[#ffffff1a] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-full flex-col p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="relative h-20 w-20">
                      <Image
                        src={community.logoPath}
                        alt={`${community.name} logo`}
                        fill
                        sizes="80px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="mb-3 text-center text-xl font-bold text-white">
                    {t(`home.communities.${community.name}.title`)}
                  </h3>
                  <p className="flex-1 text-center text-sm leading-relaxed text-gray-300">
                    {t(`home.communities.${community.name}.description`)}
                  </p>
                </div>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};
