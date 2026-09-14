"use client";

import { useActionState, useEffect, useState } from "react";
import { Button } from "../../Button";
import { InputText } from "../../InputText";
import { MarkdownEditor } from "../../MarkdownEditor";
import { InputCheckbox } from "../../InputCheckbox";
import { ImageUploader } from "../ImageUploader";
import { makePartialPublicPost, PublicPost } from "@/src/dto/post/dto";
import { createPostAction } from "@/src/actions/post/create-post-action";
import { toast } from "react-toastify";
import { UpdatePostAction } from "@/src/actions/post/update-post-action";

type ManagePostFormUpdaterops = {
  mode: "update";
  publicPost?: PublicPost;
};
type ManagePostFormCreateProps = {
  mode: "create";
};
type ManagePostFormProps = ManagePostFormUpdaterops | ManagePostFormCreateProps;

export function ManagePostForm(props: ManagePostFormProps) {
  const { mode } = props;

  let publicPost;

  if (mode === "update") {
    publicPost = props.publicPost;
  }

  const actionMap = {
    update: UpdatePostAction,
    create: createPostAction,
  };

  const initialState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };

  const [state, action, isPending] = useActionState(
    actionMap[mode],
    initialState,
  );
  useEffect(() => {
    if (state.errors.length > 0) {
      toast.dismiss();
      state.errors.forEach((erro) => toast.error(erro));
    }
  }, [state.errors]);

  useEffect(() => {
    if (state.sucess) {
      toast.dismiss();
      toast.success("post atualizado!");
    }
  }, [state.sucess]);

  const { formState } = state;

  const [contentValue, setContentValue] = useState(publicPost?.content || "");

  return (
    <form action={action} className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText
          labelText="ID"
          name="id"
          placeholder="ID gerado automaticamente"
          type="text"
          defaultValue={formState.id}
          readOnly
          disabled={isPending}
        />

        <InputText
          labelText="Slug"
          name="slug"
          placeholder="Slug gerada automaticamente"
          type="text"
          defaultValue={formState.slug}
          disabled={isPending}
          readOnly
        />

        <InputText
          labelText="Autor"
          name="author"
          placeholder="Digite o nome do autor"
          type="text"
          defaultValue={formState.author}
          disabled={isPending}
        />

        <InputText
          labelText="Título"
          name="title"
          placeholder="Digite o título"
          type="text"
          defaultValue={formState.title}
          disabled={isPending}
        />

        <InputText
          labelText="Excerto"
          name="excerpt"
          placeholder="Digite o resumo"
          type="text"
          defaultValue={formState.excerpt}
          disabled={isPending}
        />

        <MarkdownEditor
          labelText="Conteúdo"
          value={contentValue}
          setValue={setContentValue}
          textAreaName="content"
          disabled={isPending}
        />

        <ImageUploader />

        <InputText
          labelText="URL da imagem de capa"
          name="coverImageUrl"
          placeholder="Digite a url da imagem"
          type="text"
          defaultValue={formState.coverImageUrl}
          disabled={isPending}
        />

        <InputCheckbox
          labelText="Publicar?"
          name="published"
          type="checkbox"
          defaultChecked={formState.published}
          disabled={isPending}
        />

        <div className="mt-4">
          <Button type="submit" disabled={isPending}>
            Enviar
          </Button>
        </div>
      </div>
    </form>
  );
}
