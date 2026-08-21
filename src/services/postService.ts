import { PostModel } from "../models/Post.ts";
import type {
  CreatePostParamsSchema,
  CreatePostSchema
} from "../schemas/post.ts";
import { UserModel } from "../models/User.ts";

const postModel = new PostModel();
const userModel = new UserModel();

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

  async createPost(data: CreatePostSchema, idUser: string) {
    const findUserExist = await userModel.findByIdUser(idUser);

    if (!findUserExist) {
      throw new Error("Usuário não encontrado");
    }

    const createPostData = await postModel.createPost({
      ...data,
      idAuthor: idUser
    });

    return createPostData;
  }
}
