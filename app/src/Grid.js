import React, { useRef, useEffect, useState } from "react";
import Cell from "./Cell";
import "./Grid.css";
import { create2dArray } from "./utils/createArray";


const Grid = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr(create2dArray(25, 25));
  }, []);

  return (
    <div id="canvas">
      {arr.map((arr1, i) => {
       return arr1.map(subArr => {
         return <Cell key={subArr} x={subArr} y={arr1[i]}/>
       })
      })}
    </div>
  );
};

export default Grid;
