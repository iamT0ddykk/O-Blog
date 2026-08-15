import Link from "next/link";
import { FaFileAlt, FaPlus } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

export function MenuAdmin() {
  return (
    <>
      <nav className="flex  gap-5 text-2xl bg-slate-900 text-slate-100 rounded-lg overflow-auto ">
        <a
          href="/"
          target="_blank"
          className="flex hover:bg-slate-800 self-center p-5"
        >
          <FaHouse size={20} className="flex self-center mx-2" />
          Home
        </a>

        <Link
          className="hover:bg-slate-800 flex items-center mx-2 px-5 p-5"
          href={"/admin/post"}
        >
          <FaFileAlt size={20} />
          Posts
        </Link>

        <Link
          className="flex hover:bg-slate-800 items-center mx-2 px-5 p-5"
          href={"/admin/post/new"}
        >
          <FaPlus size={20} />
          Criar post
        </Link>
      </nav>
    </>
  );
}
