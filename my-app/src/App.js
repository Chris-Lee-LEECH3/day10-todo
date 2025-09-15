import { useReducer } from "react";
import "./App.css";
import { TodoContext } from "./contexts/TodoContext";
import { todoReducer } from "./reducers/TodoReducer";
import ToList from "./components/ToList";

export const initState = [
  // { id: 1, text: "the first todo", done: false },
  // { id: 2, text: "the second todo", done: true },
];

function App() {
  const [state, dispatch] = useReducer(todoReducer, initState);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <ToList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
