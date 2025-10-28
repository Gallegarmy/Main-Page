import { TimelineCity } from '@/types/Timeline';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import { timelineData } from './data';

export const TimelineGrid = () => {
  return (
    <div className="mb-8">
      {timelineData.map((city: TimelineCity) => {
        if (!city?.timeline?.length) return null;

        return (
          <section key={city.id} className="px-3" aria-labelledby={`city-${city.id}`}>
            <div className="mx-0 my-8 flex items-baseline">
              <FontAwesomeIcon icon={faLocationDot} className="mr-3 w-3" />
              <h2 id={`city-${city.id}`} className="m-0 text-xl font-bold text-white">
                {city.name}
              </h2>
            </div>

            <ul
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-8"
              role="list"
              aria-label={`${city.name} timeline events`}
            >
              {city.timeline.map((item) => (
                <li
                  key={item.id}
                  className="flex w-fit flex-col justify-between justify-self-center rounded-xs border border-white p-3"
                >
                  <Image
                    className="mb-2 h-full w-full object-cover lg:w-96"
                    src={item.image}
                    alt={`${city.name} event in ${item.month} ${item.year}`}
                    width={500}
                    height={500}
                  />
                  <span className="font-bold">
                    {item.month}, {item.year}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
};

export default TimelineGrid;
