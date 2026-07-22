import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";

type PostSummaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSummary({
  postHeading,
  postLink,
  title,
  createdAt,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <PostDate dateTime={createdAt}></PostDate>
      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>
      <p className="mb-10">{excerpt}</p>
    </div>
  );
}
