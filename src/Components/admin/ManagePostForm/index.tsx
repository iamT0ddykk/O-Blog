"use client";

import { useState } from "react";
import { Button } from "../../Button";
import { InputText } from "../../InputText";
import { MarkdownEditor } from "../../MarkdownEditor";
import { InputCheckbox } from "../../InputCheckbox";
import { ImageUploader } from "../ImageUploader";
import { publicPost } from "@/src/dto/post/dto";

type ManagePostFormProps = {
  PublicPost?: publicPost;
};

export function ManagePostForm({ PublicPost }: ManagePostFormProps) {
  const [value, setValue] = useState(PublicPost?.content || "");

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText
          labelText="ID"
          name="id"
          placeholder="ID gerado automaticamente"
          type="text"
          defaultValue={PublicPost?.id}
          readOnly
        />

        <InputText
          labelText="Slug"
          name="slug"
          placeholder="Slug gerada automaticamente"
          type="text"
          defaultValue={PublicPost?.slug}
          readOnly
        />

        <InputText
          labelText="Autor"
          name="author"
          placeholder="Digite o nome do autor"
          type="text"
          defaultValue={PublicPost?.author}
        />

        <InputText
          labelText="Título"
          name="title"
          placeholder="Digite o título"
          type="text"
          defaultValue={PublicPost?.title}
        />

        <InputText
          labelText="Excerto"
          name="excerpt"
          placeholder="Digite o resumo"
          type="text"
          defaultValue={PublicPost?.excerpt}
        />

        <MarkdownEditor
          labelText="Conteúdo"
          value={value}
          setValue={setValue}
          textAreaName="content"
          disabled={false}
        />

        <ImageUploader />

        <InputText
          labelText="URL da imagem de capa"
          name="coverImageUrl"
          placeholder="Digite a url da imagem"
          type="text"
          defaultValue={PublicPost?.coverImageUrl}
        />
        <InputCheckbox
          defaultChecked={PublicPost?.published}
          labelText="Publicar?"
          name="published"
          type="checkbox"
        />

        <div className="mt-4">
          <Button type="submit">Enviar</Button>
        </div>
      </div>
    </form>
  );
}
