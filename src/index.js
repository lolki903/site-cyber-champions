import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Screen/Home";
import Contact from "./Screen/Contact";
import NotFoundPage from "./Screen/404";
import Create from "./Screen/Create";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Games from "./Screen/Games";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/notrejeu",
    element: <Games />,
  },
  {
    path: "/compte",
    element: <Create />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);