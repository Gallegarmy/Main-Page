import { useTranslation } from "react-i18next";
import Card from "../card";
import "./timeline-grid.styles.css";

const TimelineGrid = () => {
  const { t } = useTranslation();

  return (
    <>  
      <div className="text-container">
      <h2 className="timeline-title">
          A Coruña
      </h2>    
      </div>
      <div className="timeline-grid">
        <Card
          title="2025"
          image="faBeer"
          link="https://cloud.sysarmy.galicia.dev/apps/photos/public/c7hGm8E9Mz9x02w1FOVxNpZD4LD85Rvl"
        />
        <Card
          title="2024"
          image="faBeer"
          link="https://cloud.sysarmy.galicia.dev/apps/photos/public/3TtB5dfdcB1ZX9FWBol7At9LZzcsZsnH"
        />
      </div>
      <div className="text-container">
        <h2 className="timeline-title">
            Vigo
        </h2>  
      </div>
      <div className="timeline-grid">
      <Card
          title="2025"
          image="faBeer"
          link="https://cloud.sysarmy.galicia.dev/apps/photos/public/sw6tEvMmlvC4ORgeM2kqIMQXJO1rdBRz"
        />
      </div>
    </>
  );
};

export default TimelineGrid;
