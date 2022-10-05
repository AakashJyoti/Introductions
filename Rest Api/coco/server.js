import Express from "express";
import { APP_PORT } from "./config";
import errorHandler from "./middlewares/errorhandler";
import routes from "./routes";
const app = Express();

app.use("/api", routes);




app.use(errorHandler);

app.listen(APP_PORT, () => console.log(`listening at ${APP_PORT}`));
