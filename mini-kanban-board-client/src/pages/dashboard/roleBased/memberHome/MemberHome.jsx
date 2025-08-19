
import { boardsData } from "../../../../assets/data/dashboardBoardData";
import BoardList from "../../shared/BoardList";

const MemberHome = () => {
  const userRole = "member";
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Member Dashboard</h1>
      <BoardList
        title="My Boards"
        boards={boardsData.filter((board) => board.seeRole === userRole)}
      />
      {/* <AssignedTasks /> */}
    </div>
  );
};

export default MemberHome;
