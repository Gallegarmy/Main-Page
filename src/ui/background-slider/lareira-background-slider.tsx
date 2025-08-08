import React, { useState, useEffect } from "react";
import "./background-slider.styles.css";

const images = [
  "/assets/lareiraConfImg/lareira1.jpg",
  "/assets/lareiraConfImg/lareira1.jpg",
  "/assets/lareiraConfImg/lareira3.jpg",
  "/assets/lareiraConfImg/lareira4.jpg",
  "/assets/lareiraConfImg/lareira5.jpg",
  "/assets/lareiraConfImg/lareira6.jpg",
  "/assets/lareiraConfImg/lareira7.jpg",
]; //TODO: put it in a new constants file

interface BackgroundSliderProps {
  height?: string;
}

export const BackgroundSlider: React.FC<BackgroundSliderProps> = ({
  height,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="background-slider"
      style={{
        height: `${height ?? "100%"}`,
      }}
    >
      {images.map((image, index) => (
        <div
          key={image}
          className={`background-image ${
            index === currentImageIndex ? "active" : ""
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};
