const express = require("express");
const {
  getBoards,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard,
} = require("../controllers/boardsDataController.js");
const verifyToken = require("../middlewares/verifyToken.js");

const router = express.Router();

// CRUD routes
router.get("/",verifyToken, getBoards); // get all boards
router.get("/:id", getBoardById); // get single board by _id
router.post("/", createBoard); // create new board
router.put("/:id", updateBoard); // replace/update board
router.patch("/:id", updateBoard); // partial update
router.delete("/:id", deleteBoard); // delete board

module.exports = router;
