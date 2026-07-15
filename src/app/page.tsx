import { Suspense } from "react";
import { SpinLoader } from "../Components/SpinLoader";
import { PostList } from "../Components/PostsList";
import { Container } from "../Components/Container";
import { Header } from "../Components/Header";

export default async function HomePage() {
  return (
    <>
      <Container>
        <Header></Header>
        <Suspense fallback={<SpinLoader></SpinLoader>}>
          <PostList></PostList>
        </Suspense>
        <footer className="font-bold text-center">
          <h1>footer</h1>
        </footer>
      </Container>
    </>
  );
}
