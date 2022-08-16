const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors())
const PorT = process.env.PORT || 5000;

const apiData = require("./data.json");

app.get("/", (req, res) => {
  res.status(200).json(apiData);
});

app.listen(PorT, () => {
  console.log("app is live");
});
