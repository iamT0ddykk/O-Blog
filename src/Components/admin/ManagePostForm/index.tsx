"use client";

import { useState } from "react";
import { Button } from "../../Button";
import { InputText } from "../../InputText";

export function ManagePostForm() {
  const [value, setValue] = useState("a");

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText
          labelText="ID"
          placeholder="id gerado automaticamente"
          type="text"
          defaultValue={'123'}
          readOnly
        />

        <div className="mt-4">
          <Button type="submit">Enviar</Button>
        </div>
      </div>
    </form>
  );
}
