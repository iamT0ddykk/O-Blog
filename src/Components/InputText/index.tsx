type inputProps = {} & React.ComponentProps<"input">;

export function InputText({ ...props }: inputProps) {
  return (
    <>
      <input {...props} />
    </>
  );
}
