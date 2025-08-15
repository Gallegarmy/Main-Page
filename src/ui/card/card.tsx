import { ReactNode } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { renderImage } from "./card.utils";

import "./card.styles.css";
interface CardProps {
  title: string;
  description?: string;
  image: string;
  link: string;
  className?: string;
  children?: ReactNode;
  titleAs?: keyof JSX.IntrinsicElements;
}

export function Card({
  title,
  description,
  image,
  link,
  className,
  children,
  titleAs: TitleTag = "h3",
}: CardProps) {
  const isExternal = /^https?:\/\//i.test(link);

  const content = (
    <>
      {renderImage(image, title)}
      {title ? <TitleTag className="title">{title}</TitleTag> : null}
      {description ? <p>{description}</p> : null}
      {children}
    </>
  );

  const classes = clsx("card", className);

  if (!link) {
    return (
      <div className={classes} aria-label={title}>
        {content}
      </div>
    );
  }

  return isExternal ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      aria-label={title}
    >
      {content}
    </a>
  ) : (
    <Link to={link} className={classes} aria-label={title}>
      {content}
    </Link>
  );
}

export default Card;
