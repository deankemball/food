import { parseISO, format } from "date-fns";

type DateFormatterProps = {
  dateString: string;
};

const DateFormatter = ({ dateString }: DateFormatterProps) => {
  const date = parseISO(dateString);
  return (
    <time className="text-slate-400" dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
};

export default DateFormatter;