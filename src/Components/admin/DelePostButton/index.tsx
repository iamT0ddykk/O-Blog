"use client";

import { deletePostAction } from "@/src/actions/post/dele-post-action";
import { useTransition } from "react";
import { BiTrash } from "react-icons/bi";

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    if (!confirm("certeza?")) return;

    startTransition(async () => {
      const result = await deletePostAction(id);
      alert(`result ${result}`);
    });
  }

  return (
    <>
      <input type="hidden" name={id} defaultValue={id} />
      <button
        className="cursor-pointer hover:scale-120 transition-all disabled:cursor-progress"
        title={title}
        onClick={handleClick}
        disabled={isPending}
      >
        {" "}
        <BiTrash size={25} color="red"></BiTrash>{" "}
      </button>
    </>
  );
}
