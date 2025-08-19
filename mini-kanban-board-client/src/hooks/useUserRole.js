
const useUserRole = () => {
  // const { user } = useAuth();
  // const axiosSecure = useAxiosSecure();

  // const { data: roleData, isLoading: roleLoading } = useQuery({
  //   queryKey: ["user-role", user?.email],
  //   enabled: !!user?.email,
  //   queryFn: async () => {
  //     const res = await axiosSecure(`/users/user-role/${user.email}`);
  //     return res.data.role;
  //   },
  // });
  const roleData="admin"
  const roleLoading=false
  const role = roleData;
  return { role, roleLoading };
};

export default useUserRole;