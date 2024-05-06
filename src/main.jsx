import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./Components/Pages/HomePage/Home";
import Tire2 from "./Components/Pages/Players/Tire1/Tier2";
import Tire1 from "./Components/Pages/Players/Tire1/Tier1";
import Blogs from "./Components/Pages/Blogs/Blogs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Tier-1",
        element: <Tire1></Tire1>,
      },
      {
        path: "/Tier-2",
        element: <Tire2></Tire2>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
