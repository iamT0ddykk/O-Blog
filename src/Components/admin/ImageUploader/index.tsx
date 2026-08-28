"use client";

import { useRef, useTransition } from "react";
import { Button } from "../../Button";
import { RiImageUploadFill } from "react-icons/ri";
import { IMAGE_UPLOAD_MAX_SIZE } from "@/src/lib/constants";
import { toast } from "react-toastify";
import { UploadImageAction } from "@/src/actions/upload/upload-image-action";

export function ImageUploader() {
  const imgref = useRef<HTMLInputElement>(null);

  const [isUploading, startTransition] = useTransition();

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

      toast.success(result.url);
    });

    imgcurrent.value = "";
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Button type="button" className="self-start" onClick={handleChooseImg}>
        <RiImageUploadFill />
        Enviar imagems
      </Button>

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
