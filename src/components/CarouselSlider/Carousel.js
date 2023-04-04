import React, { useState } from "react";

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = items.length - 1;

  const nextSlide = () => {
    setActiveIndex(activeIndex === lastIndex ? 0 : activeIndex + 1);
  };

  const prevSlide = () => {
    setActiveIndex(activeIndex === 0 ? lastIndex : activeIndex - 1);
  };

  return (
    <div className="carousel">
      <button
        onClick={prevSlide}
        className="carousel__button carousel__button--prev"
      >
        Prev
      </button>
      <div className="carousel__content">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel__item ${
              index === activeIndex ? "active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="carousel__button carousel__button--next"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
