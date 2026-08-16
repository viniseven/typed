import { UserModel } from "../models/User.ts";
import type { CreateUserSchema } from "../schemas/user.ts";
import bcrypt from "bcrypt";

const userModel = new UserModel();

export class UserService {
  async createUser(data: CreateUserSchema) {
    const { email, username } = data;

    const findUserExist = await userModel.findUserWithEmailAndUsername(
      email,
      username
    );

    if (findUserExist) {
      throw new Error("Email ou username já utilizado por outro usuário");
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const createdUserData = await userModel.createUser({
      ...data,
      password: hashedPassword
    });

    return createdUserData;
  }
}
