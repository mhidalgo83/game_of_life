import React from "react";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <form>
        <select
          onChange={props.handleSelect}
          name="choice"
          id="choice"
          value={props.userChoice}
        >
          <option>Select a formation</option>
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
