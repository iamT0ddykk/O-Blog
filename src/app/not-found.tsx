import ErrorMessage from "../Components/ErrorMessage";

export default function NotFoundPage() {
  return (
    <>
      <ErrorMessage
        content="a pagina nao existe ou foi removida"
        contentTitle="404"
        pageTitle="Pagina nao encontrada "
      ></ErrorMessage>
    </>
  );
}
