import React, { useState } from "react";
import { FaBars, FaTimes, FaTasks, FaUserFriends, FaChartLine } from "react-icons/fa";
import { Link, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const {user}=useAuth()

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-blue-600 text-white transition-all duration-300 flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4">
          <Link to={"/"} className={`text-xl font-bold ${isOpen ? "block" : "hidden"}`}>
            Kanban
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex-1 px-2 py-4 space-y-2">
          <Link
            to={"/boards"}
            className="flex items-center gap-3 p-2 rounded hover:bg-blue-500"
          >
            <FaTasks />
            {isOpen && <span>Boards</span>}
          </Link>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded hover:bg-blue-500"
          >
            <FaUserFriends />
            {isOpen && <span>Teams</span>}
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded hover:bg-blue-500"
          >
            <FaChartLine />
            {isOpen && <span>Analytics</span>}
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow p-2 flex justify-between items-center">
          <Link to={"/"} className="text-xl font-semibold">Dashboard</Link>
          <div className={`flex items-center gap-4 md:block ${isOpen? "hidden":"block transition-all duration-300"} `}>
          <div className=" flex items-center gap-6 mr-4">
              <h1 className="font-medium hidden md:flex">{user?.displayName}</h1>
            <img
              // src="https://i.pravatar.cc/40"
              src={user?.photoURL}
              alt="user"
              className="w-8 h-8 rounded-full"
            />
          </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet/>
        </main>
        
      </div>
  
    </div>
  );
};

export default DashboardLayout;

