import { Router } from "express";
import SessionController from "../controllers/sessionController.ts";

const authRoutes = Router();
const sessionController = new SessionController();

authRoutes.post("/signin", sessionController.create);

export default authRoutes;
