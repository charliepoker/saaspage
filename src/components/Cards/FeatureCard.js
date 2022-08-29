import React from "react";
import "./FeatureCard.css";

function FeatureCard({img, title, description}) {
  return (
    <div className="lamp__card">
      <img src={img} alt="" className="lamp__card__image" />
      <div className="lamp__card__text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
