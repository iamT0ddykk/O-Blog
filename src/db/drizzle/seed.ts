import { JsonPostRepository } from "@/src/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    // await drizzleDb.delete(postsTable) DELETAR DELETAR DELETAAAAR//
    await drizzleDb.insert(postsTable).values(posts);
  } catch (e) {
    console.log(e);
  }
})();
