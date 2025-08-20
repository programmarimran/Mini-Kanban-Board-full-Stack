import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";

// Secure axios instance
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_Server_URL,
  withCredentials: true, 
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();

  useEffect(() => {
    if (!user) return;

    //  Request Interceptor
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
     
        return config;
      },
      (error) => Promise.reject(error)
    );

    //  Response Interceptor
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (res) => res,
      (error) => {
        const status = error?.response?.status;
// console.log(status)
        if (status === 401) {
          logoutUser();
          navigate("/login");
        }

        if (status === 403) {
          console.warn("🚫 Unauthorized or Forbidden, redirecting...");
          navigate("/forbidden");
        }

        return Promise.reject(error);
      }
    );

    //  Cleanup interceptors when user changes / logs out
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [user, navigate, logoutUser]);

  return axiosSecure;
};

export default useAxiosSecure;
