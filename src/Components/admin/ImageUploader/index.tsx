"use client";

import { useRef, useState, useTransition } from "react";
import { Button } from "../../Button";
import { RiImageUploadFill } from "react-icons/ri";
import { IMAGE_UPLOAD_MAX_SIZE } from "@/src/lib/constants";
import { toast } from "react-toastify";
import { UploadImageAction } from "@/src/actions/upload/upload-image-action";
import { TrashIcon } from "lucide-react";

export function ImageUploader() {
  const imgref = useRef<HTMLInputElement>(null);

  const [isUploading, startTransition] = useTransition();

  const [imgUrl, setImgUrl] = useState("");

  function handleChooseImg() {
    if (!imgref.current) return;
    imgref.current.click();
  }

  function handleChange() {
    toast.dismiss();
    const imgcurrent = imgref.current;

    if (!imgcurrent) return;

    const file = imgcurrent?.files?.[0];

    if (!file) return;

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      toast.error("imagem muito grande");
      return;
    }
    const formData = new FormData();

    formData.append("file", file);

    startTransition(async () => {
      const result = await UploadImageAction(formData);

      if (result.error) {
        toast.error(result.error);
        imgcurrent.value = "";
        return;
      }
      setImgUrl(result.url);
      toast.success("imagem enviada");
    });

    imgcurrent.value = "";
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-3">
        <Button
          type="button"
          disabled={isUploading}
          className="self-start"
          onClick={handleChooseImg}
        >
          <RiImageUploadFill />
          Enviar imagems
        </Button>
        {imgUrl && (
          <div className="flex flex-col">
            <Button
              variant="danger"
              type="button"
              onClick={() => {
                setImgUrl("");
                toast.success("imagem apagada!");
              }}
            >
              <TrashIcon></TrashIcon> Apagar Imagem
            </Button>
          </div>
        )}
      </div>

      {imgUrl && (
        <div className="flex flex-col">
          <p>
            <b>url:</b>
            {imgUrl}
          </p>
          {/* eslint-disable-next-line */}
          <img className="rounded-lg w-100" src={imgUrl} alt="" />
        </div>
      )}

      <input
        ref={imgref}
        className="hidden"
        type="file"
        name="file"
        id=""
        accept="image/*"
        onChange={handleChange}
      />
    </div>
  );
}
