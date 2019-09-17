import React from "react";
import "./matchCardStyle.css";

function MatchCards(props) {
  return (
    <div className="MatchCard">
      <div className="img-container" onClick={() => props.clickedCard(props.id)} >

        <img alt={props.name} src={props.image} className="imgStyles"/>
      </div>
    </div>
  );
}

export default MatchCards;
