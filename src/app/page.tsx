import { Suspense } from "react";
import { SpinLoader } from "../Components/SpinLoader";
import { PostList } from "../Components/PostsList";

export default async function HomePage() {
  return (
    <>
      <div className="text-slate-900 bg-slate-100 min-h-screen">
        <div className="bg-amber-300 max-w-5xl">
          <header className="font-bold text-6xl text-center py-8">
            <h1>header</h1>
          </header>
          <Suspense fallback={<SpinLoader></SpinLoader>}>
            <PostList></PostList>
          </Suspense>
          <footer className="font-bold text-center">
            <h1>footer</h1>
          </footer>
        </div>
      </div>
    </>
  );
}
