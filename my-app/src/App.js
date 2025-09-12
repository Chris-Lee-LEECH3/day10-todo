import "./App.css";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  
  const add = () => {
    setCount(prev => prev + 1);
  }

  const minus = () => {
    setCount(prev => prev - 1);
  }

  return (
    <div>
      <button onClick={add}>+</button>
      {count}
      <button onClick={minus}>-</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
