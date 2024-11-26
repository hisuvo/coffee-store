import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Errorpage from "../components/Errorpage";
import CofffeStore from "../components/CofffeStore";
import UpdateCoffee from "../components/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/coffeestore",
        element: <CofffeStore />,
      },
      {
        path: "/updatecoffee",
        element: <UpdateCoffee />,
      },
    ],
  },
]);

export default router;
