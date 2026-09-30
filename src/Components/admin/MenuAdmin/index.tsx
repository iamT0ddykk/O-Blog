"use client";

import { logoutAction } from "@/src/actions/login/logout-action";
import clsx from "clsx";
import {
  FileTextIcon,
  HourglassIcon,
  HouseIcon,
  LogOutIcon,
  PlusIcon,
} from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";

export function MenuAdmin() {
  const [isPending, startTransition] = useTransition();

  const linkClasses = clsx(
    "[&>svg]:w-[16px] [&>svg]:h-[16px] px-4",
    "flex items-center justify-start gap-2 cursor-pointer",
    "transition hover:bg-slate-800 rounded-lg",
    "h-10",
    "shrink-0",
  );
  const navClasses = clsx(
    "bg-slate-900 text-slate-100 rounded-lg",
    "flex flex-col  mb-8",
    "sm:flex-row sm:flex-wrap",
    "sm:overflow-visible sm:h-auto",
  );
  function handleLogout(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();

    startTransition(async () => {
      await logoutAction();
    });
  }

  return (
    <nav className={navClasses}>
      <a className={linkClasses} href="/" target="_blank">
        <HouseIcon />
        Home
      </a>

      <Link className={linkClasses} href="/admin/post">
        <FileTextIcon />
        Posts
      </Link>

      <Link className={linkClasses} href="/admin/post/new">
        <PlusIcon />
        Criar post
      </Link>

      <a onClick={handleLogout} href="#" className={linkClasses}>
        {isPending && (
          <>
            <HourglassIcon />
            Aguarde...
          </>
        )}

        {!isPending && (
          <>
            <LogOutIcon />
            Sair
          </>
        )}
      </a>
    </nav>
  );
}
