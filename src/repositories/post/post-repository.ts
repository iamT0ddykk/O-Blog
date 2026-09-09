import { PostModel } from "@/src/models/post/post-model";

export interface PostRepository {
  findAllPublic(): Promise<PostModel[]>;
  findAll(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  findBySlugPublic(slug: string): Promise<PostModel>;

  //mutacao

  create(post: PostModel): Promise<PostModel>;
  delete(id: string): Promise<PostModel>;
}
