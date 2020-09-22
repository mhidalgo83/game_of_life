import React, { useEffect, useState, useCallback } from "react";
import produce from "immer";
import "./Cell.css";
import "./Grid.css";
import { create2dArray } from "./utils/createArray";

const Grid = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr(() => {
      let arr = [];
      for (let i = 0; i < 25; i++) {
        arr[i] = [];
        for (let j = 0; j < 25; j++) {
          arr[i].push(0);
        }
      }
      return arr;
    });
  }, []);

  const generateRandomGrid = () => {
    setArr((a) => {
      console.log(a)
      return produce(a, (arrCopy) => {
        for (let i = 0; i < a.length; i++) {
          for (let j = 0; j < a[i].length; j++) {        
            arrCopy[i][j] = Math.round(Math.random());
          }
        }
      });
    });
  };

  const playButton = () => {
    setArr((a) => {
      return produce(a, (arrCopy) => {
        for (let x = 0; x < a.length; x++) {
          for (let y = 0; y < a[x].length; y++) {
            let neighbors = 0;
            if (
              x - 1 >= 0 &&
              x + 1 < a[x].length &&
              y - 1 >= 0 &&
              y + 1 < a[x].length
            ) {
              // 1
              if (a[x - 1][y - 1] === 1) {
                neighbors++;
              }
              // 2
              if (a[x][y - 1] === 1) {
                neighbors++;
              }
              // 3
              if (a[x + 1][y - 1] === 1) {
                neighbors++;
              }
              // 4
              if (a[x - 1][y] === 1) {
                neighbors++;
              }
              // 5
              if (a[x + 1][y] === 1) {
                neighbors++;
              }
              // 6
              if (a[x - 1][y + 1] === 1) {
                neighbors++;
              }
              // 7
              if (a[x][y + 1] === 1) {
                neighbors++;
              }
              // 8
              if (a[x + 1][y + 1] === 1) {
                neighbors++;
              }
              if (neighbors < 2 || neighbors > 3) {
                arrCopy[x][y] = 0;
              } else if (neighbors === 3 && a[x][y] === 0) {
                arrCopy[x][y] = 1;
              }
            }
          }
        }
      });
    });
  };

  return (
    <div>
      <div id="canvas">
        {arr.map((arr1, x) => {
          return arr1.map((subArr, y) => {
            return (
              <>
                <canvas
                  key={`${x}, ${y}`}
                  id={arr[x][y] === 0 ? "" : "filled"}
                  onClick={() => {
                    const newArr = produce(arr, (arrCopy) => {
                      if (arrCopy[x][y] === 0) {
                        arrCopy[x][y] = 1;
                      } else {
                        arrCopy[x][y] = 0;
                      }
                    });
                    setArr(newArr);
                  }}
                  height="18"
                  width="18"
                ></canvas>
              </>
            );
          });
        })}
      </div>
      <div>
        <button onClick={generateRandomGrid}>Generate Random Grid</button>
        <button onClick={playButton}>Play</button>
      </div>
    </div>
  );
};

export default Grid;
