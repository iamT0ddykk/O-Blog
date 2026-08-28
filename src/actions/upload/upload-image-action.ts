"use server";

import { IMAGE_UPLOAD_DIR, IMAGE_UPLOAD_MAX_SIZE } from "@/src/lib/constants";
import { mkdir } from "node:fs/promises";
import { extname, resolve } from "path";

type uploadImageResult = {
  url: string;
  error: string;
};

export async function UploadImageAction(
  formData: FormData,
): Promise<uploadImageResult> {
  const makeResult = ({ url = "", error = "" }) => ({ url, error });
  const file = formData.get("file");

  if (!(formData instanceof FormData)) {
    return makeResult({ error: "dados invalidos" });
  }
  if (!(file instanceof File)) {
    return makeResult({ error: "dados invalidos" });
  }
  if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
    return makeResult({ error: "arquivo muito grande" });
  }
  if (file.name.startsWith("image/")) {
    return makeResult({ error: "dados invalidos" });
  }

  const imgextension = extname(file.name);
  const uniqueImgName = `${Date.now()} ${imgextension}`;

  const fullPath = resolve(process.cwd(), "public", IMAGE_UPLOAD_DIR);

  mkdir(fullPath, { recursive: true });

  console.log(uniqueImgName);
  return makeResult({ url: "url" });
}
