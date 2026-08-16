import { prisma } from "../lib/prisma.ts";
import type { User, Prisma } from "../../generated/prisma/client.ts";

export class UserModel {
  async findUserWithEmail(email: User["email"]) {
    return prisma.user.findUnique({
      where: {
        email
      }
    });
  }

  async createUser(data: Prisma.UserCreateInput) {
    return prisma.user.create({
      data
    });
  }
}
