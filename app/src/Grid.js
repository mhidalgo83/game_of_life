import React, { useEffect, useState, useCallback } from "react";
import produce from "immer";

import { create2dArray } from "./utils/createArray";

const Grid = (props) => {
  const [count, setCount] = useState(0);
  const [userChoice, setUserChoice] = useState("none");
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
    selection(userChoice);
  }, [props.isRunning, userChoice]);

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

  const selection = (s) => {
    switch (s) {
      case "none":
        return;
      case "blinker":
        clear();
        return setArr((a) => {
          return produce(a, (arrCopy) => {
            for (let i = 0; i < a.length; i++) {
              for (let j = 0; j < a[i].length; j++) {
                arrCopy[13][15] = 1;
                arrCopy[14][15] = 1;
                arrCopy[15][15] = 1;
              }
            }
          });
        });
      case "toad":
        clear();
        return setArr((a) => {
          return produce(a, (arrCopy) => {
            for (let i = 0; i < a.length; i++) {
              for (let j = 0; j < a[i].length; j++) {
                arrCopy[15][14] = 1;
                arrCopy[15][15] = 1;
                arrCopy[15][16] = 1;
                arrCopy[16][13] = 1;
                arrCopy[16][14] = 1;
                arrCopy[16][15] = 1;
              }
            }
          });
        });
      case "beacon":
        clear();
        return setArr((a) => {
          return produce(a, (arrCopy) => {
            for (let i = 0; i < a.length; i++) {
              for (let j = 0; j < a[i].length; j++) {
                arrCopy[13][13] = 1;
                arrCopy[14][13] = 1;
                arrCopy[13][14] = 1;
                arrCopy[14][14] = 1;
                arrCopy[15][15] = 1;
                arrCopy[16][15] = 1;
                arrCopy[15][16] = 1;
                arrCopy[16][16] = 1;
              }
            }
          });
        });
      case "pulsar":
        clear();
        return setArr((a) => {
          return produce(a, (arrCopy) => {
            for (let i = 0; i < a.length; i++) {
              for (let j = 0; j < a[i].length; j++) {
                arrCopy[11][14] = 1;
                arrCopy[12][14] = 1;
                arrCopy[13][14] = 1;
                arrCopy[17][14] = 1;
                arrCopy[18][14] = 1;
                arrCopy[19][14] = 1;
                arrCopy[11][16] = 1;
                arrCopy[12][16] = 1;
                arrCopy[13][16] = 1;
                arrCopy[17][16] = 1;
                arrCopy[18][16] = 1;
                arrCopy[19][16] = 1;
                arrCopy[11][9] = 1;
                arrCopy[12][9] = 1;
                arrCopy[13][9] = 1;
                arrCopy[17][9] = 1;
                arrCopy[18][9] = 1;
                arrCopy[19][9] = 1;
                arrCopy[11][9] = 1;
                arrCopy[12][9] = 1;
                arrCopy[13][9] = 1;
                arrCopy[17][9] = 1;
                arrCopy[18][9] = 1;
                arrCopy[19][9] = 1;
                arrCopy[11][21] = 1;
                arrCopy[12][21] = 1;
                arrCopy[13][21] = 1;
                arrCopy[17][21] = 1;
                arrCopy[18][21] = 1;
                arrCopy[19][21] = 1;
                arrCopy[11][21] = 1;
                arrCopy[12][21] = 1;
                arrCopy[13][21] = 1;
                arrCopy[17][21] = 1;
                arrCopy[18][21] = 1;
                arrCopy[19][21] = 1;
                arrCopy[14][11] = 1;
                arrCopy[14][12] = 1;
                arrCopy[14][13] = 1;
                arrCopy[16][11] = 1;
                arrCopy[16][12] = 1;
                arrCopy[16][13] = 1;
                arrCopy[14][17] = 1;
                arrCopy[14][18] = 1;
                arrCopy[14][19] = 1;
                arrCopy[16][17] = 1;
                arrCopy[16][18] = 1;
                arrCopy[16][19] = 1;
                arrCopy[9][11] = 1;
                arrCopy[9][12] = 1;
                arrCopy[9][13] = 1;
                arrCopy[9][17] = 1;
                arrCopy[9][18] = 1;
                arrCopy[9][19] = 1;
                arrCopy[21][11] = 1;
                arrCopy[21][12] = 1;
                arrCopy[21][13] = 1;
                arrCopy[21][17] = 1;
                arrCopy[21][18] = 1;
                arrCopy[21][19] = 1;
              }
            }
          });
        });
      case "pentadecathlon":
        clear();
        return setArr((a) => {
          return produce(a, (arrCopy) => {
            for (let i = 0; i < a.length; i++) {
              for (let j = 0; j < a[i].length; j++) {
                arrCopy[10][15] = 1;
                arrCopy[11][15] = 1;
                arrCopy[12][14] = 1;
                arrCopy[12][16] = 1;
                arrCopy[13][15] = 1;
                arrCopy[14][15] = 1;
                arrCopy[15][15] = 1;
                arrCopy[16][15] = 1;
                arrCopy[18][15] = 1;
                arrCopy[19][15] = 1;
                arrCopy[17][14] = 1;
                arrCopy[17][16] = 1;
              }
            }
          });
        });
      default:
        return;
    }
  };

  const handleSelect = (e) => {
    setUserChoice(e.target.value);
  };

  const checkGrid = () => {
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
            } else {
              arrCopy[x][y] = 0;
            }
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
              <>
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
              </>
            );
          });
        })}
      </div>
      <div>
        <button onClick={generateRandomGrid}>Generate Random Grid</button>
        <button onClick={playButton}>Play</button>
        <button onClick={clearButton}>Clear</button>
        <button onClick={startSim}>
          {!props.isRunning ? "Start" : "Stop"}
        </button>
      </div>
      <div>
        <form>
          <label htmlFor="choice">Select a cell formation</label>
          <select
            onChange={handleSelect}
            name="choice"
            id="choice"
            value={userChoice}
          >
            <option value="none">None</option>
            <option value="toad">Toad</option>
            <option value="beacon">Beacon</option>
            <option value="blinker">Blinker</option>
            <option value="pentadecathlon">Pentadecathlon</option>
            <option value="pulsar">Pulsar</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Grid;
