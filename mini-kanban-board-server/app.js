const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const jwtCookiesRoutes = require("./routes/jwtCookiesRoutes");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Mini Kanban Board Server is running");
});
app.use("/users", userRoutes);
app.use("/", jwtCookiesRoutes);
module.exports = app;
