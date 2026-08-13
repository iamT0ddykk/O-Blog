import { findAllPostAdmin } from "@/src/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";
import { DeletePostButton } from "../DelePostButton";
import ErrorMessage from "../../ErrorMessage";

export async function PostListAdmin() {
  const posts = await findAllPostAdmin();

  if (posts.length <= 0)
    return (
      <ErrorMessage
        content="nao tem posts no db"
        pageTitle="ops"
        contentTitle="nao tem posts no DB"
      />
    );

  return (
    <>
      <div className="text-4xl py-16">postpage</div>

      {posts.map((post) => {
        return (
          <div
            style={{ padding: "10px" }}
            className={clsx(
              "p-96,  ",
              !post.published && "bg-slate-300 flex gap-3.5  items-center",
              "flex gap-2 justify-between",
            )}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>
              <p>{post.title}</p>
            </Link>
            {!post.published && (
              <p className="text-red-600 text-xs italic">(não publicado)</p>
            )}
            <DeletePostButton
              id={post.id}
              title={post.title}
            ></DeletePostButton>
          </div>
        );
      })}
    </>
  );
}
