const { client } = require("./db");

const database = client.db("KanbanBoardDB");
const usersCollection = database.collection("users");
const boardsDataCollection=database.collection("boardsData")

module.exports = {
  usersCollection,
 boardsDataCollection
};
