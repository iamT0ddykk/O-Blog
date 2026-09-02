import { PostModel } from "@/src/models/post/post-model";

export type publicPost = Omit<PostModel, "updatedAt" >;
