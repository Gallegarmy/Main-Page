import React from "react";
import { Link } from "react-router-dom";

import "./header-styles.css";

export const Header = () => {
  return (
    <div className="headerContainer">
      <Link to="/">
        <img
          src={"/assets/sysarmyGalicia.png"}
          alt="Sysarmy Galicia Logo"
          className="sysarmyLogo"
        />
      </Link>
      <h1>Timeline</h1>
    </div>
  );
};
