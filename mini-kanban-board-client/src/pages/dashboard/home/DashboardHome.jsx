import useUserRole from "../../../hooks/useUserRole";
import AdminHome from "../roleBased/adminHome/AdminHome";
import InternHome from "../roleBased/internHome/InternHome";
import ManagerHome from "../roleBased/managerHome/ManagerHome";
import MemberHome from "../roleBased/memberHome/MemberHome";

const DashboardHome = () => {
  const { role } = useUserRole(); 

  return (
    <div className="dashboard-home">
      {role === "admin" && <AdminHome />}
      {role === "manager" && <ManagerHome/>}
      {role === "member" && <MemberHome />}
      {role === "intern" && <InternHome />}
    </div>
  );
};

export default DashboardHome;
