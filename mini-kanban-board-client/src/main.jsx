import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes/Router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import AuthProvider from "./contexts/auth/AuthProvider";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <RouterProvider router={router} />,
  </AuthProvider>
);
