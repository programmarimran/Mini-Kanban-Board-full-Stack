import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/dashboard/home/DashboardHome";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/email&password/Login";
import Register from "../pages/auth/email&password/Register";
import ErrorPage from "../pages/error/ErrorPage";
import BoardList from "../pages/dashboard/shared/boardList/BoardList";
import BoardDetails from "../pages/dashboard/shared/boardList/BoardDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "boards", element: <BoardList /> },
      { path: "details/:id", element: <BoardDetails /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
export default router;
