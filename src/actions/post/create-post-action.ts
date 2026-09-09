"use server";

import { makePartialPublicPost, PublicPost } from "@/src/dto/post/dto";
import { PostCreateSchema } from "@/src/lib/validations";
import { PostModel } from "@/src/models/post/post-model";
import { getZodErrorMessages } from "@/src/utils/get-zod-error-messages";
import { makeSlugFromText } from "@/src/utils/make-slug-from-text";
import { v4 as uuidV4 } from "uuid";

type CreatePostActionState = {
  formState: PublicPost;
  errors: string[];
};

export async function createPostAction(
  prevState: CreatePostActionState,
  formData: FormData,
): Promise<CreatePostActionState> {
  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ["dado invalido erro"],
    };
  }

  const formDataObj = Object.fromEntries(formData.entries());
  const zodParseObj = PostCreateSchema.safeParse(formDataObj);

  if (!zodParseObj.success) {
    const errors = getZodErrorMessages(zodParseObj.error.format());

    return {
      errors,
      formState: makePartialPublicPost(formDataObj),
    };
  }

  const validPostData = zodParseObj.data;

  const newPost: PostModel = {
    ...validPostData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    id: uuidV4(),
    slug: makeSlugFromText(validPostData.title),
  };

  console.log(uuidV4());

  return {
    formState: newPost,
    errors: [],
  };
}
