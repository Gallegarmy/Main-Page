import { useTranslation } from "react-i18next";
import Card from "../card";
import "./cards-grid.styles.css";

const CardsGrid = () => {
  const { t } = useTranslation();

  return (
    <div className="cards-grid">
      <Card
        title="#adminCañas"
        description={() => t("common.adminCanasDescription")}
        image="faBeer"
        link="https://www.eventbrite.com/e/admin-canas-tickets-1067271671299"
      />
      <Card
        title="Github"
        description={() => t("common.githubDescription")}
        image="faGithub"
        link="https://github.com/Gallegarmy"
      />
      <Card
        title="Talleres"
        description={() => t("common.talleresDescription")}
        image="faHammer"
        link="#"
      />
      <Card
        title="Timeline"
        description={() => t("common.timelineDescription")}
        image="faClock"
        link="#"
      />
    </div>
  );
};

export default CardsGrid;
