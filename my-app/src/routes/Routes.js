import { createBrowserRouter } from "react-router";

import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import TodoDetailPage from "../pages/TodoDetailPage.jsx";
import DefaultLayout from "../layouts/DefaultLayout";

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

export default routes;