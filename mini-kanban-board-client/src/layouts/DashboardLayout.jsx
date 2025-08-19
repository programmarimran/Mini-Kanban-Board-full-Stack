import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaTasks,
  FaUserFriends,
  FaChartLine,
  FaEdit,
  FaUser,
} from "react-icons/fa";
import { Link, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { user } = useAuth();

  return (
    <div className="relative h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-blue-600 text-white transition-transform duration-300 z-50 ${
      isOpen ? "translate-x-0 w-64" : ""
    }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4">
          <Link
            to={"/"}
            className={`text-xl font-bold ${isOpen ? "block" : "hidden"}`}
          >
            Kanban
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* user data */}
        <div className="sticky top-0 z-10  bg-base-100">
          {/* <Logo /> */}
          {/* User Info */}
          <div onClick={() => setIsOpen(!isOpen)}
            className={`flex justify-center mb-4 items-center ${
              isOpen ? "hidden" : "block"
            } `}
          >
            <FaUser size={24} />
          </div>
          <div className={`mb-4 text-center ${isOpen ? "block" : "hidden"}`}>
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="User"
                className="w-16 h-16 mx-auto rounded-full border-2 border-primary"
              />
            ) : (
              <div className=" flex justify-center items-center">
                <FaUser size={24} />
              </div>
            )}

            <div className=" flex items-center justify-center">
              <h2 className="text-lg mx-5 font-semibold mt-2">
                {user?.displayName || "User Name"}
              </h2>
              <Link to={"/dashboard/profile-update"}>
                <FaEdit className=" text-primary" size={25} />
              </Link>
            </div>
            <p className="text-sm break-words text-gray-900">{user?.email}</p>
           
          </div>
          <div className=" border-b-2"></div>
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
      <div  className={`flex-1 transition-all duration-300 ${
      isOpen ? "" : "ml-12"
    }`}>
        {/* Topbar */}
        <header className="bg-white shadow p-2 flex justify-between items-center">
          <Link to={"/"} className="text-xl font-semibold">
            Kanban Board
          </Link>
          <div
            className={`flex items-center gap-4 md:block  `}
          >
            <div className=" flex items-center gap-6 mr-4">
              <h1 className="font-medium hidden md:flex">
                {user?.displayName}
              </h1>
              {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="User"
                className="w-16 h-16 mx-auto rounded-full border-2 border-primary"
              />
            ) : (
              <div className=" flex justify-center items-center">
                <FaUser size={24} />
              </div>
            )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
