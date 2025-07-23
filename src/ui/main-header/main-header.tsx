import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBluesky,
  faDiscord,
  faMeetup,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { BackgroundSlider } from "../background-slider/background-slider";
import "./main-header.styles.css";

const MainHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <BackgroundSlider />
      <img
        src={"/assets/sysarmyGalicia.png"}
        alt="sysArmyGalicia"
        height={250}
      />
      <h1>O soporte dos que dan soporte</h1>

      <p className="subtitle">{t("common.welcome")}</p>

      <div className="social-links">
        <a
          href="https://t.me/Gallegarmy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTelegram} style={{ height: "32px" }} />
        </a>
        <a
          href="https://discord.gg/HxMZgWPc7v"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} style={{ height: "32px" }} />
        </a>
        <a
          href="https://www.meetup.com/es-ES/sysarmy-galicia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faMeetup} style={{ height: "32px" }} />
        </a>
        <a
          href="https://bsky.app/profile/sysarmygalicia.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faBluesky} style={{ height: "32px" }} />
        </a>
      </div>
    </div>
  );
};

export default MainHeader;
