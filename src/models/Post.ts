import { prisma } from "../lib/prisma.ts";
import type { Post, User, Prisma } from "../../generated/prisma/client.ts";

export class PostModel {
  async getAllPosts() {
    return prisma.post.findMany();
  }

  async getAllPostByUser(id: User["id"]) {
    return prisma.post.findMany({
      where: {
        idAuthor: id
      }
    });
  }
}
