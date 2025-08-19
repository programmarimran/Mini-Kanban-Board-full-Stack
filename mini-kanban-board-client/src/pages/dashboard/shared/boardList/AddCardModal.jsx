import { X } from "lucide-react";
import { useState } from "react";

const AddCardModal = ({ isOpen, onClose, onAddCard }) => {
  const [newCard, setNewCard] = useState({ id: "", title: "", description: "" });

  const handleInputChange = (e) => {
    setNewCard({ ...newCard, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onAddCard(newCard); // Parent থেকে পাঠানো function কল
    setNewCard({ id: "", title: "", description: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold mb-4">Add New Card</h2>
        <div className="space-y-3">
          <input
            type="text"
            name="id"
            placeholder="Card ID"
            value={newCard.id}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newCard.title}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newCard.description}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Add Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCardModal;
