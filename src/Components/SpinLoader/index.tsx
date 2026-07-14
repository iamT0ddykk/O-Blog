import clsx from "clsx";

type spinLoaderProps = {
  className?: string;
};

export function SpinLoader({ className = "" }: spinLoaderProps) {
  const classes = clsx("flex items-center justify-center", className);

  return (
    <div className={classes}>
      <div className="w-10 h-10 border-5 border-t-transparent rounded-4xl animate-spin"></div>
    </div>
  );
}
