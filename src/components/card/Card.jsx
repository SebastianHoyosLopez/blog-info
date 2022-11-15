import React from "react";
import "./card.css";

const Card = ({ code, variant, imageUrl, name, title, shortDescription }) => {
  let cardTemplate = <></>;
  switch (variant) {
    case "card-link":
      cardTemplate = (
        <a href={`/post?code=${code}`} className="card">
          <div>
            <img src={imageUrl} alt="image" />
          </div>
          <div className="card-container">
            <h4>
              <b>{title}</b>
            </h4>
            <p>{shortDescription}</p>
          </div>
        </a>
      );
      break;

    case "blog":
      cardTemplate = (
        <a href={`/post?code=${code}&variant=detail`} className="card">
          <div>
            <img src={imageUrl} alt="image" />
          </div>
          <div className="card-container">
            <h4>
              <b>{name}</b>
            </h4>
            <p>{shortDescription}</p>
          </div>
        </a>
      );
      break;
  }

  return cardTemplate;
};

export default Card;
