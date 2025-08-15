import { useTranslation } from "react-i18next";

import { BackgroundSlider } from "../background-slider/lareira-background-slider";

import "./lareiraconf.styles.css";

const LareiraConf = () => {
  const { t } = useTranslation();

  return (
    <div className="LareiraConfContainer">
      <BackgroundSlider height="40vh" />

      <img
        src={"/assets/lareiraConfImg/LareiraLogo.png"}
        alt="sysArmyGalicia"
        height={250}
      />
      <p className="subtitle">{t("common.lareiraConf")}</p>
      <a
        href="http://www.lareiraconf.es"
        target="_blank"
        rel="noopener noreferrer"
        className="subtitle"
      >
        <div className="lareiraButton">{t("common.lareiraLink")}</div>
      </a>
    </div>
  );
};

export default LareiraConf;
