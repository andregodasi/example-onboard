import React from "react";
import "./styles.css";

export default function TitleConnect({ title }) {
  return (
    <div className="title-connect">
      <h1 className="title-connect__title">{title}</h1>
    </div>
  );
}
