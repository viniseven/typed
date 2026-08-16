import { type Request, type Response } from "express";
import { createUserSchema } from "../schemas/user.ts";
import { UserService } from "../services/userService.ts";
import { ZodError } from "zod";

const userService = new UserService();

class UserController {
  async create(request: Request, response: Response) {
    try {
      const validatedDataWithZod = createUserSchema.parse(request.body);

      const result = await userService.createUser(validatedDataWithZod);

      return response
        .status(201)
        .json({ message: "Usuário cadastrado com sucesso" });
    } catch (error) {
      if (error instanceof ZodError) {
        return response.status(400).json({
          message: "Dados inválidos enviados na requisição",
          errors: error.message
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

export default UserController;
