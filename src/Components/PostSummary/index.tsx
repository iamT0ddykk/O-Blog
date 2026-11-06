import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";
import { FaRegEye } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
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
      <p>{excerpt}</p>
      <div className="text-slate-500  gap-1">
        <div className="flex items-center text-center gap-1">
          {" "}
          <FaRegEye color="#808080" /> <p className="text-sm">19</p>
        </div>
        <div className="flex items-center text-center gap-1">
          <AiFillLike color="#808080" /> <p className="text-sm">2</p>
        </div>
        <div className="flex items-center text-center gap-1">
          <AiFillDislike color="#808080" /> <p className="text-sm">0</p>
        </div>
      </div>
    </div>
  );
}
