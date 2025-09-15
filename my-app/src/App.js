import { useEffect, useReducer } from "react";
import { RouterProvider } from "react-router";

import routes from "./routes/Routes";
import { TodoContext } from "./contexts/TodoContext";
import { todoReducer } from "./reducers/TodoReducer";
import { useTodoService } from "./useTodoService";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(todoReducer, []);
  const { loadTodos } = useTodoService();

  useEffect(() => {
    loadTodos()
      .then((todos) => dispatch({ type: "LOAD_TODOS", payload: todos }))
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, [dispatch]);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <RouterProvider router={routes} />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
