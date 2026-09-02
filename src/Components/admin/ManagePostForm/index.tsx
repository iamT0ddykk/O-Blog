"use client";

import { useState } from "react";
import { Button } from "../../Button";
import { InputText } from "../../InputText";
import { MarkdownEditor } from "../../MarkdownEditor";
import { InputCheckbox } from "../../InputCheckbox";
import { ImageUploader } from "../ImageUploader";
import { PostModel } from "@/src/models/post/post-model";

type ManagePostFormProps = {
  publicPost: PostModel;
};

export function ManagePostForm({}: ManagePostFormProps) {
  const [value, setValue] = useState("a");

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText
          labelText="ID"
          name="id"
          placeholder="ID gerado automaticamente"
          type="text"
          defaultValue={""}
          readOnly
        />

        <InputText
          labelText="Slug"
          name="slug"
          placeholder="Slug gerada automaticamente"
          type="text"
          defaultValue={""}
          readOnly
        />

        <InputText
          labelText="Autor"
          name="author"
          placeholder="Digite o nome do autor"
          type="text"
          defaultValue={""}
        />

        <InputText
          labelText="Título"
          name="title"
          placeholder="Digite o título"
          type="text"
          defaultValue={""}
        />

        <InputText
          labelText="Excerto"
          name="excerpt"
          placeholder="Digite o resumo"
          type="text"
          defaultValue={""}
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
          defaultValue={""}
        />

        <InputCheckbox labelText="Publicar?" name="published" type="checkbox" />

        <div className="mt-4">
          <Button type="submit">Enviar</Button>
        </div>
      </div>
    </form>
  );
}
