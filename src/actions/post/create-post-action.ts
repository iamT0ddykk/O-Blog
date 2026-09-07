"use server";

import { PublicPost } from "@/src/dto/post/dto";

type CreatePostActionState = {
  formState: PublicPost;
  errors: string[];
};

export async function createPostAction(
  prevState: CreatePostActionState,
  formData: FormData,
): Promise<CreatePostActionState> {
  //todo : verificar se esta logado usuario

  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ["dado invalido erro"],
    };
  }

  const formDataObj = Object.fromEntries(formData.entries());
  console.log(formDataObj);

  return {
    formState: { ...prevState.formState },
    errors: [],
  };
}
