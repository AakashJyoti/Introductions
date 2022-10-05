import express from "express";
import { APP_PORT } from "./config";
import errorHandler from "./middlewares/errorHander";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.use(errorHandler);

app.listen(APP_PORT, () =>
  console.log(`server running on http://localhost:${APP_PORT}`)
);
