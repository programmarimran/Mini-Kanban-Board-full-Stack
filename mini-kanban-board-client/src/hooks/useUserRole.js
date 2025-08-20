import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useUserRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: roleData, isLoading: roleLoading } = useQuery({
    queryKey: ["user-role", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(`/users/user-role/${user?.email}`);
      return res.data.role;
    },
  });

  const role = roleData;
  // console.log(role)
  return { role, roleLoading };
};

export default useUserRole;
