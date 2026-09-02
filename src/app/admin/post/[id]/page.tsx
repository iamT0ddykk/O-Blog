import { ManagePostForm } from "@/src/Components/admin/ManagePostForm";
import { findPostByIdAdmin } from "@/src/lib/post/queries/admin";

export const dynamic = "force-dynamic";

type AdminPostIdPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminPostIdPage({
  params,
}: AdminPostIdPageProps) {
  const { id } = await params;
  const post = await findPostByIdAdmin(id).catch();

  return (
    <>
      <div className="flex flex-col bg-slate-300 p-2">
        <h1 className="font-extrabold pb-2">Editar post {id}</h1>
        <ManagePostForm post></ManagePostForm>
      </div>
    </>
  );
}
