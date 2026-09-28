import { MenuAdmin } from "@/src/Components/admin/MenuAdmin";
import { requireLoginSessionOrRedirect } from "@/src/lib/login/manage-login";

type AdminPostLayoutProps = {
  children: React.ReactNode;
};

export default async function AdminPostLayout({
  children,
}: Readonly<AdminPostLayoutProps>) {
  await requireLoginSessionOrRedirect();
  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}
