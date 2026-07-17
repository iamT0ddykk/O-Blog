import { SpinLoader } from "../Components/SpinLoader";
import { PostList } from "../Components/PostsList";
import { PostFeatured } from "../Components/PostFeatured";
import { Suspense } from "react";
export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader></SpinLoader>}>
        <PostFeatured></PostFeatured>
      </Suspense>

      <Suspense fallback={<SpinLoader></SpinLoader>}>
        <PostList></PostList>
      </Suspense>
    </>
  );
}
