# Conway's Game of Life

Conway's Game of Life is a cellular automaton that simulates cell life and death based on the current state of neighboring cells that are surrounding it. In my version of the game the cells are laid out in a 30 x 30 grid. Each cell has a value of 0 (dead) or 1 (alive). Based on the state of each cell, the algorithm in the program determines which cells live or die, and moves the grid and cells to the next state.

## The Rules

The rules of the Game of Life are simple:
  1) If a cell has fewer than two live neighbors, it dies, simulating underpopulation
  2) If a cell has two or three live neighbors, it lives
  3) If a live cell has more than three live neighbors, it dies, simulating overpopulation
  4) If a dead cell has exactly three live neighbors, it becomes a live cell, simulating reproduction

## Challenges

Coming up with a data structure was the first challenge I had. After doing research on the game, I pictured a matrix of zeros and ones. JavaScript doesn't have a built in data structure that has the properties of a matrix, so I had to build one. To create my matrix, I initialized an array and created 30 arrays in that array, simulating the x and y axes of a grid. With this "matrix" built, you can traverse it just by calling the indices of the parent array (which would be the row) and the child array (which is the column).

With the data structure complete, we can traverse it and change it's state based off it's position in our matrix and the state of it's neighbors. I used a library called Immer to store the current state of my data structure, and built a copy of that data structure using the algorithm that I wrote to determine the life/death of cells in it. Once the algorithm finished running, I set the state of the data structure to the copy, which has all the updated values of the cells based off the previous data structure.

## Using the app

The user has the option to create a random grid, select a preset formation, or draw their own in the grid, as each cell can be clicked to change it's state to dead/alive. Further, you can run a simulation, or go through each part of the game step by step by pressing the Next Grid button. Maybe you might be able to create another cell formation that runs infinitely. Have fun!!
