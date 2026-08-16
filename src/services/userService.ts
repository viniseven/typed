import { UserModel } from "../models/User.ts";
import type { CreateUserSchema } from "../schemas/user.ts";
import bcrypt from "bcrypt";

const userModel = new UserModel();

export class UserService {
  async createUser(data: CreateUserSchema) {
    const findUserExist = await userModel.findUserWithEmail(data.email);

    if (findUserExist) {
      throw new Error("Email já utilizado por outro usuário");
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const createdUserData = await userModel.createUser({
      ...data,
      password: hashedPassword
    });

    return createdUserData;
  }
}
