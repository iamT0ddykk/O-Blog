"use client";

import { useRef } from "react";
import { Button } from "../../Button";
import { RiImageUploadFill } from "react-icons/ri";

export function ImageUploader() {
  const imgref = useRef<HTMLInputElement>(null);

  function handleChooseImg() {
    if (!imgref.current) return;
    imgref.current.click();
  }

  function handleChange() {
    const imgcurrent = imgref.current;

    if (!imgcurrent) return;

    const file = imgcurrent?.files?.[0];

    if (!file) return;

    console.log(file);

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
