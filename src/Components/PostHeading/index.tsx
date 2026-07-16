import Link from "next/link";
import React from "react";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  return (
    <Tag className="text-2xl/tight font-extrabold md:text-5xl">
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
