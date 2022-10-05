import express from "express";
import { registerController } from "../controllers";
const router = express.Router();

router.post("/api/register", registerController.register);

export default router;
