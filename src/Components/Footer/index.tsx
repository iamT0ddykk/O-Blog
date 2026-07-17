import Link from "next/link";

export function Footer() {
  return (
    <footer className=" text-center  pb-16 text-slate-400">
      <h1>
        Copyright &copy; {new Date().getFullYear()} -{" "}
        <Link href={"/"}> O Blog </Link>
      </h1>
      {/*what’s a high tier human to a low tier god?*/}
    </footer>
  );
}
