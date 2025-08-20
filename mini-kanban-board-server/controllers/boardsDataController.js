const { ObjectId } = require("mongodb");
const { boardsDataCollection } = require("../config/collections");
const getBoards = async (req, res) => {
  try {
    const boards = await boardsDataCollection.find({}).toArray();
    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBoardById = async (req, res) => {
  try {
    const { id } = req.params;

  
    const board = await boardsDataCollection.findOne({ _id: new ObjectId(id) });
    if (!board) return res.status(404).json({ error: "Board not found" });

    res.status(200).json(board);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createBoard = async (req, res) => {
  try {
    const newBoard = req.body;

    await collection.insertOne(newBoard);
    res.status(201).json({ message: "Board created", board: newBoard });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updateBoard = async (req, res) => {
  try {
    const { id } = req.params;         
    const { columnId, title, description } = req.body; column

    if (!columnId || !title) {
      return res.status(400).json({ error: "Column ID and title are required" });
    }

    const newCard = {
      _id: new Date().getTime(), 
      title,
      description: description || "",
    };

    const result = await boardsDataCollection.updateOne(
      { _id: new ObjectId(id), "columns._id": columnId }, 
      { $push: { "columns.$.cards": newCard } }         
    );

    if (!result.matchedCount)
      return res.status(404).json({ error: "Board or column not found" });

    res.status(200).json({ message: "Card added", card: newCard });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteBoard = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await boardsDataCollection.deleteOne({ _id: Number(id) });
    if (!result.deletedCount)
      return res.status(404).json({ error: "Board not found" });
    res.status(200).json({ message: "Board deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getBoards,
  getBoardById,
  deleteBoard,
  createBoard,
  updateBoard,
};
