import React from "react";

const Card = (props) => {
  const { cardTitle, cardImage, cardDesc, cardButton, children } = props;

  return (
    <div className="card">
      <div className="card__header">
        <h2>{cardTitle}</h2>
      </div>
      <div className="card__body">
        {cardImage && (
          <div className="card__body--image">
            <img src={cardImage} alt={cardTitle} />
          </div>
        )}
        <div className="card__body--content"></div>
        {children}
      </div>
      <div className="card__footer">{cardDesc && <p>{cardDesc}</p>}</div>
    </div>
  );
};

export default Card;
