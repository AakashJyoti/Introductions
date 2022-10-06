import express from "express";
import mongoose from "mongoose";
import { APP_PORT, DB_URL } from "./config";
import errorHandler from "./middlewares/errorHander";
import routes from "./routes";

const app = express();
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected with Mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(routes);

app.use(errorHandler);

app.listen(APP_PORT, () =>
  console.log(`server running on http://localhost:${APP_PORT}`)
);
