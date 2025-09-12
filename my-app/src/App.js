import { createContext, useContext, useReducer } from "react";
import "./App.css";

export const initState = [
  { id: 1, text: "the first todo", done: false },
  { id: 2, text: "the second todo", done: true },
];

export const TodoContext = createContext();

const TodoGroup = () => {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <div>
      {state.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index} />
      ))}
    </div>
  );
};

const TodoItem = ({ todo }) => {
  const { state, dispatch } = useContext(TodoContext);

  const markAsDone = () => {
    dispatch({ type: "TOGGLE_TODO", payload: { id: todo.id } });
  };

  return (
    <div className="todo-item">
      <span 
        className={todo.done ? "todo-done" : ""}
        onClick={markAsDone}
      >
        {todo.text}
      </span>
    </div>
  );
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(todoReducer, initState);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoGroup />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
