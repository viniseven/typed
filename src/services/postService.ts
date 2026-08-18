import { PostModel } from "../models/Post.ts";

const postModel = new PostModel();

export class PostService {
  async listAllPost() {
    const getAllPosts = await postModel.getAllPosts();

    return getAllPosts;
  }

  async listAllPostByUser(id: string) {
    const getAllPostByUser = await postModel.getAllPostByUser(id);

    if (!getAllPostByUser) {
      throw new Error("Este post foi excluído ou não existe");
    }

    return getAllPostByUser;
  }
}
