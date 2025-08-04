import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./friend-communities.styles.css";

const FriendCommunities: React.FC = () => {
  const { t } = useTranslation();
  const [gpulHovered, setGpulHovered] = useState(false);
  const [pythonHovered, setPythonHovered] = useState(false);
  const [corunaWtfHovered, setCorunaWtfHovered] = useState(false);

  return (
    <div className="friend-communities-container">
      <h2 className="friend-communities-title">
        {t("common.friendCommunities")}
      </h2>
      <div className="friend-communities-grid">
        <button
          className="community-item"
          onMouseEnter={() => setCorunaWtfHovered(true)}
          onMouseLeave={() => setCorunaWtfHovered(false)}
          type="button"
          aria-label="Coruña WTF logo"
        >
          <img
            src={
              corunaWtfHovered
                ? "/assets/communities/corunawtf_reverse.svg"
                : "/assets/communities/corunawtf.svg"
            }
            alt="Coruña WTF"
          />
        </button>
        <button
          className="community-item"
          onMouseEnter={() => setGpulHovered(true)}
          onMouseLeave={() => setGpulHovered(false)}
          type="button"
          aria-label="GPUL logo"
        >
          <img
            src={
              gpulHovered
                ? "/assets/communities/gpulColor.svg"
                : "/assets/communities/gpul.svg"
            }
            alt="GPUL"
          />
        </button>
        <button
          className="community-item"
          onMouseEnter={() => setPythonHovered(true)}
          onMouseLeave={() => setPythonHovered(false)}
          type="button"
          aria-label="Python Coruña logo"
        >
          <img
            src={
              pythonHovered
                ? "/assets/communities/logo_python_coruna_color.svg"
                : "/assets/communities/logo_python_coruna.svg"
            }
            alt="Python Coruña"
          />
        </button>
      </div>
    </div>
  );
};

export default FriendCommunities;
