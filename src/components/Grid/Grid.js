import React from "react";
import "./gridStyles.css";

function Grid(props) {
  return <div className="grid-1 dl-container content-center">{props.children}</div>;
}

export default Grid;
