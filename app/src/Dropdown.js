import React, { useState, useEffect } from "react";

const Dropdown = (props) => {
  const [userChoice, setUserChoice] = useState("");

  useEffect(() => {
    props.setCount(0)
    selection(userChoice);
  }, [userChoice]);

  const handleSelect = (e) => {
    setUserChoice(e.target.value);
  };

  const selection = (s) => {
    switch (s) {
      case "none":
        return props.clear();
      case "blinker":
        props.clear();
        return props.setArr((a) => {
          return props.produce(a, (arrCopy) => {
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
        props.clear();
        return props.setArr((a) => {
          return props.produce(a, (arrCopy) => {
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
        props.clear();
        return props.setArr((a) => {
          return props.produce(a, (arrCopy) => {
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
        props.clear();
        return props.setArr((a) => {
          return props.produce(a, (arrCopy) => {
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
        props.clear();
        return props.setArr((a) => {
          return props.produce(a, (arrCopy) => {
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
  return (
    <div className="dropdown">
      <form>
        <label htmlFor="choice">Select a formation: </label>
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
  );
};

export default Dropdown;
