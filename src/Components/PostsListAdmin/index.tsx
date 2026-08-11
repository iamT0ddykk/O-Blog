import { findAllPostAdmin } from "@/src/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";
import { DeletePostButton } from "../admin/DelePostButton";

export async function PostListAdmin() {
  const posts = await findAllPostAdmin();

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

      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-40">
        <div className="flex items-center flex-col bg-slate-100 p-6 rounded-lg max-w-2xl m-20 gap-6 shadow-2xl shadow-olive-950/50">
          <h3 className="text-2xl font-extrabold">titulo</h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
          facilis dolore similique in ex ullam nostrum sed nobis laudantium
          iure, quod repellat suscipit mollitia nihil, explicabo quae quos
          beatae recusandae?
          <div className="flex min-w-80 justify-around">
            <button className="bg-slate-300 hover:bg-slate-400 transition py-2 px-7 rounded-2xl w-20 items-center flex justify-center cursor-pointer">
              cancel
            </button>
            <button className="bg-red-300 hover:bg-red-400 transition py-2 px-7 rounded-2xl w-20 cursor-pointer">
              ok
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
