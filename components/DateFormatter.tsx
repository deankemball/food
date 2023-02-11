import { parseISO, format } from "date-fns";

type DateFormatterProps = {
  dateString: string;
};

const DateFormatter = ({ dateString }: DateFormatterProps) => {
  const date = parseISO(dateString);
  return (
    <time
      className="text-light/50 flex w-fit justify-end text-sm leading-8"
      dateTime={dateString}
    >
      {format(date, "yyyymmdd")}
    </time>
  );
};

export default DateFormatter;
