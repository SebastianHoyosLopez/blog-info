import React from "react";
import "./image.css";

const Image = ({description, url}) => {
  return (
    <div className="image-container">
      <div className="container-text">
        <h2>{description}</h2>
      </div>
      <div className="container-img">
        <img src={url} alt="image head" />
      </div>
    </div>
  );
};

export default Image;


