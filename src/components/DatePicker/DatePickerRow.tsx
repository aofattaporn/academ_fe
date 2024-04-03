import { DatePicker } from "@mui/x-date-pickers";
import moment, { Moment } from "moment";

type DatePickerRowProps = {
  title: string;
  date: Moment | null;
  handleSetDate: (date: Moment | null) => void;
};

const DatePickerRow = ({ title, date, handleSetDate }: DatePickerRowProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 items-center">
      <p className=" col-span-1 bg-main py-2 flex justify-center rounded-md">
        {title}
      </p>
      <div className="col-span-2 w-full">
        <DatePicker
          defaultValue={moment(date)}
          onChange={handleSetDate}
          slotProps={{
            textField: {
              size: "small",
              style: {
                width: "100%",
                display: "flex",
                justifyContent: "center",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default DatePickerRow;
