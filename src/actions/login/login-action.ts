"use server";

import { verifyPassword } from "@/src/lib/login/manage-login";
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

  const username = formData.get("username")?.toString().trim() || "";
  const password = formData.get("password")?.toString().trim() || "";

  if (!username || !password) {
    return {
      username,
      error: "erro",
    };
  }

  const isUsernameValid = username === process.env.LOGIN_USER;
  const isPasswordValid = await verifyPassword(
    password,
    process.env.LOGIN_PASS || "",
  );
  if (!isUsernameValid || !isPasswordValid) {
    return {
      username,
      error: "usuario ou senhas invalidos",
    };
  }
  if (isUsernameValid && isPasswordValid) {
  }
  return {
    username,
    error: "usuario logado",
  };
}
