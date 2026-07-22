import { formatDateTime } from "@/src/utils/format-datetime";
import { formatDistanceToNow } from "date-fns";

type PostDateProp = {
  dateTime: string;
};

export function PostDate({ dateTime }: PostDateProp) {
  return (
    <time
      className="text-slate-500 text-sm/tight"
      dateTime={dateTime}
      title={formatDistanceToNow(dateTime)}
    >
      {formatDateTime(dateTime)}
    </time>
  );
}
