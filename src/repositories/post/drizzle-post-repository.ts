import { PostModel } from "@/src/models/post/post-model";
import { PostRepository } from "./post-repository";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]>;
  async findAll(): Promise<PostModel[]>;
  async findById(id: string): Promise<PostModel>;
  async findBySlug(slug: string): Promise<PostModel>;
}
