export const dynamic = "force-dynamic";

type AdminPostIdPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminPostIdPage({
  params,
}: AdminPostIdPageProps) {
  const { id } = await params;

  return (
    <>
      <div className="text-4xl py-16">adm id {id}</div>
    </>
  );
}
