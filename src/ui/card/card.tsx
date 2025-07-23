import "./card.styles.css";
import { renderImage } from "./card.utils";

interface CardProps {
  title: string;
  description: string | (() => string);
  image: string;
  link: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image = "",
  link = "",
}) => {
  const descriptionText =
    typeof description === "function" ? description() : description;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="card">
      {renderImage(image, title)}
      <h3 className="title">{title}</h3>
      <p>{descriptionText}</p>
    </a>
  );
};

export default Card;
