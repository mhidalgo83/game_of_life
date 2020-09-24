import React, { useEffect, useState } from "react";
import produce from "immer";
import Dropdown from "./Dropdown";
import { create2dArray } from "./utils/createArray";

const Grid = (props) => {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState(() => {
    return create2dArray(30, 30, 0);
  });

  useEffect(() => {
    if (props.isRunning) {
      const interval = setInterval(() => {
        checkGrid();
        setCount((c) => (c += 1));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [props.isRunning]);

  const generateRandomGrid = () => {
    setArr((a) => {
      return produce(a, (arrCopy) => {
        for (let i = 0; i < a.length; i++) {
          for (let j = 0; j < a[i].length; j++) {
            arrCopy[i][j] = Math.round(Math.random());
          }
        }
      });
    });
  };

  const checkGrid = () => {
    setArr((a) => {
      return produce(a, (arrCopy) => {
        for (let x = 0; x < a.length; x++) {
          for (let y = 0; y < a[x].length; y++) {
            let neighbors = 0;
            // if (
            //   x - 1 >= 0 &&
            //   x + 1 < a[x].length &&
            //   y - 1 >= 0 &&
            //   y + 1 < a[x].length
            // ) {
            // 1
            if (
              a[(x + a.length - 1) % a.length][
                (y + a.length - 1) % a.length
              ] === 1
            ) {
              neighbors++;
            }
            // 2
            if (a[x][(y + a.length - 1) % a.length] === 1) {
              neighbors++;
            }
            // 3
            if (
              a[(x + a.length + 1) % a.length][
                (y + a.length - 1) % a.length
              ] === 1
            ) {
              neighbors++;
            }
            // 4
            if (a[(x + a.length - 1) % a.length][y] === 1) {
              neighbors++;
            }
            // 5
            if (a[(x + a.length + 1) % a.length][y] === 1) {
              neighbors++;
            }
            // 6
            if (
              a[(x + a.length - 1) % a.length][
                (y + a.length + 1) % a.length
              ] === 1
            ) {
              neighbors++;
            }
            // 7
            if (a[x][(y + a.length + 1) % a.length] === 1) {
              neighbors++;
            }
            // 8
            if (
              a[(x + a.length + 1) % a.length][
                (y + a.length + 1) % a.length
              ] === 1
            ) {
              neighbors++;
            }
            if (neighbors < 2 || neighbors > 3) {
              arrCopy[x][y] = 0;
            } else if (neighbors === 3 && a[x][y] === 0) {
              arrCopy[x][y] = 1;
            }
            // }
          }
        }
      });
    });
  };

  const startSim = () => {
    props.setIsRunning(!props.isRunning);
  };

  const playButton = () => {
    checkGrid();
    setCount((c) => (c += 1));
  };

  const clear = () => {
    setArr((a) => {
      return produce(a, (arrCopy) => {
        for (let i = 0; i < a.length; i++) {
          for (let j = 0; j < a[i].length; j++) {
            arrCopy[i][j] = 0;
          }
        }
      });
    });
  };

  const clearButton = () => {
    if (!props.isRunning) {
      clear();
      setCount(0);
    }
  };

  return (
    <div>
      <h2>Generation #: {count}</h2>
      <div id="canvas">
        {arr.map((arr1, x) => {
          return arr1.map((subArr, y) => {
            return (
              <div
                className="cell"
                key={`${x}, ${y}`}
                id={`${arr[x][y] === 0 ? `${x},${y}` : "filled"}`}
                onClick={
                  // checks to see if simulation is running
                  // if it is, return
                  props.isRunning
                    ? () => {
                        return;
                      }
                    : // if not, change state of cell
                      () => {
                        const newArr = produce(arr, (arrCopy) => {
                          if (arrCopy[x][y] === 0) {
                            arrCopy[x][y] = 1;
                          } else {
                            arrCopy[x][y] = 0;
                          }
                        });
                        setArr(newArr);
                      }
                }
              ></div>
            );
          });
        })}
      </div>
      <div className="btns">
        <button className="btn" onClick={generateRandomGrid}>
          Random Grid
        </button>
        <button className="btn" onClick={playButton}>
          Next Grid
        </button>
        <button className="btn" onClick={clearButton}>
          Clear
        </button>
        <button className="btn" onClick={startSim}>
          {!props.isRunning ? "Start" : "Stop"}
        </button>
      </div>
      <Dropdown
        clear={clear}
        arr={arr}
        setArr={setArr}
        produce={produce}
        setCount={setCount}
      />
    </div>
  );
};

export default Grid;
