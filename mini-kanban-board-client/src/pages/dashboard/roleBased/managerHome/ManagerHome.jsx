
import { boardsData } from "../../../../assets/data/dashboardBoardData";
import BoardList from "../../shared/BoardList";

const ManagerHome = () => {
  const userRole="manager"
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Manager Dashboard</h1>
            <BoardList
        title="My Boards"
        boards={boardsData.filter(board => board.seeRole === userRole)}
      />
      {/* <TeamProgress /> */}
    </div>
  );
};

export default ManagerHome;
