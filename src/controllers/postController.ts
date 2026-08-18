import { type Request, type Response } from "express";
import { PostService } from "../services/postService.ts";

const postService = new PostService();

class PostController {
  async index(response: Response) {
    try {
      await postService.listAllPost();

      return response.status(200);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(409).json({
          message: error.message
        });
      }
      return response.status(500).json({ message: "Erro interno do servidor" });
    }
  }
}

export default PostController;
