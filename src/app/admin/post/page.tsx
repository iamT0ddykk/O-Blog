import { PostListAdmin } from "@/src/Components/admin/PostsListAdmin";
import { SpinLoader } from "@/src/Components/SpinLoader";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Edite um post",
};
export default async function AdminPostPage() {
  return (
    <Suspense fallback={<SpinLoader></SpinLoader>}>
      <PostListAdmin></PostListAdmin>
    </Suspense>
  );
}
