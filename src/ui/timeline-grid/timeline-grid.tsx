import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Card from "../card";
import { timelineData } from "./data";
import { CityTimeline } from "../../types";

import s from "./timeline-grid.module.css";

const TimelineGrid = () => {
  return (
    <div className={s.timelineGrid}>
      {timelineData.map((city: CityTimeline) => {
        if (!city?.timeline?.length) return null;

        return (
          <section
            key={city.id}
            className={s.citySection}
            aria-labelledby={`city-${city.id}`}
          >
            <div className={s.cityHeader}>
              <FontAwesomeIcon icon={faLocationDot} className={s.icon} />
              <h2 id={`city-${city.id}`} className={s.title}>
                {city.name}
              </h2>
            </div>

            <ul className={s.cards}>
              {city.timeline.map((item) => (
                <li key={`${city.id}-${item.year}`} className={s.cardItem}>
                  <Card
                    title={String(item.year)}
                    image={item.image}
                    link={item.link}
                    className={s.card}
                  />
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
