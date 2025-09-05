import Image from 'next/image';
import React from 'react';

import { friendCommunitiesData } from './data';

export const FriendCommunities = () => {
  return (
    <section className="flex flex-col justify-center px-4 py-16 bg-black">
      <h2 className="text-center text-3xl font-bold text-white mb-12">Friend Communities</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {friendCommunitiesData.map((community) => {
          const isExternalLink = community.websiteUrl.startsWith('http');

          return (
            <article key={community.id} className="w-full sm:w-80 lg:w-64">
              <a
                href={community.websiteUrl}
                target={isExternalLink ? '_blank' : '_self'}
                rel={isExternalLink ? 'noopener noreferrer' : undefined}
                className="block bg-[#ffffff1a] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 relative">
                      <Image
                        src={community.logoPath}
                        alt={`${community.name} logo`}
                        fill
                        sizes="80px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-3">{community.name}</h3>
                  <p className="text-gray-300 text-sm text-center leading-relaxed flex-1">{community.description}</p>
                </div>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};
