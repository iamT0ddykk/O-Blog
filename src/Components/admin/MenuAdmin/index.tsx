import Link from "next/link";

export function MenuAdmin() {
  return (
    <>
      <nav className="flex gap-5 text-3xl">
        <a href="/" target="_blank">
          Home
        </a>

        <Link href={"/admin/post"}>Posts</Link>
      </nav>
    </>
  );
}
