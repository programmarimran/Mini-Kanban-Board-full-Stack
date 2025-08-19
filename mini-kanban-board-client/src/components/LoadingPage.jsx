import React from "react";
import { FaSpinner } from "react-icons/fa";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <FaSpinner className="animate-spin text-blue-600 text-6xl mx-auto" />
        <h1 className="mt-4 text-2xl font-semibold text-gray-700">
          Loading Kanban Board...
        </h1>
        <p className="text-gray-500 mt-2">Please wait a moment</p>
      </div>
    </div>
  );
};

export default LoadingPage;