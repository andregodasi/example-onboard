import React from "react";
import Card from "../card";
import Loading from "../card/components/loading";
import "./styles.css";

function Steps({ onboard, handleCardClick }) {
  return (
    <div className="steps">
      <div className="steps__contianer container">
        <div className="onboard-onboard_container">
          {!onboard.loading &&
            onboard.steps &&
            onboard.steps.map((step) => (
              <Card
                key={step.id}
                onClick={() => handleCardClick(step.id)}
                {...step}
              />
            ))}
          {onboard.loading && (
            <>
              <Loading key="onboard-card-loading-1" />
              <Loading key="onboard-card-loading-2" />
              <Loading key="onboard-card-loading-3" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Steps;
