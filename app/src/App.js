import React, {useState} from "react";
import Grid from "./Grid";


function App() {
  const [isRunning, setIsRunning] = useState(false)

  return (
    <div className="App">
      <Grid isRunning={isRunning} setIsRunning={setIsRunning}  />
    </div>
  );
}

export default App;
