import { useReducer } from "react";
import { initState, TodoContext } from "./contexts/TodoContext";
import { todoReducer } from "./reducers/TodoReducer";
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  Outlet,
} from "react-router";

import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import TodoDetailPage from "./pages/TodoDetailPage.jsx";

import "./App.css";

const DefaultLayout = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </header>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/todos/:id",
        element: <TodoDetailPage />,
      },
    ],
  },
]);

function App() {
  const [state, dispatch] = useReducer(todoReducer, initState);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <RouterProvider router={routes} />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
