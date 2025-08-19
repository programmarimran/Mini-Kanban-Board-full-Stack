import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes/Router";
import { RouterProvider } from "react-router/dom";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
