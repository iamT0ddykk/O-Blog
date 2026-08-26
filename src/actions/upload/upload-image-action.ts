"use server";

type uploadImageResult = {
  url: string;
  error: string;
};

export async function UploadImageAction(
  formData: FormData,
): Promise<uploadImageResult> {
  const makeResult = ({ url = "", error = "" }) => ({ url, error });

  if (!(formData instanceof FormData)) {
    return makeResult({ error: "dados invalidos" });
  }

  return makeResult({ url: "url" });
}
