import { deletePostAction } from "@/src/actions/post/dele-post-action";
import { findAllPostAdmin } from "@/src/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";
import { BiTrash } from "react-icons/bi";

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
            <form action={deletePostAction}>
              <input type="hidden" name="id" defaultValue={post.id} />
              <button
                className="cursor-pointer hover:scale-120 transition-all"
                title="Apagar Post"
              >
                {" "}
                <BiTrash size={25} color="red"></BiTrash>{" "}
              </button>
            </form>
          </div>
        );
      })}
    </>
  );
}
