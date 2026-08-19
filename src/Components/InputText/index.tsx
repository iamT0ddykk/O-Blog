import { useId } from "react";

type inputProps = {
  labelText?: string;
} & React.ComponentProps<"input">;

export function InputText({ labelText, ...props }: inputProps) {
  const id = useId();

  return (
    <>
      <div className="flex flex-col ">
        {labelText && (
          <label className="text-sm" htmlFor={id}>
            {labelText}
          </label>
        )}
        <input
          className="bg-white outline-0 ring-2 ring-slate-400 rounded-2xl p-2"
          id={id}
          {...props}
        />
      </div>
    </>
  );
}
