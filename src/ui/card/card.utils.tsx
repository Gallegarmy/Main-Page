import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer, faHammer, faClock } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const renderImage = (image: string, title: string) => {
  if (image === "faBeer") {
    return <FontAwesomeIcon icon={faBeer} size="3x" />;
  }
  if (image === "faGithub") {
    return <FontAwesomeIcon icon={faGithub} size="3x" />;
  }
  if (image === "faHammer") {
    return <FontAwesomeIcon icon={faHammer} size="3x" />;
  }
  if (image === "faClock"){
    return <FontAwesomeIcon icon={faClock} size="3x" />;
  }
  return <img src={image} alt={title} />;
};
