import { SpinLoader } from "@/src/Components/SpinLoader";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  return (
    <Suspense fallback={<SpinLoader></SpinLoader>}>
      <h1>PAGINA ADM</h1>
    </Suspense>
  );
}
