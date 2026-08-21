import { Router } from "express";
import PostController from "../controllers/postController.ts";

const postRoutes = Router();
const postController = new PostController();

postRoutes.get("/home", postController.index);
postRoutes.post("/newpost/:id", postController.create);

export default postRoutes;
