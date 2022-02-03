import React from "react";
import CheckSVG from "../../../../assets/images/check.svg";
import "./styles.css";

function Check({ checked }) {
  return (
    <div
      className={`onboard-card__check onboard-card__check${
        checked ? "--checked" : ""
      }`}
    >
      {checked && <img src={CheckSVG} alt="checked" />}
    </div>
  );
}

export default Check;
