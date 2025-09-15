import { useEffect, useReducer } from "react";
import { RouterProvider } from "react-router";
import axios from "axios";

import routes from "./routes/Routes";
import { initState, TodoContext } from "./contexts/TodoContext";
import { todoReducer } from "./reducers/TodoReducer";
import "./App.css";

const api = axios.create({
  baseURL: "https://68c7ac555d8d9f51473285fe.mockapi.io/api/v1/",
  headers: { "Content-Type": "application/json" },
  timeout: 10_000,
});

function App() {
  const [state, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    api.get("/todos")
      .then((response) => response.data)
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
