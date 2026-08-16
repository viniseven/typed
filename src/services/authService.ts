import bcrypt from "bcrypt";
import { UserModel } from "../models/User.ts";
import type { CreateAuthUserSchema } from "../schemas/auth.ts";
import { generatedToken } from "../utils/generateToken.ts";

const userModel = new UserModel();

export class AuthService {
  async createSession(data: CreateAuthUserSchema) {
    const findUserExistWithUsername = await userModel.findByUsername(
      data.username
    );

    if (!findUserExistWithUsername) {
      throw new Error("Usuário não encontrado ou senha incorreta");
    }

    const passwordMatch = await bcrypt.compare(
      data.password,
      findUserExistWithUsername.password
    );

    if (!passwordMatch) {
      throw new Error("Usuário não encontrado ou senha incorreta");
    }

    const { id, username } = findUserExistWithUsername;

    const token = generatedToken({ id, username });

    return { user: { id, username }, token };
  }
}
