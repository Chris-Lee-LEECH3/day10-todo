import { useEffect, useReducer } from "react";
import { RouterProvider } from "react-router";

import api from "./api/mockApi";
import routes from "./routes/Routes";
import { initState, TodoContext } from "./contexts/TodoContext";
import { todoReducer } from "./reducers/TodoReducer";
import "./App.css";

const loadTodos = (params) => {
  return api.get("/todos").then((response) => response.data);
};

function App() {
  const [state, dispatch] = useReducer(todoReducer, []);

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
