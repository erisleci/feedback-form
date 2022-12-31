import { useState } from "react";
import "./App.css";
import { Test } from "@components/Test";
import { Test2 } from "@components/Test2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Test />
      <Test2 />
    </div>
  );
}

export default App;
