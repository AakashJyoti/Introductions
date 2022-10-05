import Express from "express";
import { registerController } from "../controllers";

const router = Express.Router();

router.post("/register", registerController.register);

export default router;
