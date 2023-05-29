import React from "react";
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
import Compte from "./Screen/Compte";
import Adress from "./Screen/Adress";
import MessagEnvoi from "./Screen/Message";
const App = () => {
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
    {
      path: "/informationperso",
      element: <Compte />,
    },
    {
      path: "/addressenrigistre",
      element: <Adress />,
    },
    {
      path: "/cacac",
      element:<MessagEnvoi />
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  );
};

export default App;
