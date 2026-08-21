"use client";

import { useState } from "react";
import { Button } from "../../Button";
import { InputCheckbox } from "../../InputCheckbox";
import { InputText } from "../../InputText";
import { MarkdownEditor } from "../../MarkdownEditor";

export function ManagePostForm() {
  const [value, setValue] = useState("a");

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText
          labelText="Nome"
          placeholder="Digite seu nome"
          type="password"
        />
        <InputText labelText="Sobrenome" placeholder="Digite seu sobrenome" />

        <InputCheckbox labelText="Sobrenome" />

        <InputText
          disabled
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
          defaultValue="Olá mundo"
        />
        <InputText
          disabled
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
        />
        <InputText
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
          readOnly
        />
        <InputText
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
          defaultValue="Olá mundo"
          readOnly
        />

        <MarkdownEditor
          labelText="counteud"
          disabled={false}
          textAreaName="content"
          value={value}
          setValue={setValue}
        ></MarkdownEditor>

        <div className="mt-4">
          <Button type="submit">Enviar</Button>
        </div>
      </div>
    </form>
  );
}
