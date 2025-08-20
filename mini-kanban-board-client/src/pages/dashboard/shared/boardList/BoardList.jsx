import { Link } from "react-router";
import useUserRole from "../../../../hooks/useUserRole";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const BoardList = () => {
  const { role } = useUserRole();
  const axiosSecure = useAxiosSecure();

const { data: boardsData, isLoading, isError } = useQuery({
  queryKey: ["boards"], 
  queryFn: async () => {
    const res = await axiosSecure.get("/boards");
    return res.data;
  },
});
  if (isLoading) return <p>Loading boards...</p>;
  if (isError) return <p>Error loading boards.</p>;

  const boards = boardsData.filter((board) => board.seeRole === role);
  const title = "My Boards";

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {boards && boards.length > 0 ? (
          boards.map((board) => (
            <Link key={board._id} to={`/details/${board._id}`}>
              <div className="p-4 bg-white shadow rounded-lg hover:shadow-md transition">
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
