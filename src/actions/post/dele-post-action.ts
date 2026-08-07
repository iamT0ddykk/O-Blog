"use server";

import { logColor } from "@/src/utils/log-color";
export async function deletePostAction(formData: FormData) {
  const id = formData.get("id");
  logColor("asd" + id);
}
