import { ManagePostForm } from "@/src/Components/admin/ManagePostForm";
import { makePublicPost } from "@/src/dto/post/dto";
import { findPostByIdAdmin } from "@/src/lib/post/queries/admin";
import { notFound } from "next/navigation";

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

  if (!post) notFound();

  const publicPost = makePublicPost(post);
  return (
    <>
      <div className="flex flex-col bg-slate-300 p-2">
        <h1 className="font-extrabold pb-2">Editar post {id}</h1>
        <ManagePostForm PublicPost={publicPost}></ManagePostForm>
      </div>
    </>
  );
}
