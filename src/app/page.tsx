import { Suspense } from "react";
import { SpinLoader } from "../Components/SpinLoader";
import { PostList } from "../Components/PostsList";
import { Container } from "../Components/Container";
import { Header } from "../Components/Header";
import Link from "next/link";
import Image from "next/image";
import { PostHeading } from "../Components/PostHeading";
export default async function HomePage() {
  return (
    <>
      <Container>
        <Header></Header>
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Link href="#" className="rounded-2xl ">
            <Image
              src="/images/bryen_0.png"
              width={1200}
              height={720}
              alt="titulo"
              className="mb-16 rounded-2xl hover:scale-105 transition object-cover"
              priority
            ></Image>
          </Link>
          <div className="flex flex-col gap-4 sm:justify-center">
            <time
              className="text-slate-500 text-sm/tight"
              dateTime="10/04/2012"
            >
              {" "}
              10/04/2012 10:30{" "}
            </time>
            <PostHeading url="#" as="h1">
              Titulo do post
            </PostHeading>
            <p className="mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos magni aliquid quo rerum. Harum asperiores placeat
              molestiae distinctio commodi et praesentium quos similique
              voluptate quam labore sit, vitae accusantium aspernatur. Nihil
            </p>
          </div>
        </section>
        <Suspense fallback={<SpinLoader></SpinLoader>}>
          <PostList></PostList>
        </Suspense>
        <footer className="font-bold text-center">
          <h1>footer</h1>
          {/*what’s a high tier human to a low tier god?*/}
        </footer>
      </Container>
    </>
  );
}
