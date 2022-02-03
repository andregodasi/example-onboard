import React from "react";

import "./styles.css";
import Check from "./components/check";

function Card({
  title,
  description,
  linkAcess,
  linkTrainig,
  image,
  type,
  checked,
  ...rest
}) {
  return (
    <div {...rest} className="onboard-card__wrapper-card">
      <div className="onboard-card__content">
        <div className="onboard-card-check-container">
          <Check checked={checked} />
        </div>
        <figure className="onboard-card__image-container">
          <img src={image} alt={title} />
        </figure>
        <h4 className="onboard-card__title">{title}</h4>
        <p className="onboard-card__description">{description}</p>
      </div>
      <div className="onboard-card__actions-container">
        <a href={linkAcess} className="btn btn-orange">
          Access
        </a>
        <a href={linkTrainig} className="onboard-card__see-training">
          See training
        </a>
      </div>
    </div>
  );
}

export default Card;
