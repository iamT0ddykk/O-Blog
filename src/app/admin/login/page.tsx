import { LoginForm } from "@/src/Components/admin/LoginForm";
import ErrorMessage from "@/src/Components/ErrorMessage";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  const allowed = Number(process.env.ALLOW_LOGIN);

  if (allowed != 1) {
    return (
      <>
        <ErrorMessage
          content="Habilite o allow longin no .env"
          contentTitle="Permição negada"
          pageTitle="Permição negada"
        ></ErrorMessage>
      </>
    );
  }
  return (
    <>
      <LoginForm></LoginForm>
    </>
  );
}
