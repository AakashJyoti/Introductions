import express from "express";
import { APP_PORT } from "./config";
import routes from "./routes";

const app = express();

app.use(routes);

app.listen(APP_PORT, () =>
  console.log(`server running on http://localhost:${APP_PORT}`)
);
