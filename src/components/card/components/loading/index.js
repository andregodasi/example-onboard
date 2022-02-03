import React from "react";
import SkeletonParagraph from "../../../SkeletonParagraph";
import "./styles.css";

function Loading({ ...rest }) {
  return (
    <div {...rest} className="onboard-card-loading__wrapper-card">
      <div className="onboard-card-loading__content">
        <div className="onboard-card-check-container">
          <div className="onboard-card-loading__check skeleton" />
        </div>
        <div className="onboard-card-loading__image-container">
          <div className="onboard-card-loading__image skeleton" />
        </div>
        <SkeletonParagraph loading={true} rows={2} width="100%" />
      </div>
      <div className="onboard-card-loading__actions-container">
        <div className="onboard-card-loading__btn skeleton" />
        <div className="onboard-card-loading__see-training skeleton" />
      </div>
    </div>
  );
}

export default Loading;
