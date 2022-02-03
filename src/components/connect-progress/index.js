import React from "react";
import LogoPokeball from "../../assets/images/pokeball.png";
import { Container } from "./styles.js";

function ConnectProgress({ percent, loading }) {
  return (
    <Container percent={percent} loading={loading ? "true" : ""}>
      <div className="connect-progress__container">
        <svg viewBox="0 0 36 36" className="connect-progress__circular-chart">
          <path
            className="connect-progress__circle"
            style={{
              transition: "all 0.3s",
            }}
            d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <img className="connect-progress__img" src={LogoPokeball} alt="logo" />
      </div>
      <span
        className={`connect-progress__text ${
          !!loading ? "connect-progress__text--loading skeleton" : ""
        }`}
      >
        {percent}%
      </span>
    </Container>
  );
}

export default ConnectProgress;
