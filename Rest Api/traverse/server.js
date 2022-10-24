const express = require("express");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const connectDb = require("./config/db");

const PORT = process.env.PORT;
connectDb();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server is running on: ${PORT}`.black.bgCyan.italic.underline)
);
