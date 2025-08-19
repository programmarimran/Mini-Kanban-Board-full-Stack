const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Mini Kanban Board Server is running");
});
app.use("/users", userRoutes);
module.exports = app;
