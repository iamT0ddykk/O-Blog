import { SinglePost } from "@/src/Components/SinglePost";
import { SpinLoader } from "@/src/Components/SpinLoader";
import { findPostBySlugCached } from "@/src/lib/post/queries";
import { Metadata } from "next";
import { Suspense } from "react";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<SpinLoader></SpinLoader>}>
      <SinglePost slug={slug}></SinglePost>
    </Suspense>
  );
}
