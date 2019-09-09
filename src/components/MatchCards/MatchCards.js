import React from "react";
import "./matchCardStyle.css";

function MatchCards(props) {
  return (
    <div className="MatchCard">
      <div className="img-container">
      <h1>
        <strong>Name:</strong> {props.name}
      </h1>
        <img alt={props.name} src={props.image} className="imgStyles" />
      </div>
    </div>
  );
}

export default MatchCards;
