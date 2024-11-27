import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Errorpage from "../components/Errorpage";
import CofffeStore from "../components/CofffeStore";
import UpdateCoffee from "../components/UpdateCoffee";
import Coffees from "../components/Coffees";
import DetailsPage from "../components/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/coffeestore/:id",
        element: <CofffeStore />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/coffees",
        element: <Coffees />,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/updatecoffee",
        element: <UpdateCoffee />,
      },
      {
        path: "/details/:id",
        element: <DetailsPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
    ],
  },
]);

export default router;
