import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPostsCached } from "@/src/lib/post/queries";

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];

  const postLink = `/post/${post.slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 mb-10">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_9.png",
          alt: post.content,
          priority: true,
        }}
      />
      <div className="flex flex-col gap-4 sm:justify-center">
        <PostSummary
          postHeading="h1"
          postLink={postLink}
          createdAt={post.createdAt}
          excerpt={post.excerpt}
          title={post.title}
        ></PostSummary>
      </div>
    </section>
  );
}
