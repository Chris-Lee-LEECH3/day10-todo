import { createContext, useContext, useReducer } from "react";
import "./App.css";

export const initState = [
  { id: 1, text: "the first todo", done: false },
  { id: 2, text: "the second todo", done: false },
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
}

const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      {todo.text}
    </div>
  );
}

export const todoReducer = (state, action) => {
  return state;
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
