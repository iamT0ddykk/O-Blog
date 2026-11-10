"use client";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { Button } from "../Button";
import { useEffect, useState } from "react";

export function OpnionSection() {
  const [like, setLike] = useState("0");
  const [dislike, setDislike] = useState("0");

 

  return (
    <>
      <div className="flex gap-3">
        <Button
          onClick={() => setLike(1)}
          className="transition duration-300 hover:scale-115 cursor-pointer"
        >
          {" "}
          <AiFillLike color="#ffff" /> <p className="text-sm">{like}</p>
        </Button>
        <Button
          className="transition duration-300 hover:scale-115 cursor-pointer"
          variant="danger"
        >
          {" "}
          <AiFillDislike color="#ffff" /> <p className="text-sm">{dislike}</p>
        </Button>
      </div>
    </>
  );
}
