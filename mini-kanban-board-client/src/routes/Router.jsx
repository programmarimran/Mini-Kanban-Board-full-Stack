import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/dashboard/home/DashboardHome";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/email&password/Login";
import Register from "../pages/auth/email&password/Register";
import ErrorPage from "../pages/error/ErrorPage";
import BoardList from "../pages/dashboard/shared/boardList/BoardList";
import BoardDetails from "../pages/dashboard/shared/boardList/BoardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    errorElement: ErrorPage,
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      {
        path: "/boards",
        element: <BoardList />,
      },
      {
        path:"/details/:id",
        Component:BoardDetails
      }
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
export default router;
