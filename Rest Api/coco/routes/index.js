import express from "express";
import {
  loginController,
  registerController,
  userController,
  refreshControlller,
} from "../controllers";
import auth from "../middlewares/auth";
const router = express.Router();

router.post("/api/register", registerController.register);
router.post("/api/login", loginController.login);
router.get("/api/user", auth, userController.user);
router.post("/api/refresh", refreshControlller.refresh);

export default router;
