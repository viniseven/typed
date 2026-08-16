import type { Request, Response } from "express";
import { createAuthUserSchema } from "../schemas/auth.ts";
import { AuthService } from "../services/authService.ts";
import { ZodError } from "zod";

const authService = new AuthService();

class SessionController {
  async create(request: Request, response: Response) {
    try {
      const validatedDataWithZod = createAuthUserSchema.parse(request.body);

      const payloadUser = await authService.createSession(validatedDataWithZod);

      return response.status(201).json({ payloadUser });
    } catch (error) {
      if (error instanceof ZodError) {
        return response.status(400).json({
          message:
            error.issues[0]?.message || "Dados inválidos enviados na requisição"
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

export default SessionController;
