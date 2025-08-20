const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const jwtCookiesRoutes = require("./routes/jwtCookiesRoutes");
const cookieParser = require("cookie-parser");
const boardsDataRoutes = require("./routes/boardsDataRoutes");

app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  "https://mini-kanban-board-82e51.web.app",
  "https://mini-kanban-board-82e51.web.app/login",
  "http://localhost:5173" 
];

app.use(
  cors({
    origin: function(origin, callback){
      
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true
  })
);

app.get("/", (req, res) => {
  res.send("Mini Kanban Board Server is running");
});

app.use("/users", userRoutes);
app.use("/", jwtCookiesRoutes);
app.use("/boards", boardsDataRoutes);

module.exports = app;
