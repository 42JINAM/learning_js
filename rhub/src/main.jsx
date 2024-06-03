import React from "react";
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Root from "./pages/root";
import ErrorPage from "./pages/ErrorPage";
import Index from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
