import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { socialMedia } from "./data";

import s from "./footer.module.css";
import { iconMap } from "./icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer} role="contentinfo">
      <div className={s.description}>
        sysarmy {year} -{" "}
        <a href="mailto:root@sysarmy.com" className={s.email}>
          root@sysarmy.com
        </a>
      </div>
      <nav aria-label="Social media">
        <ul className={s.socialLinks}>
          {socialMedia.map(({ id, name, url }) => {
            const icon: IconProp | undefined = iconMap[name.toLowerCase()];

            if (!icon) return null;

            return (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                >
                  <FontAwesomeIcon icon={icon} className={s.icon} />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};
