import React from "react";
import "./title.css";

function Title(props) {
  return (

    <div className="title">
      <h1>Mythical Creature Memory Game</h1>
      <span>Score: {props.score} High Score: {props.highscore}</span>
    </div>
  
  );


}

export default Title;
