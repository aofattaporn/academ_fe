import { DatePicker } from "@mui/x-date-pickers";
import { Moment } from "moment";

type DatePickerRowProps = {
  title: string;
  date: Moment | null;
  handleSetDate: (date: Moment | null) => void;
  isClearabler: boolean;
};

const DatePickerRow = ({
  title,
  date,
  isClearabler,
  handleSetDate,
}: DatePickerRowProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 items-center">
      <p className=" col-span-1 bg-main py-2 flex justify-center rounded-md">
        {title}
      </p>
      <div className="col-span-2 w-full">
        <DatePicker
          defaultValue={date}
          onChange={handleSetDate}
          slotProps={{
            field: { clearable: isClearabler },
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
