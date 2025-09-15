import { useReducer } from "react";
import { TodoContext } from "./contexts/TodoContext";
import { todoReducer } from "./reducers/TodoReducer";
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  Outlet,
  useRouteError,
} from "react-router";

import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";

export const initState = [
  // { id: 1, text: "the first todo", done: false },
  // { id: 2, text: "the second todo", done: true },
];

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
