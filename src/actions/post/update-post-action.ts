"use server";

import { makePartialPublicPost, PublicPost } from "@/src/dto/post/dto";
import { PostUpdateSchema } from "@/src/lib/validations";
import { postRepository } from "@/src/repositories/post";
import { getZodErrorMessages } from "@/src/utils/get-zod-error-messages";
import { revalidateTag } from "next/cache";

type UpdatePostActionState = {
  formState: PublicPost;
  errors: string[];
  sucess?: true;
};

export async function UpdatePostAction(
  prevState: UpdatePostActionState,
  formData: FormData,
): Promise<UpdatePostActionState> {
  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ["dado invalido erro"],
    };
  }

  const id = formData.get("id")?.toString() || "";

  if (!id || typeof id !== "string") {
    return {
      formState: prevState.formState,
      errors: ["id invalido erro"],
    };
  }

  const formDataObj = Object.fromEntries(formData.entries());
  const zodParseObj = PostUpdateSchema.safeParse(formDataObj);

  if (!zodParseObj.success) {
    const errors = getZodErrorMessages(zodParseObj.error.format());

    return {
      errors,
      formState: makePartialPublicPost(formDataObj),
    };
  }

  const validPostData = zodParseObj.data;

  const newPost = {
    ...validPostData,
  };

  let post;

  try {
    post = await postRepository.update(id, newPost);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        formState: makePartialPublicPost(formDataObj),
        errors: [e.message],
      };
    }
    return {
      formState: makePartialPublicPost(formDataObj),
      errors: ["erro desconhecido"],
    };
  }

  revalidateTag("posts", "max");
  revalidateTag(`post=${post.slug}`, "max");

  return {
    formState: makePartialPublicPost(post),
    errors: [],
    sucess: true,
  };
}
