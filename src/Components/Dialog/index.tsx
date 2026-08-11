"use client";

type dialongProps = {
  titleText: string;
  descriptionText: React.ReactNode;
  isVisible?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  disabled: boolean;
};

export function Dialog({
  titleText,
  descriptionText,
  isVisible = false,
  onCancel,
  onConfirm,
  disabled = false,
}: dialongProps) {
  if (!isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-40">
        <div className="flex items-center flex-col bg-slate-100 p-6 rounded-lg max-w-2xl m-20 gap-6 shadow-2xl shadow-olive-950/50">
          <div className="text-2xl font-extrabold">{titleText}</div>
          {descriptionText}
          <div className="flex min-w-80 justify-around">
            <button
              onClick={onCancel}
              className="bg-slate-300 hover:bg-slate-400 transition py-2 px-7 rounded-2xl w-20 items-center flex justify-center cursor-pointer disabled:cursor-progress disabled:bg-slate-200 disabled:text-slate-300"
              disabled={disabled}
            >
              cancel
            </button>
            <button
              onClick={onConfirm}
              className="bg-red-300 hover:bg-red-400 transition py-2 px-7 rounded-2xl w-20 cursor-pointer disabled:bg-slate-200 disabled:text-slate-300 disabled:cursor-progress"
              disabled={disabled}
            >
              ok
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
