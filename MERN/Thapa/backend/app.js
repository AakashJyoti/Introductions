require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/dbConn");

const PORT = process.env.PORT;
connectDB();
app.use(express.json());

const User = require("./model/userSchema");

// Linking Router Files
app.use(require("./router/auth"));

// Middleware

// app.get("/about", middleware, (req, res) => {
//   res.send("Hello World from About");
// });

app.get("/contact", (req, res) => {
  res.send("Hello World from Contact");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
