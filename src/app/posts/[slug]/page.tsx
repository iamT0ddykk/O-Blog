import { SinglePost } from "@/src/Components/SinglePost";
import { SpinLoader } from "@/src/Components/SpinLoader";
import { findPublicPostBySlugCached } from "@/src/lib/post/queries/public";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-static";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await findPublicPostBySlugCached(slug);

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
