import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { BackgroundSlider } from "../background-slider/lareira-background-slider";
import "./lareiraconf.styles.css";

const LareiraConf = () => {
  const { t } = useTranslation();

  return (
    <div className="LareiraConfContainer">
      <BackgroundSlider height="40vh" />

      <p className="subtitle">{t("common.welcome")}</p>

      <div className="social-links">
        <a
          href="https://t.me/Gallegarmy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTelegram} style={{ height: "32px" }} />
        </a>
      </div>
    </div>
  );
};

export default LareiraConf;
