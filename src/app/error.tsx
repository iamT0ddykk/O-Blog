"use client";
import { useEffect } from "react";
import ErrorMessage from "../Components/ErrorMessage";

type RootErrorProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <ErrorMessage
      pageTitle="Internal Server Error"
      contentTitle="401"
      content={"Erro desconhecido"}
    />
  );
}
