import React from 'react';

import { communityResourcesData } from './data';

export const CommunityResources = () => {
  return (
    <div className="border-2 border-green-300 w-full">
      <ul className="border-2 border-white grid grid-cols-1 md:grid-cols-2 gap-6 my-9">
        {communityResourcesData.map((element) => (
          <li
            key={element.id}
            className="border border-white w-full md:w-min-[360px] md:max-w-[600px] h-[250px] flex flex-col gap-5 p-8"
          >
            <div className="border-2 border-white w-12 h-12 ">Icon</div>
            <h5 className="border-2 border-white text-2xl font-bold">{element.title}</h5>
            <p className="border-2 border-white text-base">{element.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
