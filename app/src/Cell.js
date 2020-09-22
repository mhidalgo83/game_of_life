import React, { useState, useRef } from "react";
import "./Cell.css";

const Cell = (props) => {
  const [isAlive, setIsAlive] = useState(false);

  const handleClick = e => {
    e.preventDefault()
    setIsAlive(!isAlive)
  }
  console.log(isAlive)
  return (
    <>
      <canvas id={!isAlive ? "" : "filled"} onClick={handleClick} x={props.x} y={props.y} width="18" height="18"></canvas>
    </>
  );
};

export default Cell;
