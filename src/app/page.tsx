import { SpinLoader } from "../Components/SpinLoader";
import { PostFeatured } from "../Components/PostFeatured";
import { Suspense } from "react";
import { PostListAdmin } from "../Components/PostsListAdmin";

export const dynamic = "force-static";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-1 mb-100"></SpinLoader>}>
        <PostFeatured></PostFeatured>
        <PostListAdmin></PostListAdmin>
      </Suspense>
    </>
  );
}
