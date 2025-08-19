import { boardsData } from "../../../../assets/data/dashboardBoardData";
import useUserRole from "../../../../hooks/useUserRole";

const AdminHome = () => {
  const { role } = useUserRole();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl text-center font-bold">Admin Dashboard</h1>
      <BoardList
        title="My Boards"
        boards={boardsData.filter((board) => board.seeRole === role)}
      />
      {/* <TeamOverview />
      <ActivityLog /> */}
    </div>
  );
};

export default AdminHome;
