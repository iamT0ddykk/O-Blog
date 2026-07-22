import { findPostBySlugCached } from "@/src/lib/post/queries";
import Image from "next/image";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";
import { SafeMarkdown } from "../SafeMarkdown";
type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <article className="mb-16">
      <header className="flex flex-col gap-4">
        <Image
          className="rounded-2xl "
          src={post.coverImageUrl}
          alt={post.excerpt}
          width={1200}
          height={720}
        ></Image>
        <PostHeading url={`/posts/${post.slug}`}>{post.title}</PostHeading>

        <p>
          {post.author} | <PostDate dateTime={post.createdAt}></PostDate>
        </p>

        <p className="sm:text-xl">{post.excerpt}</p>

        <SafeMarkdown markdown={post.content}></SafeMarkdown>
      </header>
    </article>
  );
}
