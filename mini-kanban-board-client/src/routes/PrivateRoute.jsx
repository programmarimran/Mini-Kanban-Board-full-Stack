import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import LoadingPage from "../components/LoadingPage";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const from = location.pathname;
// console.log(loading)
  if (loading) {
    return <LoadingPage/>;
  }

  if (!user) {
    return <Navigate to="/login" state={from} replace />;
  }

  return children;
};

export default PrivateRoute;
