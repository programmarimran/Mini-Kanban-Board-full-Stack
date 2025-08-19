const { client } = require("./db");

const database = client.db("KanbanBoardDB");
const usersCollection = database.collection("users");

module.exports = {
  usersCollection,
 
};
