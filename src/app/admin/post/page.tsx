import { PostListAdmin } from "@/src/Components/admin/PostsListAdmin";
import { SpinLoader } from "@/src/Components/SpinLoader";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function AdminPostPage() {
  return (
    <Suspense fallback={<SpinLoader></SpinLoader>}>
      <PostListAdmin></PostListAdmin>
    </Suspense>
  );
}
