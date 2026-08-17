import { InputText } from "@/src/Components/InputText";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
  return (
    <div className="flex flex-col gap-7 p-6">
      <InputText placeholder="digite..."></InputText>
      <InputText placeholder="digite..."></InputText>
    </div>
  );
}
