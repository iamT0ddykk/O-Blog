import { PostModel } from "@/src/models/post/post-model";

export type publicPost = Omit<PostModel, "updatedAt">;

const makePublicPost = (post: PostModel): publicPost => {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    coverImageUrl: post.coverImageUrl,
    author: post.author,
    createdAt: post.createdAt,
    published: post.published,
  };
};
