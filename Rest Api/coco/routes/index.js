import express from "express";
import { loginController, registerController } from "../controllers";
const router = express.Router();

router.post("/api/register", registerController.register);
router.post("/api/login", loginController.login);

export default router;
