"use server";

import { revalidatePath } from "next/cache";

export async function revalidateExampleAction() {
  revalidatePath("posts");
  revalidatePath("posts-rotina-matinal-de-pessoas-altamente-eficazes");
}
