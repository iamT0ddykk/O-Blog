"use server";

import { postRepository } from "@/src/repositories/post";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
  if (!id || typeof id !== "string") {
    return {
      error: "dados invalido",
    };
  }

  let post;

  try {
    post = await postRepository.delete(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        error: e.message,
      };
    }
    return {
      error: "erro desconhecido",
    };
  }

  revalidateTag("posts", "max");
  revalidateTag(`posts-${post.slug}`, "max");

  return {
    error: "",
  };
}
