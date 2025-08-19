import { Link } from "react-router";
import { boardsData } from "../../../../assets/data/dashboardBoardData";
import useUserRole from "../../../../hooks/useUserRole";

const BoardList = () => {
  const {role} = useUserRole();
  const title = "My Boards";
  const boards = boardsData.filter((board) => board.seeRole === role);
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {boards && boards.length > 0 ? (
          boards.map((board) => (
            <Link key={board.id} to={`/details/${board.id}`}>
              <div
                
                className="p-4 bg-white shadow rounded-lg hover:shadow-md transition"
              >
                <h3 className="text-md font-semibold">{board.name}</h3>
                <p className="text-sm text-gray-500">{board.description}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">No boards available</p>
        )}
      </div>
    </div>
  );
};

export default BoardList;
