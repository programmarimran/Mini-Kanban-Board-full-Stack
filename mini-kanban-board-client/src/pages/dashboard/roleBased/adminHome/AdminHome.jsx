const AdminHome = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl text-center font-bold">Admin Dashboard</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>Boards </div>
        <div>Team </div>
        <div>analysic </div>
      </div>
      {/* <TeamOverview />
      <ActivityLog /> */}
    </div>
  );
};

export default AdminHome;
