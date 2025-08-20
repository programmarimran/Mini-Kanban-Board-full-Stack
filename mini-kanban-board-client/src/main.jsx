import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes/Router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import AuthProvider from "./contexts/auth/AuthProvider";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />,
    </AuthProvider>
  </QueryClientProvider>
);
