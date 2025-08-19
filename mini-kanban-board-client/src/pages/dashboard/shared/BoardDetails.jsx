import React, { useState } from 'react';
import { ChevronRight, Calendar, User, Eye, Plus } from 'lucide-react';

const BoardDetails = () => {
  const [boardData] = useState({
    id: 21,
    name: "Project Tracker",
    description: "Track project progress",
    seeRole: "admin",
    columns: [
      {
        id: 1,
        name: "To Do",
        cards: [
          {
            id: 1,
            title: "Design homepage",
            description: "Create homepage design",
          },
          {
            id: 2,
            title: "Set up database",
            description: "Initialize MongoDB",
          },
        ],
      },
      {
        id: 2,
        name: "In Progress",
        cards: [
          {
            id: 3,
            title: "API Development",
            description: "Build REST API endpoints",
          },
        ],
      },
      {
        id: 3,
        name: "Review",
        cards: [
          {
            id: 4,
            title: "Code Review",
            description: "Review pull requests",
          },
        ],
      },
      {
        id: 4,
        name: "Done",
        cards: [
          {
            id: 5,
            title: "Project Setup",
            description: "Initial project configuration",
          },
          {
            id: 6,
            title: "Team Setup",
            description: "Set up development team",
          },
        ],
      },
    ],
  });

  const getColumnColor = (columnName) => {
    const colors = {
      "To Do": "bg-blue-50 border-blue-200",
      "In Progress": "bg-yellow-50 border-yellow-200",
      "Review": "bg-purple-50 border-purple-200",
      "Done": "bg-green-50 border-green-200",
    };
    return colors[columnName] || "bg-gray-50 border-gray-200";
  };

  const getCardColor = (columnName) => {
    const colors = {
      "To Do": "border-l-blue-400",
      "In Progress": "border-l-yellow-400",
      "Review": "border-l-purple-400",
      "Done": "border-l-green-400",
    };
    return colors[columnName] || "border-l-gray-400";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>Boards</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900">{boardData.name}</span>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{boardData.name}</h1>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full flex items-center gap-2">
                <Eye className="w-4 h-4" />
                {boardData.seeRole}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">{boardData.description}</p>
            
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Board ID: #{boardData.id}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{boardData.columns.reduce((total, col) => total + col.cards.length, 0)} total cards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Board Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {boardData.columns.map((column) => (
            <div key={column.id} className={`rounded-lg border-2 p-4 ${getColumnColor(column.name)}`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">{column.name}</h2>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                  {column.cards.length}
                </span>
              </div>
              
              <div className="space-y-3">
                {column.cards.map((card) => (
                  <div
                    key={card.id}
                    className={`bg-white rounded-lg p-4 shadow-sm border border-gray-200 border-l-4 ${getCardColor(column.name)} hover:shadow-md transition-shadow cursor-pointer`}
                  >
                    <h3 className="font-medium text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{card.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">#{card.id}</span>
                      <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                ))}
                
                {/* Add Card Button */}
                <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center gap-2">
                  <Plus className="w-4 h-4" />
                  <span className="text-sm">Add card</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {boardData.columns.map((column) => (
            <div key={`stat-${column.id}`} className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="text-2xl font-bold text-gray-900">{column.cards.length}</div>
              <div className="text-sm text-gray-600">{column.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardDetails;