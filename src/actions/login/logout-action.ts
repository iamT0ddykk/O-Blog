"use server";

import { DeleteLoginSession } from "@/src/lib/login/manage-login";
import { asyncDelay } from "@/src/utils/async-delay";
import { redirect } from "next/navigation";

export async function logoutAction() {
  await asyncDelay(3000);
  await DeleteLoginSession();
  redirect("/");
}
