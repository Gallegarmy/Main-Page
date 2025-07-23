import React, { useState, useEffect } from "react";
import "./background-slider.styles.css";

const images = [
  "/assets/adminCanasImg/878-IMG_20250105_122304_507.jpg",
  "/assets/adminCanasImg/865-20250208_004932.jpg",
  "/assets/adminCanasImg/860-IMG_20250307_233102_532.jpg",
  "/assets/adminCanasImg/646-IMG_20250413_141421_952.jpg",
  "/assets/adminCanasImg/637-20250411_234329.jpg",
  "/assets/adminCanasImg/20240406_010147.jpeg",
  "/assets/adminCanasImg/20240301_203617.jpeg",
  "/assets/adminCanasImg/20240405_202401.jpeg",
  "/assets/adminCanasImg/20240430_212124.jpeg",
  "/assets/adminCanasImg/20240607_210750.jpeg",
  "/assets/adminCanasImg/20241004_205628.jpeg",
  "/assets/adminCanasImg/20241004_225409.jpeg",
  "/assets/adminCanasImg/20241109_003547.jpeg",
]; //TODO: put it in a new constants file

export const BackgroundSlider: React.FC = () => {
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
    <div className="background-slider">
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
