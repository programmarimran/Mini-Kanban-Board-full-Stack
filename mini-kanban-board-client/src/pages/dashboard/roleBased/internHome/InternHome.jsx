
import { boardsData } from "../../../../assets/data/dashboardBoardData";
import BoardList from "../../shared/BoardList";

const InternHome = () => {
  const userRole="intern"
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Intern Dashboard</h1>
           <BoardList
       title="My Boards"
       boards={boardsData.filter(board => board.seeRole === userRole)}
     />
      {/* <AssignedTasks readOnly={true} /> */}
    </div>
  );
};

export default InternHome;
