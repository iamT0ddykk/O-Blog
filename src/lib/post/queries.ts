import { postRepository } from "@/src/repositories/post/";
import { cache } from "react";

export const findAllPublicPostsCached = cache(
  async () => await postRepository.findAllPublic(),
);
