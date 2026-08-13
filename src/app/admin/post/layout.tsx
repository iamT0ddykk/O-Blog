import { MenuAdmin } from "@/src/Components/admin/MenuAdmin";

type AdminPostLayoutProps = {
  children: React.ReactNode;
};

export default function AdminPostLayout({
  children,
}: Readonly<AdminPostLayoutProps>) {
  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}
