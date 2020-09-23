import React, { useState } from "react";
import Grid from "./Grid";

function App() {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="App">
      <h1>Game of Life</h1>
      <div className="container">
        <Grid isRunning={isRunning} setIsRunning={setIsRunning} />
        <article>
          <h2>What is the Game of Life?</h2>
          <p>The Game of Life is a cellular automaton, which is a mathematical simulation showing how a cell reacts to other cells around it. In this simulation, each cell in the grid is either alive (filled in) or dead (blank).</p>
          <h2>The Rules</h2>
          <p>Determining whether a cell is dead or alive is based on the state (alive or dead) of it's neighbors. If a cell has fewer than two live neighbors, it dies (simulating underpopulation). If a cell has two or three live neighbors, it lives on to the next generation. If a cell has more than three live neighbors, it dies (simulating overpopulation). Any dead cell that has three live neighbors becomes alive in the next generation, simulating growth. </p>
          <p></p>
          <p>The grid to the left is my version of the simulation. Press the "Generate Random Grid" to generate a random grid. There is also a dropdown that contains some popular cell configurations produced in the Game of Life. These cell configurations represent a type of configuration called an oscillator. These configurations start in a specific state and will return to that state at some point during the simulation. There is also a generation counter on top of the grid, which keeps track of how many generations there are in the current simulation. Each cell is clickable in the grid, letting you manually decide which cell is alive or dead.</p>
        </article>
      </div>
    </div>
  );
}

export default App;
