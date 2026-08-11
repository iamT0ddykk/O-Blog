"use client";

import { deletePostAction } from "@/src/actions/post/dele-post-action";
import { useState, useTransition } from "react";
import { BiTrash } from "react-icons/bi";
import { Dialog } from "../../Dialog";

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [showDialog, setShowDialog] = useState(false);
  function handleClick() {
    setShowDialog(true);
  }

  function handleConfirm() {
    startTransition(async () => {
      const result = await deletePostAction(id);

      alert(`result ${result}`);
      setShowDialog(false);
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

      {showDialog && (
        <Dialog
          descriptionText="asd"
          titleText="asd"
          isVisible={showDialog}
          onCancel={() => setShowDialog(false)}
          onConfirm={() => handleConfirm()}
          disabled={isPending}
        ></Dialog>
      )}
    </>
  );
}
