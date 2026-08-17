import { Button } from "@/src/Components/Button";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
  return (
    <>
      <div className="text-4xl flex gap-3 py-16">
        <Button variant="default">texto</Button>
        <Button variant="ghost">texto</Button>
        <Button variant="danger">texto</Button>
      </div>
    </>
  );
}
