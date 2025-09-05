import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { communityIconMap } from './Icons';
import { communityResourcesData } from './data';

export const CommunityResources = () => {
  return (
    <div className="flex justify-center w-full px-4">
      <ul className="grid grid-cols-1 justify-items-center lg:max-w-[1200px] md:grid-cols-2 gap-4 md:gap-6 my-24">
        {communityResourcesData.map((element) => {
          const icon: IconProp | undefined = communityIconMap[element.icon];
          const isExternalLink = element.link.startsWith('http');

          return (
            <li key={element.id}>
              <a
                href={element.link}
                target={isExternalLink ? '_blank' : '_self'}
                rel={isExternalLink ? 'noopener noreferrer' : undefined}
                className="border border-white w-full lg:min-w-full lg:w-[550px] min-h-[180px] sm:min-h-[200px] flex flex-col p-4 sm:p-6 md:p-8 cursor-pointer "
              >
                <div className="flex-shrink-0 w-9 h-9  md:w-10 md:h-10 flex items-center justify-center mb-4">
                  {icon && <FontAwesomeIcon icon={icon} className="w-full h-full text-white" />}
                </div>
                <h5 className="text-xl sm:text-2xl font-bold mb-2">{element.title}</h5>
                <p className="text-sm sm:text-base leading-relaxed">{element.description}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
