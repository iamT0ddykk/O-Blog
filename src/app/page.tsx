import { SpinLoader } from "../Components/SpinLoader";
import { PostList } from "../Components/PostsList";
import { PostFeatured } from "../Components/PostFeatured";
import { Suspense } from "react";
export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-1 mb-10"></SpinLoader>}>
        <PostFeatured></PostFeatured>
        <PostList></PostList>
      </Suspense>
    </>
  );
}
