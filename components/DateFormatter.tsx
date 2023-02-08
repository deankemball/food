import { parseISO, format } from "date-fns";

type DateFormatterProps = {
  dateString: string;
};

const DateFormatter = ({ dateString }: DateFormatterProps) => {
  const date = parseISO(dateString);
  return (
    <time className="text-light self-end" dateTime={dateString}>
      {format(date, "yyyymmdd")}
    </time>
  );
};

export default DateFormatter;
