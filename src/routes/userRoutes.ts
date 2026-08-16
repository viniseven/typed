import { Router } from "express";
import UserController from "../controllers/userController.ts";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/signup", userController.create);

export default userRoutes;
