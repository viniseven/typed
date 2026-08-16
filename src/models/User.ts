import { prisma } from "../lib/prisma.ts";
import type { User, Prisma } from "../../generated/prisma/client.ts";

export class UserModel {
  async findUserWithEmailAndUsername(
    email: User["email"],
    username: User["username"]
  ) {
    return prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }]
      }
    });
  }

  async createUser(data: Prisma.UserCreateInput) {
    return prisma.user.create({
      data
    });
  }

  async findByUsername(username: User["username"]) {
    return prisma.user.findUnique({
      where: {
        username
      }
    });
  }
}
