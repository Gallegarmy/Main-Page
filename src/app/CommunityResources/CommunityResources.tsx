import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { communityIconMap } from './Icons';
import { communityResourcesData } from './data';

export const CommunityResources = () => {
  return (
    <div className="flex w-full justify-center px-4">
      <ul className="my-24 grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 md:gap-6 lg:max-w-[1200px]">
        {communityResourcesData.map((element) => {
          const icon: IconProp | undefined = communityIconMap[element.icon];
          const isExternalLink = element.link.startsWith('http');

          return (
            <li key={element.id}>
              <a
                href={element.link}
                target={isExternalLink ? '_blank' : '_self'}
                rel={isExternalLink ? 'noopener noreferrer' : undefined}
                className="flex min-h-[180px] w-full cursor-pointer flex-col border border-white p-4 sm:min-h-[200px] sm:p-6 md:p-8 lg:w-[550px] lg:min-w-full"
              >
                <div className="mb-4 flex h-9 w-9 flex-shrink-0 items-center justify-center md:h-10 md:w-10">
                  {icon && <FontAwesomeIcon icon={icon} className="h-full w-full text-white" />}
                </div>
                <h5 className="mb-2 text-xl font-bold sm:text-2xl">{element.title}</h5>
                <p className="text-sm leading-relaxed sm:text-base">{element.description}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
