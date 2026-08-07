import { deletePostAction } from "@/src/actions/post/dele-post-action";
import { BiTrash } from "react-icons/bi";

export function DeletePostButton() {
  return (
    <>
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
    </>
  );
}
