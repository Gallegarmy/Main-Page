import { timelineData } from '@/data/TimelineGridData';
import { TimelineCity } from '@/types/Timeline';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export const TimelineGrid = () => {
  return (
    <div className="mb-20">
      {timelineData.map((city: TimelineCity) => {
        if (!city?.timeline?.length) return null;

        return (
          <section key={city.id} className="px-3" aria-labelledby={`city-${city.id}`}>
            <div className="mx-0 my-8 flex items-baseline">
              <FontAwesomeIcon icon={faLocationDot} className="mr-3 h-6 w-6" />
              <h2 id={`city-${city.id}`} className="m-0 text-2xl font-bold text-white">
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
                  <a
                    href={item.cloudUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View full photo gallery for ${city.name} ${item.year}`}
                    className="flex flex-col transition-opacity hover:opacity-80"
                  >
                    <Image
                      className="mb-2 h-full w-full object-cover lg:w-96"
                      src={item.image}
                      alt={`${city.name} event in ${item.year}`}
                      width={384}
                      height={384}
                      sizes="(max-width: 1024px) 100vw, 384px"
                    />
                    <span className="text-xl font-bold">{item.year}</span>
                  </a>
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
