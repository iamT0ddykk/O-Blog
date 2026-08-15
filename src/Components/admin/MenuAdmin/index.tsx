import clsx from "clsx";
import Link from "next/link";

export function MenuAdmin() {
  const navClasses = clsx(
    "flex gap-5 text-3xl bg-slate-900 text-slate-100 rounded-lg",
  );
  const linkClasses = clsx("");

  return (
    <>
      <nav className={navClasses}>
        <a href="/" target="_blank">
          Home
        </a>

        <Link className={linkClasses} href={"/admin/post"}>
          Posts
        </Link>
      </nav>
    </>
  );
}
