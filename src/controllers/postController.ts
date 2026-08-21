import { type Request, type Response } from "express";
import { PostService } from "../services/postService.ts";
import { createPostParamsSchema, createPostSchema } from "../schemas/post.ts";
import { ZodError } from "zod";

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

  async create(request: Request, response: Response) {
    try {
      const idUser = request.params.id;
      const validatedDataWithZod = createPostSchema.parse(request.body);

      if (!idUser) {
        throw new Error("Usuário não encontrado");
      }

      const result = await postService.createPost(validatedDataWithZod, idUser);

      console.log(result);

      return response.status(201).json({ message: "Post criado com sucesso" });
    } catch (error) {
      if (error instanceof ZodError) {
        return response.status(400).json({
          message:
            error.issues[0].code || "Dados inválidos enviados na requisição"
        });
      }
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
