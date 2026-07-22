import { title } from "process";
import React from "react";

type errorMessageProps = {
  pageTitle: string;
  contentTitle: string;
  content: React.ReactNode;
};
export default function ErrorMessage({
  content,
  contentTitle,
  pageTitle,
}: errorMessageProps) {
  return (
    <>
      ( <title>{pageTitle}</title>
      <div>
        <div className="text-center text-slate-400">
          <h1 className="text-6xl font-extrabold">{contentTitle}</h1>
          <div className="text-2xl">{content}</div>
        </div>
      </div>
      );
    </>
  );
}
