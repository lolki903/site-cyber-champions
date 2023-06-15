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
import SuiviDeCommande from "./Screen/SuivideCommande";
import Login from "./Screen/Login";
import Panier from "./Screen/Panier";
import ErrorMessage from "./Screen/ErrorMessage";
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
      auth: true,
      path: "/suivi",
      element:<SuiviDeCommande />
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/panier",
      element: <Panier />,
    },
    {
      path:"/errormess",
      element: <ErrorMessage />
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  );
};

export default App;
