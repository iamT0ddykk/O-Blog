import { ManagePostForm } from "@/src/Components/admin/ManagePostForm";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Crie um post",
};

export default async function AdminPostNewPage() {
  return (
    <div className="flex flex-col bg-slate-300 p-2">
      <h1 className="font-extrabold pb-2">Criar post</h1>
      <ManagePostForm></ManagePostForm>
    </div>
  );
}
