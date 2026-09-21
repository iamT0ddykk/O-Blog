"use server";

import { asyncDelay } from "@/src/utils/async-delay";

type loginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: loginActionState, formData: FormData) {
  await asyncDelay(3000);

  if (!(formData instanceof FormData)) {
    return {
      error: "formdata errado",
    };
  }

  const username = formData.get("username")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  const isValid = username === process.env.LOGIN_USER

  return {
    username: "",
    error: "",
  };
}
