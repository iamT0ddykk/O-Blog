import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  const slug = "opa";
  const postLink = `posts/${slug}`;

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
          alt: "Alt da imagem",
          priority: true,
        }}
      />
      <div className="flex flex-col gap-4 sm:justify-center">
        <time className="text-slate-500 text-sm/tight" dateTime="10/04/2012">
          {" "}
          10/04/2012 10:30{" "}
        </time>
        <PostHeading url={postLink} as="h1">
          Titulo do post
        </PostHeading>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          magni aliquid quo rerum. Harum asperiores placeat molestiae distinctio
          commodi et praesentium quos similique voluptate quam labore sit, vitae
          accusantium aspernatur. Nihil
        </p>
      </div>
    </section>
  );
}
